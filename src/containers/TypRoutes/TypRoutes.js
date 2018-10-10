import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as actions from '../../actions';
import Typeform from '../../components/Typeform';
import Stylize from '../../components/Stylize';
import Preview from '../../components/Preview';

const TypeRoutes = (props) => {
  const {
    titleChange, typChange, title, typ, typFilter, filterSwitch, typReset, currentUser,
  } = props;


  return (
    <React.Fragment>
      <Route
        exact
        path="/type"
        render={props => (
          <Typeform
            titleChange={titleChange}
            typChange={typChange}
            title={title}
            typ={typ}
            typFilter={typFilter}
            typReset={typReset}
            {...props}
          />)}
      />
      <Route
        exact
        path="/type/stylize"
        render={props => (
          <Stylize
            title={title}
            typ={typ}
            typFilter={typFilter}
            filterSwitch={filterSwitch}
            {...props}
          />)}
      />
      <Route
        exact
        path="/type/preview"
        render={props => (
          <Preview
            title={title}
            typ={typ}
            typFilter={typFilter}
            typReset={typReset}
            user={currentUser}
            {...props}
          />)}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  title: state.typReducer.title,
  typ: state.typReducer.typ,
  typFilter: state.filterReducer.filter,
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(TypeRoutes);
