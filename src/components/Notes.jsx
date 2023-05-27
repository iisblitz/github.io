import React from 'react'
import { connect } from 'react-redux';

class Notes extends React.Component {
  render() {
    return (
      <div>Notes</div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer
});

export default connect(mapStateToProps)(Notes);