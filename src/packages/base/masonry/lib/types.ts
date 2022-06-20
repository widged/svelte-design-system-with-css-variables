export type ScaledItem = {
  id: string;
  index?: number;
  ratio?: number;
  scaledHeight: number;
  scaledWidth: number;
  isLastInRow: boolean;
  isLastRow: boolean;
  scaledWidthPc?: string;
};

export type Item = {
  id: string;
  width: number;
  height: number;
} & any;
