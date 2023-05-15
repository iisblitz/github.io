import React from "react";
import axios from "axios";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

class Maintenance extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            
            details:{},
            collection: "timeline",
            
            timeline:{
            Language:"",
            Image:"",
            Icons:"",
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
            Status:"",
            Image:"",
            Deliverable:""},

            texts:{
                language:"",
                    main:"",
                    a3:"",
                    experience:"",
                    ci:"",
                    subtitle:"",
                    description:"",
                    bio:"",
                    etitle:"",
                    ti:"",
                    te:"",
                    loc:"",
                    desc:"",
                    pro:"",
                    link:"",
                    header:"",
                    bg:"",
                    pd:"",
                    ds:"",
                    g:"",
                    ex:"",                   
                    tools:"",
                    plan:"",
                    del:"",
                    status:"",
                    link2:"",
                

            }

        }
        this.handleAlt = this.handleAlt.bind(this);
        this.handleAddArticle = this.handleAddArticle.bind(this);
        this.handleAddTimeLine = this.handleAddTimeLine.bind(this);
        this.handleAddTexts = this.handleAddTexts.bind(this);
        this.handleDeleteTimeline = this.handleDeleteTimeline.bind(this);
        this.handleDeleteArticles = this.handleDeleteArticles.bind(this);
        this.handleDeleteTexts = this.handleDeleteTexts.bind(this);
        this.handleChangeTimeline = this.handleChangeTimeline.bind(this);
        this.handleChangeArticle = this.handleChangeArticle.bind(this);
        this.handleChangeTexts = this.handleChangeTexts.bind(this);
    }
    componentDidMount(){
        let details = this.props.loadData;
        this.setState({loading:false, details});
    }
    handleAddArticle = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("https://shy-erin-panther-tux.cyclic.app/art", this.state.article, {
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
            await axios.post("https://shy-erin-panther-tux.cyclic.app/", this.state.timeline, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
        }catch(err){
            console.error('Error adding document: ', err);
        }}
    handleAddTexts = async (e) =>{
        e.preventDefault();
                try{
            await axios.post("https://shy-erin-panther-tux.cyclic.app/texts", this.state.texts, {
                headers: {
                  "Content-Type": "application/json",
                },
            })
        }catch(err){
            console.error('Error adding document: ', err);
        }}


    handleDeleteTimeline = async (id) => {
        try{await axios.delete(`https://shy-erin-panther-tux.cyclic.app/${id}`);
        }catch(err){console.error('Error deleting document: ', err.response.data)}
    }
    handleDeleteArticles = async (id) => {
        try{
            await axios.delete(`https://shy-erin-panther-tux.cyclic.app/art/${id}`);
        }catch(err){
            console.error('Error deleting document: ', err.response.data);
        }
    }
    handleDeleteTexts = async (id) => {
        try{
            await axios.delete(`https://shy-erin-panther-tux.cyclic.app/texts/${id}`);
        }catch(err){
            console.error('Error deleting document: ', err.response.data);
        }
    }
    handleAlt = () => {
        if (this.state.collection === "timeline") {
            this.setState({ collection: "articles" });
        } else if (this.state.collection === "articles") {
            this.setState({ collection: "texts" });
        } else {
            this.setState({ collection: "timeline" });
            
        }
    }

    handleChangeTimeline(a,b){
        const name = a
        const value= b;
        this.setState(prevState => ({timeline:{...prevState.timeline,[name]:value}}))
    }
    handleChangeArticle(a,b){
        const name = a
        const value= b;
        this.setState(prevState => ({article:{...prevState.article,[name]:value}}))
    }
    handleChangeTexts(a,b){
        const name = a
        const value= b;
        this.setState(prevState => ({texts:{...prevState.texts,[name]:value}}))
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
            <label>Icon:</label><input name="Icon" value={this.state.timeline.Icon} type="text" onChange={(e)=> this.handleChangeTimeline(e.target.name, e.target.value)} />
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
                <p>{e.id} - job - {e.Name}  </p> <button onClick={() => this.handleDeleteTimeline(e.id)}> X </button>
                </div>
            ))}
            <button onClick={this.handleAlt}> Change forms</button>
            <Link to='../'>Return</Link>
        </div>
        
        : this.state.collection === "articles" ?

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
            <label>Status:</label><input name="Status" value={this.state.article.Status} type="text" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Image:</label><input name="Image" value={this.state.article.Image} type="url" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <label>Deliverable:</label><input name="Deliverable" value={this.state.article.Deliverable} type="url" onChange={(e)=> this.handleChangeArticle(e.target.name, e.target.value)} />
            <button type="submit" onClick={this.handleAddArticle}>Add Timeline Event</button>
            </form>
            {this.props.loadData.arts.map(e=> (
                <div key={e.id}>
                <p>{e.id} - Project - {e.Title}  </p> <button onClick={() => this.handleDeleteArticles(e.id)}> X </button>
                </div>
            ))}
            <button onClick={this.handleAlt}> Change forms</button>
            <Link to='./'>Return</Link>
        </div>
        :
        <div className="Maintenance">
            <h1>Texts Maintenance</h1>
            <h3>Add texts</h3>
            <form>
            <div>
            <label>Language:</label><input name="language" value={this.state.texts.language} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>Main:</label><input name="main" value={this.state.texts.main} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>A3:</label><input name="a3" value={this.state.texts.main.a3} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>experience:</label><input name="experience" value={this.state.texts.experience} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>CI:</label><input name="ci" value={this.state.texts.ci} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>subtitle:</label><input name="subtitle" value={this.state.texts.subtitle} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>Description:</label><input name="description" value={this.state.texts.description} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>Bio:</label><input name="bio" value={this.state.texts.bio} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            </div>
            <div>
            Laboral:
            <label>Titulo:</label><input name="etitle" value={this.state.texts.etitle} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>fecha inicio:</label><input name="ti" value={this.state.texts.ti} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>fecha fin:</label><input name="te" value={this.state.texts.te} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>loc:</label><input name="loc" value={this.state.texts.loc} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>desc:</label><input name="desc" value={this.state.texts.desc} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>pro:</label><input name="pro" value={this.state.texts.pro} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>link:</label><input name="link" value={this.state.texts.link} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            </div>
            <div>
            Proyectos:
            <label>header:</label><input name="header" value={this.state.texts.header} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>bg:</label><input name="bg" value={this.state.texts.bg} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>pd:</label><input name="pd" value={this.state.texts.pd} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>ds:</label><input name="ds" value={this.state.texts.ds} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>g:</label><input name="g" value={this.state.texts.g} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>ex:</label><input name="ex" value={this.state.texts.ex} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>tools:</label><input name="tools" value={this.state.texts.tools} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>plan:</label><input name="plan" value={this.state.texts.plan} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>del:</label><input name="del" value={this.state.texts.del} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>status:</label><input name="status" value={this.state.texts.status} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            <label>link2:</label><input name="link2" value={this.state.texts.link2} type="text" onChange={(e)=> this.handleChangeTexts(e.target.name, e.target.value)} />
            </div>
            
            <button type="submit" onClick={this.handleAddTexts}>Add Texts</button>
        </form>

        {this.props.loadData.texts.map(e=> (
                <div key={e.id}>
                <p>{e.language} - Language {e.id} </p> <button onClick={() => this.handleDeleteArticles(e.id)}> X </button>
                </div>
            ))}

        <button onClick={this.handleAlt}> Change forms</button>
            <Link to='./'>Return</Link>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps)(Maintenance);