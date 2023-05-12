import React from "react";
import { Link } from "react-router-dom";
class Welcome extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
     return( <div className="header">
                <div className="headerImg">
                <Link to="./">
                <img src="https://i.postimg.cc/QN1V26jF/Logo-removebg-preview.png" alt="header" />
                </Link>
                </div>
                <div className="Menu">
                <button className="Wbutton" onClick={event=> this.props.handleClick(1)}>About</button>
                <button className="Wbutton" onClick={event=> this.props.handleClick(2)}>Timeline</button>
                <button className="Wbutton" onClick={event=> this.props.handleClick(3)}>Programs</button>
                </div>
        </div>)
    }
}

export default Welcome;
