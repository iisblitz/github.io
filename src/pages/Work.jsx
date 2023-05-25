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
        let details = this.props.loadData.time.filter(e=> e.BusinessName === url);
        let projects = this.props.loadData.arts.filter(e => e.Work === url);
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
            
            <h1>{details.filter(e=>e.Language=== this.props.loadData.language)[0].BusinessName}</h1>
            <div className="workHeaders">
              <div className="workHeaderImg">
                <img src={details.filter(e=>e.Language=== this.props.loadData.language)[0].Image} alt="logo" />
              </div>
              <div className="businessData">
                <h2>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].desc}</h2>
                <p>{details.filter(e=>e.Language === this.props.loadData.language)[0].BusinessDescription}</p>
              </div>
              <div className="workDataTL">
                <h4> {this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ti}: {details.filter(e=>e.Language=== this.props.loadData.language)[0].Begin} </h4>
                <h4>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].te}: {details.filter(e=>e.Language=== this.props.loadData.language)[0].End}</h4>
                <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].loc}: {details.filter(e=>e.Language=== this.props.loadData.language)[0].Location}</p>
              </div>
            </div>
            <div className="jobData">
              <h1>{this.props.loadData.language === "ESP"? `Descripción de ${details.filter(e=>e.Language=== this.props.loadData.language)[0].Category}`: `${details.filter(e=>e.Language=== this.props.loadData.language)[0].Category} description`}</h1>
              <p>{details.filter(e=>e.Language=== this.props.loadData.language)[0].JobDescription}</p>
            </div>
            <div className="workProjects">
              <div className="workProjectTitle">
              <h1>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].header}</h1>
              </div>
              <div className="WorkWrap">
                {console.log(projects[0].Langauge)}
              {projects.filter(e=> e.Langauge === this.props.loadData.language).map(e =>(
                <div key={e.id} className="projectBullet">
                  <Link to={`../Project/${e.number}`}>
                    <img src={e.Logo} alt="Logo" />
                    <p>{e.Title}</p>
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