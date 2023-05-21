import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {setLanguage} from '../redux/actions'
class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state={
            loading:true
        }
    }
    handleLangChan = () =>{
        this.props.loadData.language=== "ESP"? this.props.setLanguage("ENG"): this.props.setLanguage("ESP")
    }
    componentDidMount(){
        const { language, texts } = this.props.loadData;
        this.setState({loading:false, language, texts})
    }
    render(){
     if(this.state.loading){
        return <div>loading...</div>
     }
     else{
        let url = window.location.href.split("/")
        return (
     <div className="header">
                <div className="headerImg">
                <Link to="../">
                <img src="https://i.postimg.cc/QN1V26jF/Logo-removebg-preview.png" alt="header" />
                </Link>
                </div>
                {url[3] ?
                <div/>:
                
                <div className="Menu">
                <button className="Wbutton" onClick={event=> this.props.handleClick(1)}>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].main}</button>
                <button className="Wbutton" onClick={event=> this.props.handleClick(2)}>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].etitle}</button>
                <button className="Wbutton" onClick={event=> this.props.handleClick(3)}>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].a3}</button>
                </div>
                }
                <div className="langSel">
                <button className="Wbutton esp" onClick={()=> this.handleLangChan()}>{this.props.loadData.language==="ESP"? "English":"Español"}</button>
                </div>
                
        </div>)}
    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps, {setLanguage})(Welcome);