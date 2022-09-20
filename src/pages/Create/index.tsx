import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RangeSelector, Ranges, Loading } from '../../shared/components';
import { Clip } from './types';

const Create = () => {
  const [clips, setClips] = useState(null);
  const [errors, setErrors] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [selectedRange, setSelectedRange] = useState(Ranges.seven);
  const [getClipsRequestInProgress, setGetClipsRequestInProgress] =
    useState(false);

  const handleGetClip = () => {
    console.log('Flag');
  };

  useEffect(() => {
    handleGetClip();
  }, [selectedRange.value]);

  return (
    <div>
      <RangeSelector
        onSelect={setSelectedRange}
        selectedRange={selectedRange}
      />
    </div>
  );
};

export default Create;
