import React from 'react';
import Avatar from '../Avatar/Avatar';
import More from '../More/More';

export default class Post extends React.Component {
  state = {
    height: 0,
    isExtended: false,
  }

  componentDidMount() {
    this.setState({ height: this.article.clientHeight });
  }

  handleExtend = () => {
    this.setState(state => ({ isExtended: !state.isExtended }));
  }

  render() {
    const { height, isExtended } = this.state;
    const {
      user, uid, title, typ, typFilter, visible, id, self, url,
    } = this.props;

    const isPreview = url === '/type/preview';
    const toExtend = height > 200 && !isPreview;
    const isMe = url ==='/me';

    return (
      <div className="post">
        <article
          className={
            `post__data
            globaltyp ${typFilter}
            ${((toExtend && !isExtended) && !isPreview) && 'globaltyp--inset'}`
          }
          ref={(e) => { this.article = e; }}
        >
          <Avatar uid={uid} user={user} />
          <h4>
            {user}
          </h4>
          <h3>
            {title}
          </h3>
          <p>
            {typ}
          </p>
        </article>
        {(toExtend || isMe) && (
          <More
            id={id}
            isMe={isMe}
            toExtend={toExtend}
            handleExtend={this.handleExtend}
            isExtended={isExtended}
          />
          )}
      </div>
    );
  }
}
