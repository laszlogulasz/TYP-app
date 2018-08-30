import React from 'react';
import { Link } from 'react-router-dom';
import { typRef, time } from '../../fire/fire';
import Header from '../Header/Header';
import Post from '../Post/Post';

const Preview = (props) => {
  const {
    user, title, desc, typFilter, typReset, history,
  } = props;

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  const handleSubmit = e => {
    typRef
    .push()
    .set({
      title: title,
      typ: desc,
      filter: typFilter,
      user: user.uid,
      userName: user.displayName,
      startedAt: time,
    });
    typReset();
    history.push('/');
  }

  return (
    <React.Fragment>
      <Header>
        <p onClick={back}>back</p>
        <button to="/" onClick={handleSubmit}>Publish</button>
      </Header>
      <section className="preview">
        <h2>
          Ready to publish?
        </h2>
        <Post
          user={user.displayName}
          title={title}
          desc={desc}
          typFilter={typFilter}
        />
      </section>
    </React.Fragment>
  );
};

export default Preview;
