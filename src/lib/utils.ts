import {
  DEFAULT_SORT_MAX_ELEMENTS_AMOUNT,
  DEFAULT_SORT_MIN_ELEMENTS_AMOUNT,
} from '../constants/config';

/**
 * Generates a random number that is a multiple of 4 within the given range.
 *
 * @param {number} [min=DEFAULT_SORT_MIN_ELEMENTS_AMOUNT] - The minimum value of the range (inclusive). Will be adjusted to the next multiple of 4.
 * @param {number} [max=DEFAULT_SORT_MAX_ELEMENTS_AMOUNT] - The maximum value of the range (inclusive). Will be adjusted down to the nearest multiple of 4.
 * @returns {number} A random number that is a multiple of 4 within the adjusted range.
 * @throws {Error} If the adjusted range does not contain any valid multiples of 4.
 */
export function randomMultipleOf4(
  min: number = DEFAULT_SORT_MIN_ELEMENTS_AMOUNT,
  max: number = DEFAULT_SORT_MAX_ELEMENTS_AMOUNT
): number {
  // Ensure min and max are divisible by 4
  const adjustedMin = Math.ceil(min / 4) * 4;
  const adjustedMax = Math.floor(max / 4) * 4;

  // Check if we have valid range after adjustment
  if (adjustedMin > adjustedMax) {
    throw new Error('No valid values in range for divisibility by 4');
  }

  // Calculate the number of possible values
  const possibleValues = (adjustedMax - adjustedMin) / 4 + 1;
  // Generate a random index and convert to a value
  const randomIndex = Math.floor(Math.random() * possibleValues);

  return adjustedMin + randomIndex * 4;
}

/**
 * Generates an array of random integers representing element heights in percentages.
 * Each value ranges from 1 to 100.
 *
 * @param {number} elementsLength - The number of elements to generate.
 * @returns {number[]} An array of integers from 1 to 100 representing element heights.
 */
export function generateElements(elementsLength: number): number[] {
  let elements: number[] = [];

  while (elements.length < elementsLength) {
    // The number represents the element's height as a percentage of its container.
    // For example, n = 50 means 50% height.
    const n = Math.floor(Math.random() * 100) + 1;
    // array.push(n > 2 ? n : 2);
    elements = [...elements, n];
  }

  return elements;
}
