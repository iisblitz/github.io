import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Work: true,
      Hobbies: false,
      Education: false,
      language: "ENG"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (e) => {
    this.setState((state) => {
      let checker = e.target.value;
      if (state[checker] === true) {
        return { [checker]: false };
      } else {
        return { [checker]: true };
      }
    });
  };

  render() {
    
    return (
      <div className="Timeline-Window">
        <div className="TL-Menu">
          <button key="1" onClick={this.handleToggle} value="Work">
            <i className="fa-solid fa-industry" />
            Work Experience
          </button>
          <button key="2" onClick={this.handleToggle} value="Education">
            <i className="fa-solid fa-school" />
            Education
          </button>      
          <button key="3" onClick={this.handleToggle} value="Hobbies">
            <i className="fa-solid fa-person-walking-luggage" />
            Hobbies
          </button>
        </div>
        <VerticalTimeline>
        {this.props.loadData && this.props.loadData.filter(e=> this.state[e.category]===true).filter(e=> e.language === this.state.language).sort((a, b) => new Date(b.end) - new Date(a.end)).map(e => (
            <VerticalTimelineElement 
              key={e.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={e.begin + ' / ' + e.end}
              iconStyle={{
                background: 'rgb(0,0,0)',
                color: '#FFF',
                textAlign: 'center',
                display: 'flex',
                itemAlign: 'center',
              }}
              icon={<i className={e.icon}></i>}>              
                <Link className="TL-container" to={e.businessName}>
                  <div className="TL-img">
                  <img src={e.image} alt="resource loading 1" />
                  </div>
                  <div className="TL-Text">
                  <h3 className="vertical-timeline-element-title">{e.name}</h3>
                  <h3 className="vertical-timeline-element-subtitle">{e.businessName}</h3>
                  <p className="vertical-timeline-element-subtitle">{e.location}</p>
                  <p>{e.description}</p>
                  </div>
                </Link>
            </VerticalTimelineElement>
      ))}
      </VerticalTimeline>
              
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer.time
});
export default connect(mapStateToProps)(Timeline);