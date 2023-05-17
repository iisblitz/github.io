import React from "react";
import { connect} from "react-redux";
import {Link} from "react-router-dom"
import Welcome from "../components/Welcome";

class Work extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            url:"",
            details:{},
            projects:[],
            texts:[],
            lang:"",
            loading:true
        }
    }

    componentDidMount(){        
        let url = window.location.href.split("/")[4].replace("%20"," ");
        let details = this.props.loadData.time.filter(e=> e.id === url)[0];
        let projects = this.props.loadData.arts.filter(e => e.Work === details.BusinessName);
        const { language, texts } = this.props.loadData;
        this.setState({loading:false, url, details, projects, language, texts});
      }
    
      render(){
        if(this.state.loading){
          return <div>...Loading</div>
        }
        const {details, projects} = this.state;
        if (!details) {
          return <div>Details not found</div>;
        }
        return(
          <div className="workTemplate">
            <Welcome/>
            
            <h1>{details.BusinessName}</h1>
            <div className="workHeaders">
              <div className="workHeaderImg">
                <img src={details.Image} alt="logo" />
              </div>
              <div className="businessData">
                <h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].desc}</h2>
                <p>{details.BusinessDescription}</p>
              </div>
              <div className="workDataTL">
                <h4> {this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ti}: {details.Begin} </h4>
                <h4>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].te}: {details.End}</h4>
                <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].loc}: {details.Location}</p>
              </div>
            </div>
            <div className="jobData">
              <h1>{this.props.loadData.language === "ESP"? `Descripción de ${details.Category}`: `${details.Category} description`}</h1>
              <p>{details.JobDescription}</p>
            </div>
            <div className="workProjects">
              <div className="workProjectTitle">
              <h1>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].header}</h1>
              </div>
              <div className="WorkWrap">
              {projects.map(e =>(
                <div key={e.id} className="projectBullet">
                  <Link to={`./${e.Title}`}>
                    <img src={e.Logo} alt="Logo" />
                    <p>{e.Title}</p>
                    <p>{e.ShortDescription}</p>
                    <p>Status: {e.Status}</p>
                    </Link>
                </div>
              ))}
</div>
            </div>
            <Link to="../">
              {this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].link}
            </Link>
          </div>
        )
      }
      
    }
    const mapStateToProps = (state) => ({
        loadData: state.rootReducer
    });

    export default connect(mapStateToProps)(Work);