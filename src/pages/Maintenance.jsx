import React from "react";
import {connect} from 'react-redux'
import MaintenaceTimeline from "../components/Maintenance/MaintenaceTimeline";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import MaintenanceArticles from "../components/Maintenance/MaintenanceArticles"; 
import MaintenaceText from "../components/Maintenance/MaintenaceText";
import MaintenanceNotes from "../components/Maintenance/MaintenanceNotes";
import MaintenanceCatalog from "../components/Maintenance/MaintenanceCatalog";
class Maintenance extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          index:0
        }        
        
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    
    handleSelect= (e)=> 
        this.setState({index: Number(e.target.value)})
    componentDidMount(){
        let details = this.props.loadData;
        this.setState({loading:false, details});
    }
    render(){
      let content;
  switch (this.state.index) {
    case 0:
      content = (
        <div>
          <MaintenaceTimeline/>
        </div>
      );
      break;
      case 1:
        content = (
          <div>
          <MaintenanceArticles/>
        </div>
        )
      break;

      case 2:
        content = (
          <div>
            <MaintenaceText/>
          </div>
        )
        break;
        case 3:
          content=(
          <div>
            <MaintenanceCatalog/>
          </div>)
          break;
        case 4:
          content =(
            <div>
              <MaintenanceNotes/>
            </div>
          )
          break
    default:
      content = null;
  }
  return (
    <div>
      <Welcome/>
      <div className="Selector">
        <button value={0} onClick={this.handleSelect}>Timeline</button>
        <button value={1} onClick={this.handleSelect}>Projects</button>
        <button value={2} onClick={this.handleSelect}>Texts</button>
        <button value={3} onClick={this.handleSelect}>Articles</button>
        <button value={4} onClick={this.handleSelect}>Notes</button>
      </div>
      {content}
      <Footer/>
    </div>
  );
}}
const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});
export default connect(mapStateToProps)(Maintenance);