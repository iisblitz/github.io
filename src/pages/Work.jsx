import React from "react";
import { connect} from "react-redux";
import {Link} from "react-router-dom"

class Work extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            loading:true,
            url:"",
            details:{},
            projects:[]
        }
    }

    componentDidMount(){
        
        let url = window.location.href.split("/")[4].replace("%20"," ");
        let details = this.props.loadData.time.filter(e=> e.BusinessName === url)[0];
        let projects = this.props.loadData.arts.filter(e => e.Work === url);
        this.setState({loading:false, url, details, projects});
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
            <h1>{details.BusinessName}</h1>
            <div className="workHeaders">
              <div className="workHeaderImg">
                <img src={details.Image} alt="logo" />
              </div>
              <div className="businessData">
                <h2>Description:</h2>
                <p>{details.BusinessDescription}</p>
              </div>
              <div className="workDataTL">
                <h4> Start: {details.Begin} </h4>
                <h4> End: {details.End}</h4>
                <p> location: {details.Location}</p>
              </div>
            </div>
            <div className="jobData">
              <h1>{details.Category} description</h1>
              <p>{details.JobDescription}</p>
            </div>
            <div className="workProjects">
              <div className="workProjectTitle">
              <h1>Projects</h1>
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
            <Link to="../">Go Back</Link>
          </div>
        )
      }
      
    }
    const mapStateToProps = (state) => ({
        loadData: state.rootReducer
    });

    export default connect(mapStateToProps)(Work);