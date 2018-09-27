import React from 'react';
import { typRef, time } from '../../fire/fire';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Button from '../Button/Button';

const Preview = (props) => {
  const {
    user, title, typ, typFilter, typReset, history, match,
  } = props;

  const handleSubmit = () => {
    typRef
      .push()
      .set({
        title,
        typ: typ,
        uid: user.providerData[0].uid,
        filter: typFilter,
        userName: user.displayName,
        startedAt: time,
      });
    typReset();
    history.replace('/');
  };

  if (typ === '') {
    return <Redirect to='/' />;
  }
  return (
    <React.Fragment>
      <Header>
        <li className="header__nav__elem">
          <button onClick={()=>history.goBack()}>Back</button>
        </li>
        <li className="header__nav__elem">
          <Button onClick={handleSubmit}>Publish</Button>
        </li>
      </Header>
      <section className="preview content__box">
        <h2>
          Ready to go? &nbsp;
            <span role="img" aria-label="rocket">
            🚀
            </span>
        </h2>
        <Post
          uid={user.providerData[0].uid}
          user={user.displayName}
          title={title}
          typ={typ}
          typFilter={typFilter}
          url={match.url}
        />
      </section>
    </React.Fragment>
  );
};

export default Preview;
