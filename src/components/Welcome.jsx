import React from "react";

class Welcome extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return( <div>
            <h1>Welcome</h1>
                <button onClick={event=> this.props.handleClick(1)}>About</button>
                <button onClick={event=> this.props.handleClick(2)}>Time Line</button>
                <button onClick={event=> this.props.handleClick(3)}>News</button>
        </div>)
    }
}

export default Welcome;