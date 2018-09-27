import React from 'react';

const Cookies = (props) => {
  const { cookies, handleCookiesAccept } = props;

  return (
    <aside
        className="cookies__bar"
        style={cookies ? {display: 'none'} : null}
      >
      <div className="cookies__info">
        <p>This site uses cookies to serve better.
          Don't worry, it's for educational use only.
        </p>
        <button
          type="button"
          className="button__close" onClick={() => handleCookiesAccept()}
          title='Close cookie info'
          aria-label="Close">
        </button>
      </div>
    </aside>
  )
}

export default Cookies;
