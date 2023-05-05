import React from "react";
import { connect } from "react-redux";

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
            <div className="img">
            <img src={e.Logo} alt="workLogo" />
            </div>
            <a href={`./${e.Work}/${e.Title}`}>
            <div className="texts">
            <h3>Project Name: {e.Title}</h3>
            <p>Project for: {e.Work}</p>
            <p>Description: {e.shortDescription}</p>
            <p>Duration: {e.timeConstraints}</p>
            </div>
            </a>
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