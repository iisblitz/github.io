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
      Language: "ENG"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (ev) => {
    this.setState((state) => {
      let checker = ev.target.value;
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
          <button key="1" onClick={(event)=>this.handleToggle(event)} value="Work" className='TL-MenuB'>
            <i className="fa-solid fa-industry" /><p>Work Experience</p>
          </button>
          <button key="2" onClick={(event)=>this.handleToggle(event)} value="Education" className='TL-MenuB'>
            <i className="fa-solid fa-school" /><p>Education</p>
          </button>      
          <button key="3" onClick={(event)=>this.handleToggle(event)} value="Hobbies" className='TL-MenuB'>
            <i className="fa-solid fa-person-walking-luggage" /><p>Hobbies</p>
          </button>
        </div>
        <VerticalTimeline>
        {this.props.loadData && this.props.loadData.filter(e=> this.state[e.Category]===true).filter(e=> e.Language === this.state.Language).sort((a, b) => new Date(b.End) - new Date(a.End)).map(e => (
            <VerticalTimelineElement 
              key={e.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={e.Begin + ' / ' + e.End}
              iconStyle={{
                background: 'rgb(0,0,0)',
                color: '#FFF',
                textAlign: 'center',
                display: 'flex',
                itemAlign: 'center',
              }}
              icon={<i className={e.Icon}></i>}>              
                <Link className="TL-container" to={e.BusinessName}>
                  <div className="TL-img">
                  <img src={e.Image} alt="resource loading 1" />
                  </div>
                  <div className="TL-Text">
                  <h3 className="vertical-timeline-element-title">{e.Name}</h3>
                  <h3 className="vertical-timeline-element-subtitle">{e.BusinessName}</h3>
                  <p className="vertical-timeline-element-subtitle">{e.Location}</p>
                  <p>{e.BusinessDescription}</p>
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