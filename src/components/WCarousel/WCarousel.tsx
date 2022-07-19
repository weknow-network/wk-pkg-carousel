import React from "react";
import { IWCarouselProps } from "./IWCarouselProps";
import "./WCarousel.css";

const guardNumber = (x: any): x is number  =>{
  return typeof x === "number";
}

const WCarousel: React.FC<IWCarouselProps> = ({ children: stages, gap = 2, interval }) => {
  const [state, setState] = React.useState<{
    index: number;
    paused: boolean;
  }>({
    index: 0,
    paused: false,
  });
  const children = Array.isArray(stages) ? stages : [stages]


  const gapValue = guardNumber(gap) ? `${gap}rem` : gap;

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
              transform: `translateX(calc(-${firstChildWidth}px - ${gapValue}))`,
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

  return (
    <div className="carousel-outer-container">
      <div
        ref={ref}
        className="carousel-inner-container"
        style={{ columnGap: `${gapValue}` }}
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
