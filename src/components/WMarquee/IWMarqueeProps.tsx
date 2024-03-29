import { IWithClassName, IWithChildren } from "@weknow.network/wk-pkg-primitives";

export enum JustifyOptions {
  auto = "auto",
  start = "start",
  end = "end",
  center = "center",
  stretch = "stretch",

  spaceBetween = "space-between",
  spaceAround = "space-around",
  spaceEvenly = "space-evenly",
}

export interface IWMarqueeProps extends IWithClassName, IWithChildren {
  height?: string | number;
  opacity?: number;

  padding?: string;

  /**
   * Average speed per item in seconds
   */
  avgSpeedSec?: number;

  // gradient?: 'background-1' | 'background-2';

  justify?: keyof typeof JustifyOptions;

  width?: string | number;
}
