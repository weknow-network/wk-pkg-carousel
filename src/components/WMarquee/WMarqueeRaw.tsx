import React from "react";
import { IMarqueeRawBarProps } from "./IWMarqueeRawProps";
import { IWithChildren } from "@weknow.network/wk-pkg-primitives";

export const WMarqueeRaw = ({ className, children }: IMarqueeRawBarProps) => {
  return (
    <div className={`comp-marquee-root ${className}`}>
      <div className="comp-marquee">
        <div className="comp-marquee-movable">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
