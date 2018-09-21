import React from 'react';
import { withRouter } from 'react-router';

const Button = (props) => {
  const { history, location, match, staticContext, to, onClick, ...rest } = props;

  return (
    <button
      {...rest}
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

export default withRouter(Button);
