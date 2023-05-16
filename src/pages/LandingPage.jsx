import React from 'react';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Programs from '../components/Programs';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { loadData } from '../redux/actions'; // Import your action to load the data

class LandingPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
        index:1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(num){this.setState({index: num})} 
  


  componentDidMount() {
    if (!this.props.loadData) {
      this.props.dispatch(loadData());
    }
  }

  renderContent() {
    if (!this.props.loadData) {
      return <div>Loading...</div>;
    }

    
    if (this.state.index === 1) {
      return <About />;
    } else if (this.state.index === 2) {
      return <Timeline />;
    } else {
      return <Programs />;
    }
  }

  render() {
    return (
      <div className="Landing">
        <Welcome className="Welcome" handleClick={this.handleClick} />
        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer,
});

export default connect(mapStateToProps)(LandingPage);
