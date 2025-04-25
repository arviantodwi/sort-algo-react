import { PlayIcon, StopIcon } from '@heroicons/react/16/solid';
import { css } from '@linaria/core';
import { Button, Card, Flex, Slider } from 'antd';
import { FC } from 'react';
import {
  DEFAULT_SORT_MAX_ELEMENTS_AMOUNT,
  DEFAULT_SORT_MIN_ELEMENTS_AMOUNT,
  SORT_ALGO_LABEL,
} from '../../constants/config';
import { randomMultipleOf4 } from '../../lib/utils';
import { toggleSortAlgo, updateElementsLength } from '../../store/slices/setupSlice';
import { startSort, stopSort } from '../../store/slices/sortSlice';
import { useStoreDispatch, useStoreSelector } from '../../store/store';

export const Setup: FC = () => {
  const { elementsLength, selectedAlgo } = useStoreSelector('setup');
  const { isSortRunning } = useStoreSelector('sort');
  const dispatch = useStoreDispatch();

  return (
    <Card variant="borderless" className={container}>
      <Flex vertical gap={16}>
        <Flex vertical>
          <h1>Set up your sort</h1>
          <p>Pick your preferred sorting method below. You can also adjust the array size.</p>
        </Flex>

        <Flex wrap gap={10}>
          {Object.entries(SORT_ALGO_LABEL).map(([key, label]) => (
            <Button
              className={sortTypeButton}
              disabled={isSortRunning}
              key={label}
              type={selectedAlgo === Number(key) ? 'primary' : 'default'}
              onClick={() => {
                dispatch(toggleSortAlgo(Number(key)));
              }}
            >
              {label}
            </Button>
          ))}
        </Flex>

        <Flex vertical>
          <Flex gap={10} justify="space-between" align="center">
            <div className={sortElementCounter}>
              <span className={counterNumber}>{elementsLength}</span> <span>elements</span>
            </div>

            <Button
              type="default"
              disabled={isSortRunning}
              size="small"
              onClick={() => {
                dispatch(updateElementsLength(randomMultipleOf4()));
              }}
            >
              <small>Randomize</small>
            </Button>
          </Flex>

          <Slider
            defaultValue={elementsLength}
            min={DEFAULT_SORT_MIN_ELEMENTS_AMOUNT}
            max={DEFAULT_SORT_MAX_ELEMENTS_AMOUNT}
            value={elementsLength}
            step={4}
            tooltip={{ open: false }}
            disabled={isSortRunning}
            onChange={(value) => {
              dispatch(updateElementsLength(value));
            }}
          />
        </Flex>

        <Button
          size="large"
          type="primary"
          icon={isSortRunning ? <StopIcon width={16} /> : <PlayIcon width={16} />}
          danger={isSortRunning}
          onClick={() => {
            if (isSortRunning) {
              return dispatch(stopSort());
            }

            dispatch(startSort());
          }}
        >
          {isSortRunning ? 'Stop sorting' : 'Start sorting'}
        </Button>
      </Flex>
    </Card>
  );
};

const container = css`
  position: fixed;
  top: 24px;
  right: 24px;
  width: 300px;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.75);
`;

const sortTypeButton = css`
  flex-grow: 1;
  max-width: calc(50% - 5px);
`;

const sortElementCounter = css`
  vertical-align: baseline;
`;

const counterNumber = css`
  font-size: 32px;
`;
