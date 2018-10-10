import React from 'react';
import Loader from '../Loader';
import MainRoutes from '../../containers/MainRoutes';
import Footer from '../Footer';
import Cookies from '../Cookies';

const AppContainer = (props) => {
  const { currentUser, logged, loading } = props;
  return (
    <React.Fragment>
      <div className="container">
        {loading ? <Loader /> : <MainRoutes currentUser={currentUser} logged={logged} />}
        <Footer user={currentUser} logged={logged} />
      </div>
      <Cookies />
    </React.Fragment>
  );
};

export default AppContainer;
