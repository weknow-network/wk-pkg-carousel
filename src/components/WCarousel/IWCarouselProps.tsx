import React from "react";
import { AlignOptions } from "./AlignOptions";

export interface IWCarouselProps {
  className?: string;
  children: React.ReactNode;
  gap?: number | string;
  interval: number;
  height?:  number | string;
  align?: AlignOptions | keyof typeof AlignOptions;
}
