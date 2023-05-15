import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            url:"",
            details:{},
            texts:[],
            lang:"",
            loading:true 
        }
    }
    componentDidMount(){
        let url = window.location.href.split("/")[5].replace("%20"," ");
        let details = this.props.loadData.filter(e=> e.Title === url)[0];
        const { language, texts } = this.props.loadData;
        this.setState({loading:false, url, details,language, texts});
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
                <Welcome/>
                <h1>{details.Title}</h1>
                <div className="Cols">
                <div className="backGround">
                    {console.log(this.props.loadData)}
                    <div className="A3Ftitle"><h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].bg}</h2></div> 
                    <div className="probDesc"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].pd}</h3><p>{details.ProblemDescription}</p></div>
                    <div className="desiredState"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ds}</h3><p>{details.DesiredState}</p></div>
                    <div className="goal"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].g}</h3><p>{details.Goals}</p></div>
                </div>
                <div className="Solution">
                    <div className="A3Ftitle"><h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ex}</h2></div>
                    <div className="Tools"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].tools}:</h3>{details.Tools}</div>
                    <div className="Plan">
                        <h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].plan}</h3>
                        <ol>{details.Plan}</ol>
                    </div>
                </div>
                <div className="Results">
                    <div className="A3Ftitle"><h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].del}</h2></div>
                    <div className="status"><p> Status:{details.Status}</p><div/>
                    <div className="Deliverable"><img src={details.Image} alt="DeliverablePic" /></div>
                    <div className="link"> <h3><a href={details.Deliverable}> {this.props.loadData.language === "ESP"? "Entregable en Google Drive:": "Deliverable link in Google Drive"}</a> </h3></div>
                </div>    
                </div>
                </div>
                <Link to="./">{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].link2}</Link>
              
            </div>
            
          )

    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer.arts
});

export default connect(mapStateToProps)(Projects);