import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
class News extends React.Component {
    constructor(props) {
        super(props);
}

render(){
    return(
    <div>
        <div className="proDisplay">
           {this.props.loadData.map(e=>
            (

            <div key={e.id} className="proCards">       
            <Link to={e.Work+"/"+e.Title}>
            <div className="img">
            <img src={e.Logo} alt="workLogo" />
            </div>
            <div className="texts">
            <h3>Project Name: {e.Title}</h3>
            <p>Project for: {e.Work}</p>
            <p>Description: {e.shortDescription}</p>
            <p>Duration: {e.timeConstraints}</p>
            </div>
            <div className={`BOK ${e.Color}`}>
                {e.Color}
                <h3>{e.Education}</h3>
            </div>
            </Link>
            </div>
            ))}
        </div>
    </div>
    )
}}


const mapStateToProps = (state) => ({
    loadData: state.rootReducer.arts
  });

  export default connect(mapStateToProps)(News);