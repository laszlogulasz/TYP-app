import React from 'react';
import { connect } from 'react-redux';
import { titleChange, typChange } from '../../actions';
import Typeform from '../../components/Typeform';


const Type = (props) => {
  const {
    titleChange, typChange, title, typ, typFilter,
  } = props;

  return (
    <Typeform
      titleChange={titleChange}
      typChange={typChange}
      title={title}
      typ={typ}
      typFilter={typFilter}
    />
  );
};

const mapStateToProps = state => ({
  title: state.titleReducer,
  typ: state.typReducer,
  typFilter: state.filterReducer,
});

const mapDispatchToProps = { titleChange, typChange };

export default connect(mapStateToProps, mapDispatchToProps)(Type);
