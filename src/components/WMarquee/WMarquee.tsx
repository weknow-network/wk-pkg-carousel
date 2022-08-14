import React, { useLayoutEffect } from "react";
import { guardNumber } from "../guardNumber";
import { IWMarqueeProps } from "./IWMarqueeProps";
import "./WMarquee.css";

export const WMarquee: React.FC<IWMarqueeProps> = ({
  className,
  children,
  gap: gapProp = 2,
  speedSec = 2,
  height: heightProp = '1rem',
  align = 'center',
  autoPlay = true,
  animationDistanceCompensation = 0,
}) => {
  const gap = guardNumber(gapProp) ? `${gapProp}rem` : gapProp;
  const height = guardNumber(heightProp) ? `${heightProp}rem` : heightProp;

  let clsOuter = "marquee-outer-container";
  let clsInner = "marquee-inner-container";
  if (className) {
    clsOuter = `${className}-outer-container marquee-outer-container`;
    clsInner = `${className}-inner-container marquee-inner-container`;
  }

  return (
    <div className={clsOuter}
        style={{ height }}>
      <div
        className={clsInner}
        style={{ columnGap: gap, height: 'fit-content', alignItems: align}}
      >
        {children}
      </div>
    </div>
  );
};

