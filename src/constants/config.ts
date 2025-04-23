export enum SortType {
  BUBBLE,
  SELECTION,
  INSERTION,
  MERGE,
}

export const SORT_TYPE_LABEL = {
  [SortType.BUBBLE]: 'Bubble Sort',
  [SortType.SELECTION]: 'Selection Sort',
  [SortType.INSERTION]: 'Insertion Sort',
  [SortType.MERGE]: 'Merge Sort',
};

export const DEFAULT_SORT_MIN_ELEMENTS_AMOUNT = 12;
export const DEFAULT_SORT_MAX_ELEMENTS_AMOUNT = 120;
export const DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT = 32;
