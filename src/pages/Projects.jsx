import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import Image from '../Banner.png'
import { Helmet } from "react-helmet";
class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            url:"",
            details:{},
            texts:[],
            language:"",
            loading:true 
        }
    }
    componentDidMount(){
        const { language, texts } = this.props.loadData;
        let url = window.location.href.split("/")[4];
        let details = this.props.loadData.arts.filter(e=> e.number === url);
        this.setState({loading:false, url, details, language, texts});
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
                <Helmet>
                <title>Protafolio y CV de David Gonzalez / David Gonzalez's Portfolio & CV</title>
                <meta name="title" content={details.filter(e=>e.Langauge === this.props.loadData.language)[0].Title}/>
                <meta name="description" content={details.filter(e=>e.Langauge === this.props.loadData.language)[0].ProblemDescription}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://iisdbga.online/"/>
                <meta property="og:title" content={details.filter(e=>e.Langauge === this.props.loadData.language)[0].Title}/>
                <meta property="og:description" content={details.filter(e=>e.Langauge === this.props.loadData.language)[0].ProblemDescription}/>
                <meta property="og:image" content={Image}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://iisdbga.online/"/>
                <meta property="twitter:title" content={details.filter(e=>e.Langauge === this.props.loadData.language)[0].Title}/>
                <meta property="twitter:description" content={details.filter(e=>e.Langauge === this.props.loadData.language)[0].ProblemDescription}/>
                <meta property="twitter:image" content={Image}/>
                </Helmet>


                <Welcome/>
                <h1>{details.filter(e=>e.Langauge === this.props.loadData.language)[0].Title}</h1>
                <div className="Cols">
                <div className="backGround">
                    <div className="A3Ftitle"><h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].bg}</h2></div> 
                    <div className="probDesc"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].pd}</h3><p>{details.filter(e=>e.Langauge === this.props.loadData.language)[0].ProblemDescription}</p></div>
                    <div className="desiredState"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ds}</h3><p>{details.filter(e=>e.Langauge === this.props.loadData.language)[0].DesiredState}</p></div>
                    <div className="goal"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].g}</h3><p>{details.filter(e=>e.Langauge === this.props.loadData.language)[0].Goals}</p></div>
                </div>
                <div className="Solution">
                    <div className="A3Ftitle"><h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ex}</h2></div>
                    <div className="Tools"><h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].tools}:</h3>{details.filter(e=>e.Langauge === this.props.loadData.language)[0].Tools}</div>
                    <div className="Plan">
                        <h3>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].plan}</h3>
                        <ol>{details.filter(e=>e.Langauge === this.props.loadData.language)[0].Plan.split('","').map(e=><li>{e}</li>)}</ol>
                    </div>
                </div>
                <div className="Results">
                    <div className="A3Ftitle"><h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].del}</h2></div>
                    <div className="status"><p> Status:{details.filter(e=>e.Langauge === this.props.loadData.language)[0].Status}</p><div/>
                    <div className="Deliverable"><img src={details.filter(e=>e.Langauge === this.props.loadData.language)[0].Image} alt="DeliverablePic" /></div>
                    <div className="link"> <h3><a href={details.filter(e=>e.Langauge === this.props.loadData.language)[0].Deliverable}> {this.props.loadData.language === "ESP"? "Entregable en Google Drive": "Deliverable link in Google Drive"}</a> </h3></div>
                </div>    
                </div>
                </div>
                
                <Link to="../"></Link>
            </div>
            
          )

    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps)(Projects);