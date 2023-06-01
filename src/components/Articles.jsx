import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  constructor(props){
    super(props)   
  }
  render() {
    return ( 
   <div className="Catalog">
        
        
        {this.props.loadData.catalog.filter(e => e.Language === this.props.loadData.language).map(e =>
        <Link to={`/Article/${e.Number}`}>
        <div className="CategoryCard">
          <p> {e.Title}</p>
          
          <p> {e.Category}</p>
          <ol> {e.Keywords.split("/").map(e => <li>{e}</li>)}</ol>
        </div> 
        </Link>
        )}
        
      
     </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loadData: state.rootReducer
});
export default connect(mapStateToProps)(Articles);