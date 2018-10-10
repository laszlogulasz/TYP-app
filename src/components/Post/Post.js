import React from 'react';
import Avatar from '../Avatar';
import More from '../More';

export default class Post extends React.Component {
  state = {
    height: 0,
    isExpanded: false,
  }

  componentDidMount() {
    this.setState({ height: this.article.clientHeight });
  }

  handleExpand = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  }

  render() {
    const { height, isExpanded } = this.state;
    const {
      user, uid, title, typ, typFilter, id, url,
    } = this.props;

    const isPreview = url === '/type/preview';
    const isInfo = url === '/info';
    const isUserPage = url === '/me';
    const toExpand = height > 200 && !isInfo && !isPreview;
    const showMore = toExpand || isUserPage;
    const showFadeOut = toExpand && !isExpanded && !isPreview;
    return (
      <section className="post">
        <article
          className={
            `post__data
            globaltyp ${typFilter}
            ${showFadeOut && 'globaltyp--fadeOut'}`
          }
          ref={(e) => { this.article = e; }}
        >
          <Avatar uid={uid} user={user} />
          <h4>{user}</h4>
          <h3>{title}</h3>
          <p>{typ}</p>
        </article>
        {showMore && (
          <More
            id={id}
            isUserPage={isUserPage}
            toExpand={toExpand}
            handleExpand={this.handleExpand}
            isExpanded={isExpanded}
          />
        )}
      </section>
    );
  }
}
