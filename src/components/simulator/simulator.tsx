import { css, cx, LinariaClassName } from '@linaria/core';
import { styled } from '@linaria/react';
import { FC, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_SORT_MAX_ELEMENTS_AMOUNT,
  DEFAULT_SORT_MIN_ELEMENTS_AMOUNT,
} from '../../constants/config';
import { generateElements } from '../../lib/utils';
import { useStoreSelector } from '../../store/store';

type GapVariant = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export const Simulator: FC = () => {
  const { elementsLength } = useStoreSelector('setup');

  const [elements, setElements] = useState<number[]>([]);

  useEffect(() => {
    setElements(generateElements(elementsLength));
  }, [elementsLength]);

  const containerGapSize = useMemo(() => {
    const bins = 5;
    const min = DEFAULT_SORT_MIN_ELEMENTS_AMOUNT;
    const max = DEFAULT_SORT_MAX_ELEMENTS_AMOUNT;
    const binWidth = (max - min) / bins;

    let variant: GapVariant = 'tiny';
    if (elementsLength <= min + binWidth) {
      variant = 'huge';
    } else if (elementsLength <= min + binWidth * 2) {
      variant = 'large';
    } else if (elementsLength <= min + binWidth * 3) {
      variant = 'medium';
    } else if (elementsLength <= min + binWidth * 4) {
      variant = 'small';
    }

    return gapSize[variant];
  }, [elementsLength]);

  return (
    <div className={cx(container, containerGapSize)}>
      {elements.map((element) => (
        <SortElementItem height={`${element}%`} />
      ))}
    </div>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
`;

const gapSize: Record<GapVariant, LinariaClassName> = {
  tiny: css`
    gap: 3px;
  `,
  small: css`
    gap: 6px;
  `,
  medium: css`
    gap: 9px;
  `,
  large: css`
    gap: 12px;
  `,
  huge: css`
    gap: 15px;
  `,
};

const SortElementItem = styled.span<{ height: string }>`
  flex-grow: 1;
  flex-shrink: 1;
  height: ${(props) => props.height};
  background-color: #1677ff;
`;
