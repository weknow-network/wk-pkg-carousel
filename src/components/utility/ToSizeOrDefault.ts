import { guardString } from "@weknow.network/wk-pkg-primitives";

export const toSize = (input: string | number): string => {
  if (guardString(input)) return input;
  return `${input}rem`;
};


export const toSizeOrDefault = (
    input?: string | number,
    defaultValue?: string | number
  ): string | undefined => {
    if (!input) {
      if (!defaultValue) return undefined;
      return toSize(defaultValue);
    }
    return toSize(input) ?? defaultValue;
  };
  