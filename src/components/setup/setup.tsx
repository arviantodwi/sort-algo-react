import { css } from '@linaria/core';
import { Button, Card, Flex, Slider } from 'antd';
import { FC, useState } from 'react';
import { PlayIcon } from '@heroicons/react/16/solid';

enum SortType {
  BUBBLE,
  SELECTION,
  INSERTION,
  MERGE,
}

const sortTypeLabel = {
  [SortType.BUBBLE]: 'Bubble Sort',
  [SortType.SELECTION]: 'Selection Sort',
  [SortType.INSERTION]: 'Insertion Sort',
  [SortType.MERGE]: 'Merge Sort',
};

const MIN_ELEMENTS = 12;
const MAX_ELEMENTS = 120;
const DEFAULT_ELEMENTS = 32;

export const Setup: FC = () => {
  const [selectedSortType, setSelectedSortType] = useState<SortType>(SortType.BUBBLE);
  const [sortElementCount, setSortElementCount] = useState<number>(DEFAULT_ELEMENTS);

  // Generate a random number between min and max that is divisible by 4
  function randomMultipleOf4(): number {
    // Ensure min and max are divisible by 4
    const adjustedMin = Math.ceil(MIN_ELEMENTS / 4) * 4;
    const adjustedMax = Math.floor(MAX_ELEMENTS / 4) * 4;

    // Calculate the number of possible values
    const possibleValues = (adjustedMax - adjustedMin) / 4 + 1;
    // Generate a random index and convert to a value
    const randomIndex = Math.floor(Math.random() * possibleValues);

    return adjustedMin + randomIndex * 4;
  }

  return (
    <Card variant="borderless" className={container}>
      <Flex vertical gap={16}>
        <Flex vertical>
          <h1>Set up your sort</h1>
          <p>Pick your preferred sorting method below. You can also adjust the array size.</p>
        </Flex>

        <Flex wrap gap={10}>
          {Object.entries(sortTypeLabel).map(([key, label]) => (
            <Button
              className={sortTypeButton}
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
            min={MIN_ELEMENTS}
            max={MAX_ELEMENTS}
            value={sortElementCount}
            step={4}
            tooltip={{ open: false }}
            onChange={(value) => setSortElementCount(value)}
          />
        </Flex>

        <Button size="large" type="primary" icon={<PlayIcon width={16} />}>
          Start Sorting
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
