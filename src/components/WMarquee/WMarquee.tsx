import React, { useLayoutEffect, useState } from "react";
import { IWMarqueeProps } from "./IWMarqueeProps";
import { WMarqueeRaw } from "./WMarqueeRaw";
import { setDynamicStyles } from "./WMarquee.styles";
import "./WMarquee.css";

export const WMarquee = (props: IWMarqueeProps) => {
  const { className, children, speedSec = 20 } = props;

  useLayoutEffect(() => {
    if (!global.document) return;

    const target = document.querySelector<HTMLElement>(".comp-marquee-movable");

    if (!target?.offsetWidth) {
      throw Error("Must pass non-zero width children to carousel");
    }

    const targetChildComputed = window.getComputedStyle(target!);

    const isContentBox = targetChildComputed.boxSizing !== "border-box";

    // Calculates width (in px) as the combination of both
    // calculated with and left/right margin combined
    let slidingWidth =
      parseInt(targetChildComputed.width) +
      parseInt(targetChildComputed.marginLeft) +
      parseInt(targetChildComputed.marginRight);

    // for "box-sizing: content-box" the padding and border width are not included
    // in the element width calculation so must be added in addition
    if (isContentBox) {
      const padding =
        parseInt(targetChildComputed.paddingLeft) +
        parseInt(targetChildComputed.paddingRight);

      const border = parseInt(targetChildComputed.borderWidth) * 2;

      slidingWidth += border + padding;
    }

    slidingWidth = slidingWidth / 2;

    setDynamicStyles({ ...props, speedSec, slidingWidth });
  }, [global.document]);

  return <WMarqueeRaw className={className} children={children} />;
};
