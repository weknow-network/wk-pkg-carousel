import React, { useLayoutEffect } from "react";
import { guardNumber } from "./guardNumber";
import { IWCarouselProps } from "./IWCarouselProps";
import "./WCarousel.css";

const WCarousel: React.FC<IWCarouselProps> = ({
  className,
  children: stages,
  gap: gapProp = 2,
  interval = 3000,
  duration = 2000,
  height: heightProp = "1rem",
  align = "center",
  autoPlay = true,
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

  useLayoutEffect(() => {
    if (!global.document) return;
    if (!autoPlay) {
      return;
    }

    const firstChild = document.querySelector<HTMLElement>(
      ".carousel-inner-container > :first-child"
    );

    if (!firstChild || !firstChild.offsetWidth) {
      throw Error("Must pass non-zero width children to carousel");
    }

    const firstChildComputed = window.getComputedStyle(firstChild!);

    const isContentBox = firstChildComputed.boxSizing === "content-box";

    // Calculates width (in px) as the combination of both
    // calculated with and left/right margin combined
    let firstChildWidth =
      parseInt(firstChildComputed.width) +
      parseInt(firstChildComputed.marginLeft) +
      parseInt(firstChildComputed.marginRight);

      // for "box-sizing: content-box" the padding and border width are not included
      // in the element width calculation so must be added in addition
    if (isContentBox) {
      const padding =
        parseInt(firstChildComputed.paddingLeft) +
        parseInt(firstChildComputed.paddingRight);

      const border = parseInt(firstChildComputed.borderWidth) * 2;

      firstChildWidth += border + padding;
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
            duration,
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
  }, [global.document, state.index, autoPlay]);

  let clsOuter = "carousel-outer-container";
  let clsInner = "carousel-inner-container";
  if (className) {
    clsOuter = `${className}-outer-container carousel-outer-container`;
    clsInner = `${className}-inner-container carousel-inner-container`;
  }

  return (
    <div className={clsOuter} style={{ height }}>
      <div
        ref={ref}
        className={clsInner}
        style={{ columnGap: gap, height: "fit-content", alignItems: align }}
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
