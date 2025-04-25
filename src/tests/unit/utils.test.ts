import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SORT_MAX_ELEMENTS_AMOUNT,
  DEFAULT_SORT_MIN_ELEMENTS_AMOUNT,
} from '../../constants/config';
import { generateElements, randomMultipleOf4 } from '../../lib/utils';

describe('randomMultipleOf4', () => {
  it('returns a number divisible by 4 within the default range', () => {
    const result = randomMultipleOf4();
    expect(result % 4).toBe(0);
    expect(result).toBeGreaterThanOrEqual(DEFAULT_SORT_MIN_ELEMENTS_AMOUNT);
    expect(result).toBeLessThanOrEqual(DEFAULT_SORT_MAX_ELEMENTS_AMOUNT);
  });

  it('respects custom min and max bounds', () => {
    const result = randomMultipleOf4(20, 40);
    expect(result % 4).toBe(0);
    expect(result).toBeGreaterThanOrEqual(20);
    expect(result).toBeLessThanOrEqual(40);
  });

  it('throws error if no valid multiples of 4 exist in range', () => {
    expect(() => randomMultipleOf4(5, 6)).toThrow('No valid values in range for divisibility by 4');
  });
});

describe('generateElements', () => {
  it('returns an array of the correct length', () => {
    const count = 10;
    const result = generateElements(count);
    expect(result).toHaveLength(count);
  });

  it('returns values between 1 and 100', () => {
    const result = generateElements(50);
    for (const val of result) {
      expect(val).toBeGreaterThanOrEqual(1);
      expect(val).toBeLessThanOrEqual(100);
    }
  });
});
