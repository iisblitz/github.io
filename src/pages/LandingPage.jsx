import React from 'react'
import Welcome from '../components/Welcome';
import About from '../components/About';
import News from '../components/News'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'
class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        index:1       
        }
        this.handleClick = this.handleClick.bind(this)
}

handleClick(num){this.setState({index: num})} 
    render(){  
    return (
    <div>
        <Welcome className="Welcome" handleClick={this.handleClick}/>
        {this.state.index === 1? <About/>:this.state.index === 2? <Timeline/>:<News/>}
        <Footer/>
    </div>
)}
}


export default LandingPage