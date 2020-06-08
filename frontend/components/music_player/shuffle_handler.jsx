import React, { useState, useEffect, useCallback } from 'react';

// We may not even need to store shuffle state in container.
// If the main container only cares about the effectiveQueue and the currentIdx
// and this component changes those based on shuffleState then the container
// never needs to know if it is playing the shuffle queue or the original queue
const ShuffleHandler = ({
  origQueue,
  effectiveQueue,
  setEffectiveQueue,
  currentIdx
}) => {
  const [isOn, setIsOn] = useState(false);

  // If  receive a new idx we need to build a new queue around that idx
  useEffect(() => {
    if (isOn && origQueue[currentIdx] ) {
      const shuffledQueue = shuffleQueue(origQueue, currentIdx);
      setEffectiveQueue(shuffleQueue, 0);
    }
  },
    [origQueue, currentIdx]
  );

  // When toggle is turned on, the newIdx should be set to 0
  // When toggle is turned off, the newIdx should be set to the current song's
  // index in the original queue
  const toggleShuffle = useCallback(() => {
    if (!isOn) {
      setIsOn(true);

      const shuffledQueue = shuffleQueue(origQueue, currentIdx);
      return setEffectiveQueue(shuffleQueue, 0);
    } else {
      setIsOn(false);
      const currentSong = effectiveQueue[currentIdx];
      const origIndex = origQueue.indexOf(currentSong);

      return setEffectiveQueue(origIndex, origIdx);
    }
  },
    [isOn, origQueue, currentIdx, effectiveQueue, setEffectiveQueue]
  );

  return (
    <ShuffleButton isOn={isOn} onClick={toggleShuffle} />
  )
}

// Return new array will the currentIdx at the beginning and all other elements
// randomly shuffled.
const shuffleQueue = (arr, currentIdx) => {
  const firstEle = arr[currentIdx];
  let newArr = [...arr];
  newArr.splice(currentIdx, 1);

  for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  console.log(arr, newArr);
  return [firstEle, ...newArr];
}

export { ShuffleHandler as default };

