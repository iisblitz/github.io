import React from "react";
import { connect} from "react-redux";


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
            {console.log(this.props.loadData)}
            <h2>{details.businessName}</h2>
            <div className="workHeaders">
              <div>
                <img src={details.image} alt="logo" />
              </div>
              <div className="businessData">
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
              <h1>Projects</h1>
              {projects.map(e =>(
                <div key={e.id} className="projectBullet">
                  <a href={`./${url}/${e.Title}`}>
                    <img src={e.Logo} alt="Logo" />
                    <p>{e.Title}</p>
                    <p>{e.shortDescription}</p>
                    <p>Status: {e.status}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )
      }
      
    }
    const mapStateToProps = (state) => ({
        loadData: state.rootReducer
    });

    export default connect(mapStateToProps)(Work);