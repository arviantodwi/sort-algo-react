import { PlayIcon, StopIcon } from '@heroicons/react/16/solid';
import { css } from '@linaria/core';
import { Button, Card, Flex, Slider } from 'antd';
import { FC, useState } from 'react';
import {
  DEFAULT_SORT_MAX_ELEMENTS_AMOUNT,
  DEFAULT_SORT_MIN_ELEMENTS_AMOUNT,
  DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT,
  SORT_TYPE_LABEL,
  SortType,
} from '../../constants/config';
import { randomMultipleOf4 } from '../../lib/utils';

export const Setup: FC = () => {
  const [selectedSortType, setSelectedSortType] = useState<SortType>(SortType.BUBBLE);
  const [sortElementCount, setSortElementCount] = useState<number>(
    DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT
  );
  const [isSortStarted, setIsSortStarted] = useState<boolean>(false);

  return (
    <Card variant="borderless" className={container}>
      <Flex vertical gap={16}>
        <Flex vertical>
          <h1>Set up your sort</h1>
          <p>Pick your preferred sorting method below. You can also adjust the array size.</p>
        </Flex>

        <Flex wrap gap={10}>
          {Object.entries(SORT_TYPE_LABEL).map(([key, label]) => (
            <Button
              className={sortTypeButton}
              disabled={isSortStarted}
              key={key}
              type={selectedSortType === (parseInt(key) as SortType) ? 'primary' : 'default'}
              onClick={() => setSelectedSortType(parseInt(key) as SortType)}
            >
              {label}
            </Button>
          ))}
        </Flex>

        <Flex vertical>
          <Flex gap={10} justify="space-between" align="center">
            <div className={sortElementCounter}>
              <span className={counterNumber}>{sortElementCount}</span> <span>elements</span>
            </div>

            <Button
              type="default"
              disabled={isSortStarted}
              size="small"
              onClick={() => {
                setSortElementCount(randomMultipleOf4());
              }}
            >
              <small>Randomize</small>
            </Button>
          </Flex>

          <Slider
            defaultValue={sortElementCount}
            min={DEFAULT_SORT_MIN_ELEMENTS_AMOUNT}
            max={DEFAULT_SORT_MAX_ELEMENTS_AMOUNT}
            value={sortElementCount}
            step={4}
            tooltip={{ open: false }}
            disabled={isSortStarted}
            onChange={(value) => setSortElementCount(value)}
          />
        </Flex>

        <Button
          size="large"
          type="primary"
          icon={isSortStarted ? <StopIcon width={16} /> : <PlayIcon width={16} />}
          danger={isSortStarted}
          onClick={() => setIsSortStarted((prev) => !prev)}
        >
          {isSortStarted ? 'Stop sorting' : 'Start sorting'}
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
