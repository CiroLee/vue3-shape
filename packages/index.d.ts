declare const Shape: import("vue").DefineComponent<{
  type: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
}>;

export { Shape }