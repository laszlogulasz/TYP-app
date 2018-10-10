import React from 'react';
import { withCookies } from 'react-cookie';

class Cookies extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.state = {
      cookies: cookies.get('cookies') || false,
    };
  }

  handleCookiesAccept = () => {
    if (navigator.cookieEnabled) {
      const date = new Date();
      date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
      document.cookie = `cookies=true; expires="${date.toGMTString()}; path="/"`;
    }
    this.setState({ cookies: true });
  }

  render() {
    const { cookies } = this.state;
    return (
      <aside className="cookies__bar" style={cookies ? { display: 'none' } : null}>
        <div className="cookies__info">
          <p>
            This site uses cookies to serve better.
            Don&apos;t worry, it&apos;s for educational use only.
          </p>
          <button
            type="button"
            className="button__close"
            onClick={() => this.handleCookiesAccept()}
            title="Close cookie info"
            aria-label="Close"
          />
        </div>
      </aside>
    );
  }
}

export default withCookies(Cookies);
