import { dijkstra } from './dijkstra';
import type { Item, ScaledItem } from './types';

function round(n: number) {
  return Math.round(n * 100 + Number.EPSILON) / 100;
}

function ratio(width: number, height: number) {
  return round(width / height);
}

function scaleHeight(width: number, ratio: number) {
  return round(width / ratio);
}

function scaleWidth(height: number, ratio: number) {
  return round(height * ratio);
}

function getRowHeight(row: any[], containerWidth: number, gutter: number) {
  const rowWidth = containerWidth - (row.length - 1) * gutter;
  const rowAspectRatio = row.reduce((acc, { ratio }) => acc + ratio, 0);
  return scaleHeight(rowWidth, rowAspectRatio);
}

function cost(
  items: Item[],
  start: number,
  end: number,
  containerWidth: number,
  targetHeight: number,
  gutter: number
) {
  const row = items.slice(start, end),
    rowHeight = getRowHeight(row, containerWidth, gutter);
  return Math.pow(Math.abs(rowHeight - targetHeight), 2);
}

function seekLimit(containerWidth: number, targetRowHeight: number) {
  const count = ratio(containerWidth, targetRowHeight) / 0.75;
  return containerWidth < 420 ? 2 : Math.round(count * 1.5);
}

export function computeGrid({
  items,
  containerWidth,
  targetHeight,
  gutter = 2
}: {
  items: Item[];
  containerWidth: number;
  targetHeight: number;
  gutter: number;
}) {
  const _items = items.map((item, index) => {
      return {
        ...item,
        index,
        ratio: ratio(item.width, item.height)
      };
    }),
    nodeSeekLimit = seekLimit(containerWidth, targetHeight);

  function graph(start = 0) {
    const results: any = {};

    start = +start;
    results[start] = 0;

    for (let i = start + 1; i < _items.length + 1; ++i) {
      if (i - start > nodeSeekLimit) {
        break;
      }
      results['' + i] = cost(
        _items,
        start,
        i,
        containerWidth,
        targetHeight,
        gutter
      );
    }
    return results;
  }

  const scaledItems: ScaledItem[] = [],
    path = dijkstra.find_path(graph, '0', _items.length);

  for (let i = 0; i < path.length; i++) {
    if (path[i + 1]) {
      const row = _items.slice(+path[i], +path[i + 1]),
        isLastRow = i === path.length - 2,
        rowHeight = getRowHeight(row, containerWidth, gutter);

      row.forEach((image, index) => {
        image.scaledWidth = scaleWidth(rowHeight, image.ratio);
        image.scaledHeight = rowHeight;
        image.scaledWidthPc = round((image.scaledWidth / containerWidth) * 100);

        if (index === row.length - 1) {
          image.isLastInRow = true;
        }
        image.isLastRow = isLastRow;

        scaledItems.push(image);
      });
    }
  }

  return scaledItems;
}
