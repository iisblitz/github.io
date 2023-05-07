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
        let url = window.location.href.split("/")[3].replace("%20"," ");
        let details = this.props.loadData.time.filter(e=> e.businessName === url)[0];
        let projects = this.props.loadData.arts.filter(e => e.Work === url);
        this.setState({loading:false, url, details, projects});
      }

    
      render(){
        if(this.state.loading){
          return <div>...Loading</div>
        }
        const {url, details, projects} = this.state;
        if (!details) {
          return <div>Details not found</div>;
        }
        return(
          <div className="workTemplate">
            {console.log(details, projects)}
            <h1>{details.businessName}</h1>
            <div className="workHeaders">
              <div className="workHeaderImg">
                <img src={details.image} alt="logo" />
              </div>
              <div className="businessData">
                <h2>Description:</h2>
                <p>{details.businessDescription}</p>
              </div>
              <div className="workDataTL">
                <h4> Start: {details.begin} </h4><h4> End: {details.end}</h4>
                <p> location: {details.location}</p>
              </div>
            </div>
            <div className="jobData">
              <h1>{details.category} description</h1>
              <p>{details.description}</p>
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
                    <p>{e.shortDescription}</p>
                    <p>Status: {e.Status}</p>
                    </Link>
                </div>
              ))}
</div>
            </div>
          </div>
        )
      }
      
    }
    const mapStateToProps = (state) => ({
        loadData: state.rootReducer
    });

    export default connect(mapStateToProps)(Work);