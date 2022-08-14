import React from "react";
import { AlignOptions } from "../AlignOptions";




/**
 * Carousel props
 */
export interface IWCarouselProps {
  /** Class name prefix */
  className?: string;
  /** Child elements to slide */
  children: React.ReactNode;
  /** Gaps between elements */
  gap?: number | string;
  /**
   * Interval between animations (milliseconds) 
   */
  interval?: number;
  /**
   * Duration of the animation (millis  econds)
   */
  duration?: number;
  /**
   * Height of the container
   */
  height?:  number | string;
  /**
   * Alignment of the elements within the container
   */
  align?: AlignOptions | keyof typeof AlignOptions;
  /**
   * Walk around to a jumpy animation ends (will be remove on later version)
   * @deprecated will be remove on later version
   */
  animationDistanceCompensation?: number | string

  /**
   * When true will automatically slide according to the interval
   * 'true' by default.    * 
   */
  autoPlay?: boolean;

  /**
   * Timing function of the animation
   */
  easing?: 'linear' | 'ease-in-out'
}
