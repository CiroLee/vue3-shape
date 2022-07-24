declare const Shape: import('vue').DefineComponent<{
  type: string;
  size?: number | string | null;
  width?: number | string | null;
  height?: number | string | null;
  color?: string | null;
}>;

export { Shape };
