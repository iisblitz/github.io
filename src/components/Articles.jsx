import React from 'react'
import { connect } from 'react-redux';

class Articles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Work: true,
      Hobbies: false,
      Education: false,
      Language: "ENG"
  }}
  
  render() {
    return (
     <div className="Articles">
        console.log(this.props.loadData)
     </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loadData: state.rootReducer
});

export default connect(mapStateToProps)(Articles);