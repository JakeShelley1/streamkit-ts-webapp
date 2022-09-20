import { Range } from './types';

const Ranges: { [key: string]: Range } = {
  one: { value: 'one', label: '24 hours', shortLabel: '24H' },
  seven: { value: 'seven', label: '7 days', shortLabel: '7D' },
  thirty: { value: 'thirty', label: '30 days', shortLabel: '30D' },
  max: { value: 'max', label: 'Max', shortLabel: 'Max' }
};

interface RangeItemProps {
  isSelected: boolean;
  range: Range;
  onClick: (range: Range) => void;
}

const RangeItem = ({ isSelected, range, onClick }: RangeItemProps) => (
  <div
    onClick={() => onClick(range)}
    className={`pointer tc br4 flex-grow-1 pa3 bg-${isSelected ? 'primary' : 'secondary'}`}>
    <b>{range.label}</b>
  </div>
);

interface RangeSelectorProps {
  onSelect: (range: Range) => void;
  selectedRange: Range;
}

const RangeSelector = ({ onSelect, selectedRange }: RangeSelectorProps) => {
  return (
    <div className="f5-m f4 flex flex-row br5 bg-secondary">
      <RangeItem
        range={Ranges.one}
        isSelected={selectedRange.value === Ranges.one.value}
        onClick={(range) => {
          if (selectedRange.value === Ranges.one.value) return;
          onSelect(range);
        }}
      />
      <RangeItem
        range={Ranges.seven}
        isSelected={selectedRange.value === Ranges.seven.value}
        onClick={(range) => {
          if (selectedRange.value === Ranges.seven.value) return;
          onSelect(range);
        }}
      />
      <RangeItem
        range={Ranges.thirty}
        isSelected={selectedRange.value === Ranges.thirty.value}
        onClick={(range) => {
          if (selectedRange.value === Ranges.thirty.value) return;
          onSelect(range);
        }}
      />
      <RangeItem
        range={Ranges.max}
        isSelected={selectedRange.value === Ranges.max.value}
        onClick={(range) => {
          if (selectedRange.value === Ranges.max.value) return;
          onSelect(range);
        }}
      />
    </div>
  );
};

export { RangeSelector, Ranges };
