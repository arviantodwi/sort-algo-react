export enum SortAlgo {
  BUBBLE,
  SELECTION,
  INSERTION,
  MERGE,
}

export const SORT_ALGO_LABEL = {
  [SortAlgo.BUBBLE]: 'Bubble Sort',
  [SortAlgo.SELECTION]: 'Selection Sort',
  [SortAlgo.INSERTION]: 'Insertion Sort',
  [SortAlgo.MERGE]: 'Merge Sort',
};

export const DEFAULT_SORT_MIN_ELEMENTS_AMOUNT = 12;
export const DEFAULT_SORT_MAX_ELEMENTS_AMOUNT = 120;
export const DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT = 32;
