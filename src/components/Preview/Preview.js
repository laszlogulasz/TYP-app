import React from 'react';
import { Redirect } from 'react-router-dom';
import { allRef, time } from '../../fire/fire';
import Header from '../Header';
import Post from '../Post';
import Button from '../Button';

const Preview = (props) => {
  const {
    user, title, typ, typFilter, typReset, history, match,
  } = props;
  const handleSubmit = () => {
    allRef
      .push()
      .set({
        title,
        typ,
        uid: user.providerData[0].uid,
        filter: typFilter,
        userName: user.displayName,
        startedAt: time,
      });
    typReset();
    history.replace('/');
  };

  if (typ === '') { return <Redirect to="/" />; }
  return (
    <React.Fragment>
      <Header>
        <li className="header__nav__elem">
          <button type="button" onClick={() => history.goBack()}>Back</button>
        </li>
        <li className="header__nav__elem">
          <Button onClick={handleSubmit}>Publish</Button>
        </li>
      </Header>
      <main className="preview content__box">
        <h2>
          Ready to go?
          {' '}
          <span role="img" aria-label="rocket">🚀</span>
        </h2>
        <Post
          uid={user.providerData[0].uid}
          user={user.displayName}
          title={title}
          typ={typ}
          typFilter={typFilter}
          url={match.url}
        />
      </main>
    </React.Fragment>
  );
};

export default Preview;
