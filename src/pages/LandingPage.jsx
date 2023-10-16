import React from 'react';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Programs from '../components/Programs';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { loadData } from '../redux/actions'; // Import your action to load the data
import Notes from '../components/Notes';
import Articles from '../components/Articles';
import { Helmet } from 'react-helmet-async';

class LandingPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
        index:1,
        loading: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(num){this.setState({index: num})} 
  
    async componentDidMount() {
    await this.props.dispatch(loadData())
    this.setState({ loading: false });
  }
  renderContent() {
    while(this.state.loading=== true)
    {
      return <div>Loading...</div>;
    }
    if (this.state.index === 1) {      
      return <div className="container">
      <Helmet title="David Gonzalez's Protfolio" description='This site contains experiences and projects by David Gonzalez'/>
      <Welcome className="Welcome" handleClick={this.handleClick} /> 
      <About /> 
      <Timeline />
      <Programs />
      </div>;
    } else if (this.state.index === 2) {
      return <div className="container"><Welcome className="Welcome" handleClick={this.handleClick} /> <Articles /></div>;
    }
    else {
      return <div className="container"><Welcome className="Welcome" handleClick={this.handleClick} /> <Notes /> </div>;
    }
  }
  render() {
    return (
      <div className='fullpage'>
      <div className='Landing'>
        {this.renderContent()}        
      </div>
      <Footer/>
      </div>
      
    );
  }
}
const mapStateToProps = (state) => ({
  loadData: state.rootReducer,
});
export default connect(mapStateToProps)(LandingPage);
