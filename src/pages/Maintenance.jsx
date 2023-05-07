import React from "react";
import axios from "axios";
import {connect} from 'react-redux'

class Maintenance extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            
            details:{},
            collection: "timeline",
            
            timeline:{
            Language:"",
            Image:"",
            Category:"",
            Name:"",
            Location:"",
            BusinessName:"",
            Skills:[],
            BusinessDescription:"",
            JobDescription:"",
            Schedule:"",
            WorkTime:"",
            Begin: new Date(),
            End: new Date(),},
            
            article:{
            Langauge:"",
            Title:"",
            Education:"",
            Work:"",
            Location:"",
            Logo:"",
            ShortDescription:"",
            ProblemDescription:"",
            DesiredState:"",
            Goals:"",
            TimeConstraints:"",
            Plan:[],
            Tools:[],
            }
        }
        this.handleAlt = this.handleAlt.bind(this);
        this.handleAddArticle = this.handleAddArticle.bind(this);
        this.handleAddTimeLine = this.handleAddTimeLine.bind(this);
        this.handleDeleteTimeline = this.handleDeleteTimeline.bind(this);
        this.handleDeleteArticles = this.handleDeleteArticles.bind(this);
        this.handleChangeTimeline = this.handleChangeTimeline.bind(this);
        this.handleChangeArticle = this.handleChangeArticle.bind(this);
    }
    componentDidMount(){
        let details = this.props.loadData;
        this.setState({loading:false, details});
    }
    
    handleAddArticle = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/art", this.state.article, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
        }catch(err){
            console.error('Error adding document: ', err);
        }}
    handleAddTimeLine = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/", this.state.timeline, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
        }catch(err){
            console.error('Error adding document: ', err);
        }}
    handleDeleteTimeline = async (id) => {
        try{await axios.delete(`http://localhost:3001/${id}`);
        }catch(err){console.error('Error deleting document: ', err.response.data)}
    }
    handleDeleteArticles = async (id) => {
        try{
            await axios.delete(`http://localhost:3001/art/${id}`);
        }catch(err){
            console.error('Error deleting document: ', err.response.data);
        }
    }
    handleAlt =() => {
        if(this.state.collection==="timeline"){
            this.setState({collection: "articles"})
        }else{this.setState({collection:"timeline"})
    }}

    handleChangeTimeline(a,b){
        const name = a
        const value= b;
        this.setState({timeline:{[name]:value}})
    }
    handleChangeArticle(a,b){
        const name = a
        const value= b;
        this.setState({article:{[name]:value}})
    }
        
    render(){
        return(

            this.state.collection==="timeline"?
        <div className="Maintenance">
            <h1>Timeline Maintenance</h1>

            <h3>Add a timeline</h3>
            <form>
            <label>Language:</label><input name="Language" value={this.state.timeline.Language} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Image:</label><input name="Image" value={this.state.timeline.Image} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Category:</label><input name="Category" value={this.state.timeline.Category} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Name:</label><input name="Name" value={this.state.timeline.Name} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Location:</label><input name="Location" value={this.state.timeline.Location} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>BusinessName:</label><input name="BusinessName" value={this.state.timeline.BusinessName} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Skills:</label><input name="Skills" value={this.state.timeline.Skills} type="list" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>BusinessDescription:</label><input name="BusinessDescription" value={this.state.timeline.BusinessDescription} type="textarea" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>JobDescription:</label><input name="JobDescription" value={this.state.timeline.JobDescription} type="textarea" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Schedule:</label><input name="Schedule" value={this.state.timeline.Schedule} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>WorkTime:</label><input name="WorkTime" value={this.state.timeline.WorkTime} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>Begin:</label><input name="Begin" value={this.state.timeline.Begin} type="date" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <label>End:</label><input name="End" value={this.state.timeline.End} type="date" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
            <button type="submit" onClick={this.handleAddTimeLine}>Add Timeline Event</button>
            </form>
            {this.props.loadData.time.map(e=> (
                <div key={e.id}>
                <p>{e.id} - job {e.name}  </p> <button onClick={() => this.handleDeleteTimeline(e.id)}> X </button>
                </div>
            ))}
            <button onClick={this.handleAlt}> Change to Articles</button>            
        </div>
        
        :

        <div className="Maintenance">
            <h1>Articles Maintenance</h1>
            <h3>Add an Project</h3>
            <form>
            <label>Langauge:</label><input name="Langauge" value={this.state.article.Langauge} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Title:</label><input name="Title" value={this.state.article.Title} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Education:</label><input name="Education" value={this.state.article.Education} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Work:</label><input name="Work" value={this.state.article.Work} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Location:</label><input name="Location" value={this.state.article.Location} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Logo:</label><input name="Logo" value={this.state.article.Logo} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>ShortDescription:</label><input name="ShortDescription" value={this.state.article.ShortDescription} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>ProblemDescription:</label><input name="ProblemDescription" value={this.state.article.ProblemDescription} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>DesiredState:</label><input name="DesiredState" value={this.state.article.DesiredState} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Goals:</label><input name="Goals" value={this.state.article.Goals} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>TimeConstraints:</label><input name="TimeConstraints" value={this.state.article.TimeConstraints} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Plan:</label><input name="Plan" value={this.state.article.Plan} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Tools:</label><input name="Tools" value={this.state.article.Tools} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <button type="submit" onClick={this.handleAddArticle}>Add Timeline Event</button>
            </form>
            {this.props.loadData.arts.map(e=> (
                <div key={e.id}>
                <p>{e.id} - Project {e.Title}  </p> <button onClick={() => this.handleDeleteArticles(e.id)}> X </button>
                </div>
            ))}
            <button onClick={this.handleAlt}> Change to Timeline</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps)(Maintenance);