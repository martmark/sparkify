import React from 'react';
import { IconContext } from 'react-icons';
import { MdQueueMusic } from 'react-icons/md';

const QueueButton = ({ queue, upNext, showQueue }) => {
  let classAddition = "";
  if (upNext.length > 0) {
    classAddition = " queue-active clickable";
  } else if (queue.length > 0) {
    classAddition = " clickable";
  }

  return (
    <React.Fragment>
      <IconContext.Provider
        value={{ className: `queue-button${ classAddition }`, size: "1.25em" }}
      >
        <MdQueueMusic
          onClick={(classAddition.length > 0 ? showQueue : () => null)}
        />
      </IconContext.Provider>
    </React.Fragment>
  );
}

export { QueueButton as default };

