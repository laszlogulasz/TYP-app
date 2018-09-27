import React from 'react';
import { typRef } from '../../fire/fire';
import Button from '../Button/Button';

const More = (props) => {
  const {id, isUserPage, handleExpand, isExpanded, toExpand} = props;

  const handleMore = () => {
    handleExpand();
  }

  const handleRemove = () => {
    typRef.child(id).remove();
  }

  return (
    <ul className={`more ${isUserPage && 'more--right'}`}>
      {isUserPage && (
        <li className="more__elem">
          <Button onClick={handleRemove}>Delete</Button>
        </li>
      )}
      {toExpand && (
        <li className="more__elem">
          <Button onClick={()=>handleExpand()}>{isExpanded ? 'Collapse' : 'Read more'}</Button>
        </li>
      )}
    </ul>
  );
};

export default More;
