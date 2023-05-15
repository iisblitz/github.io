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
    handleLangChan = (e) =>{
        this.props.setLanguage(e);
    }
    componentDidMount(){
        this.setState({loading:false})
    }
    render(){

     if(this.state.loading){
        return <div>loading...</div>
     }
     else{
        return (
     <div className="header">
                <div className="headerImg">
                <Link to="./">
                <img src="https://i.postimg.cc/QN1V26jF/Logo-removebg-preview.png" alt="header" />
                </Link>
                </div>
                <div className="Menu">
                <button className="Wbutton" onClick={event=> this.props.handleClick(1)}>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].main}</button>
                <button className="Wbutton" onClick={event=> this.props.handleClick(2)}>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].etitle}</button>
                <button className="Wbutton" onClick={event=> this.props.handleClick(3)}>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].a3}</button>
                </div>
                <div className="langSel">
                <button className="Wbutton esp" onClick={()=> this.handleLangChan("ESP")}>{this.props.loadData.language==="ESP"? "Español":"Inglés"}</button>
                <button className="Wbutton eng" onClick={()=> this.handleLangChan("ENG")}>{this.props.loadData.language==="ENG"? "Spanish":"English"}</button>
                </div>
        </div>)}
    }
}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps, {setLanguage})(Welcome);