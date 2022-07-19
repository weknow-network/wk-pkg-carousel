import React from "react";
import { guardNumber } from "./guardNumber";
import { IWCarouselProps } from "./IWCarouselProps";
import "./WCarousel.css";

const WCarousel: React.FC<IWCarouselProps> = ({
  className,
  children: stages,
  gap: gapProp = 2,
  interval,
  height: heightProp = '1rem',
  align = 'center'
}) => {
  const [state, setState] = React.useState<{
    index: number;
    paused: boolean;
  }>({
    index: 0,
    paused: false,
  });
  const children = Array.isArray(stages) ? stages : [stages];

  const gap = guardNumber(gapProp) ? `${gapProp}rem` : gapProp;
  const height = guardNumber(heightProp) ? `${heightProp}rem` : heightProp;

  const currentChildren = children.slice(state.index, children.length);
  const lastChildren = children.slice(0, state.index);

  const ref = React.useRef<HTMLDivElement>(null);
  const animation = React.useRef<Animation>();
  const timeout = React.useRef<NodeJS.Timeout>();

  React.useLayoutEffect(() => {
    if (!global.document) return;

    const firstChild = document.querySelector<HTMLElement>(
      ".carousel-inner-container > :first-child"
    );
    const firstChildWidth = firstChild?.offsetWidth;

    if (!firstChildWidth) {
      throw Error("Must pass non-zero width children to carousel");
    }

    timeout.current = setTimeout(() => {
      if (ref.current) {
        animation.current = ref.current.animate(
          [
            {
              transform: "translateX(0px)",
            },
            {
              transform: `translateX(calc(-${firstChildWidth}px - ${gap}))`,
            },
          ],
          {
            duration: 2000,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );

        animation.current.onfinish = () => {
          setState((previous) => ({
            ...previous,
            index:
              previous.index === children.length - 1 ? 0 : previous.index + 1,
          }));

          setTimeout(() => animation.current?.cancel(), 0);
        };
      }
    }, interval);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [global.document, state.index]);

  let clsOuter = "carousel-outer-container";
  let clsInner = "carousel-inner-container";
  if (className) {
    clsOuter = `${className}-outer-container carousel-outer-container`;
    clsInner = `${className}-inner-container carousel-inner-container`;
  }

  return (
    <div className={clsOuter}
        style={{ height }}>
      <div
        ref={ref}
        className={clsInner}
        style={{ columnGap: gap, height: 'fit-content', alignItems: align}}
        // onMouseEnter={() => animation.current?.pause()}
        // onMouseLeave={() => animation.current?.play()}
      >
        {currentChildren}
        {lastChildren}
      </div>
    </div>
  );
};

export default WCarousel;
