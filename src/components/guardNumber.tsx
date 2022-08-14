export const guardNumber = (x: any): x is number => {
  return typeof x === "number";
};
