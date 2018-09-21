import React from 'react';
import { typRef } from '../../fire/fire';
import Button from '../Button/Button';

const More = (props) => {
  const {id, isMe, handleExtend, isExtended, toExtend} = props;

  const handleMore = () => {
    handleExtend();
  }

  const handleRemove = () => {
    typRef.child(id).remove();
  }

  return (
    <ul className={`more ${isMe && 'more--right'}`}>
      {isMe && (
        <li className="more__elem">
          <Button onClick={handleRemove}>Delete</Button>
        </li>
      )}
      {toExtend && (
        <li className="more__elem">
          <Button onClick={handleMore}>{isExtended ? 'Collapse' : 'Read more'}</Button>
        </li>
      )}
    </ul>
  );
};

export default More;
