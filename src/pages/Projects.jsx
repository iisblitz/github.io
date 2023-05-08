import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            url:"",
            details:{} 
        }
    }
    componentDidMount(){
        let url = window.location.href.split("/")[4].replace("%20"," ");
        let details = this.props.loadData.filter(e=> e.Title === url)[0];
        this.setState({loading:false, url, details});
    }
    render(){
        if(this.state.loading){
            return <div>...Loading</div>
          }
        const {details} = this.state;
            if (!details) {
            return <div>Details not found</div>;
          }

          return(
            <div className="A3F">
                <h1>{details.Title}</h1>
                <div className="Cols">
                <div className="backGround">
                    <div className="A3Ftitle"><h2>Problem Background</h2></div> 
                    <div className="probDesc"><h3>Problem Description</h3><p>{details.ProblemDescription}</p></div>
                    <div className="desiredState"><h3>Desired State</h3><p>{details.DesiredState}</p></div>
                    <div className="goal"><h3>Goals</h3><p>{details.Goals}</p></div>
                </div>
                <div className="Solution">
                    <div className="A3Ftitle"><h2>Solution</h2></div>
                    <div className="Tools"><h3>Tools:</h3>{details.Tools}</div>
                    <div className="Plan">
                        <h3>Plan</h3>
                        <ol>{details.Plan}</ol>
                    </div>
                </div>
                <div className="Results">
                    <div className="A3Ftitle"><h2>Deliverable</h2></div>
                    <div className="status"><p> Status:{details.Status}</p><div/>
                    <div className="Deliverable"><img src={details.Image} alt="DeliverablePic" /></div>
                    <div className="link"> <h3><a href={details.Deliverable}> Google Drive Acces to file</a> </h3></div>
                </div>    
                </div>
                </div>
                <Link to="../">Go Home</Link>
              
            </div>
            
          )

    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer.arts
});

export default connect(mapStateToProps)(Projects);