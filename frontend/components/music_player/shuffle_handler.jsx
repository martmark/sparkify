import React, { useState, useEffect, useCallback } from 'react';
import { ShuffleButton } from './media_buttons.jsx';

// We may not even need to store shuffle state in container.
// If the main container only cares about the effectiveQueue and the currentIdx
// and this component changes those based on shuffleState then the container
// never needs to know if it is playing the shuffle queue or the original queue
// Counter to this it may be useful to save something in the container state
// like requestReShuffle that will signal to this component that it needs to
// reshuffle the playlist.
const ShuffleHandler = ({
  origQueue,
  effectiveQueue = origQueue,
  setEffectiveQueue,
  currentIdx
}) => {
  const [isOn, setIsOn] = useState(false);

  // If  receive a new idx we need to build a new queue around that idx
  useEffect(() => {
    // If the queue isn't shuffled, shuffle it
    if (isOn && origQueue === effectiveQueue) {
      const shuffledQueue = shuffleQueue(origQueue);
      setEffectiveQueue(shuffledQueue);
    } else if (!isOn && origQueue !== effectiveQueue) {
      setEffectiveQueue(origQueue);
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
      return setEffectiveQueue(shuffledQueue, 0);
    } else {
      setIsOn(false);

      const currentSong = effectiveQueue[currentIdx];
      console.log(currentSong, origQueue);
      const origIndex = origQueue.indexOf(currentSong);

      return setEffectiveQueue(origQueue, origIndex);
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
const shuffleQueue = (arr) => {
  let newArr = [...arr];

  for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  console.log("Array re-shuffle");
  return newArr;
}

export { ShuffleHandler as default };

