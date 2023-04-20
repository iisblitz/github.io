import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo1 from '../recursos/arracheras.png'
import logo2 from '../recursos/guanacastle.png'
import logo3 from '../recursos/bostons.png'
import logo4 from '../recursos/federal.png'
import logo5 from '../recursos/teva.png'

const Timeline = () => {
    return (
        
        <div className='Timeline-Window'>
        <div className="TL-Menu">
            <button onClick=""> <i class="fa-solid fa-industry"/>Work Experience</button>
            <button onClick=""> <i class="fa-solid fa-school"/>Education</button>
            <button onClick="">  <i class="fa-solid fa-mug-saucer"/>Projects</button>
            <button onClick="">  <i class="fa-solid fa-person-walking-luggage"/>Hobbies</button>
        </div>
        
        <VerticalTimeline>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May/2022 - Abr/2023"
    iconStyle={{ background: 'rgb(0,0,0)', color: '#FFF', textAlign:'center', display:"flex",itemAlign:"center"}}
    icon={<i className="fa-solid fa-industry"></i>}
  >
    <div className='TL-container'>
    <div className='TL-Img 1'>
        <img src={logo1} alt="resource loading 1" width="80%"/>
    </div>
    <div className='TL-Text'>
    <h3 className="vertical-timeline-element-title">Business Owner</h3>
    <h4 className="vertical-timeline-element-subtitle">Mexico CDMX</h4>
    <p>
        Arracheras Relámpago<br/>
        small virtual kitchen<br/>
        Click here to learn more!
    </p>
    </div>
    </div>
  </VerticalTimelineElement>
  


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May/2022 - Abr/2023"
    iconStyle={{ background: 'rgb(0,0,0)', color: '#FFF', textAlign:'center', display:"flex",itemAlign:"center"}}
    icon={<i className="fa-solid fa-industry"></i>}
  >
    <div className='TL-container'>
    <div className='TL-Img2'>
        <img src={logo2} alt="resource loading 1" width="60%"/>
    </div>
    <div className='TL-Text'>
    <h3 className="vertical-timeline-element-title">Event Coordinator</h3>
    <h4 className="vertical-timeline-element-subtitle">Mexico Chiapas</h4>
    <p>
        Parque Guanacastle<br/>
        Ecologic reserves<br/>
        <a href="/">Click here to learn more!</a>
    </p>
    </div>
    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May/2022 - Abr/2023"
    iconStyle={{ background: 'rgb(0,0,0)', color: '#FFF', textAlign:'center', display:"flex",itemAlign:"center"}}
    icon={<i className="fa-solid fa-industry"></i>}
  >
    <div className='TL-container'>
    <div className='TL-Img3'>
        <img src={logo3} alt="resource loading 2" width="80%"/>
    </div>
    <div className='TL-Text'>
    <h3 className="vertical-timeline-element-title">Supply Analytics</h3>
    <h4 className="vertical-timeline-element-subtitle">México, Chiapas</h4>
    <p>
        Bostons's<br/>
        Restaurant / Bar<br/>
        <a href="/">Click here to learn more!</a>
    </p>
    </div>
    </div>
  </VerticalTimelineElement>





  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Feb/2019 - Sep/2021"
    iconStyle={{ background: 'rgb(0,0,0)', color: '#FFF', textAlign:'center', display:"flex",itemAlign:"center"}}
    icon={<i className="fa-solid fa-industry"></i>}
  >
    <div className='TL-container'>
    <div className='TL-Img1'>
        <img src={logo1} alt="resource loading 1" width="80%"/>
    </div>
    <div className='TL-Text'>
    <h3 className="vertical-timeline-element-title">Business Owner</h3>
    <h4 className="vertical-timeline-element-subtitle">Mexico CDMX</h4>
    <p>
        Arracheras Relámpago<br/>
        small virtual kitchen<br/>
        <a href="/">Click here to learn more!</a>
    </p>
    </div>
    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May/2022 - Abr/2023"
    iconStyle={{ background: 'rgb(0,0,0)', color: '#FFF', textAlign:'center', display:"flex",itemAlign:"center"}}
    icon={<i className="fa-solid fa-industry"></i>}
  >
    <div className='TL-container'>
    <div className='TL-Img4'>
        <img src={logo4} alt="resource loading 4" width="80%"/>
    </div>
    <div className='TL-Text'>
    <h3 className="vertical-timeline-element-title">Supply Chain Coordinatorr</h3>
    <h4 className="vertical-timeline-element-subtitle">Mexico State of Mexico</h4>
    <p>
        Federal Mogul<br/>
        oil, air and gas filter manufacturing plant<br/>
        <a href="/">Click here to learn more!</a>
    </p>
    </div>
    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May/2022 - Abr/2023"
    iconStyle={{ background: 'rgb(0,0,0)', color: '#FFF', textAlign:'center', display:"flex",itemAlign:"center"}}
    icon={<i className="fa-solid fa-industry"></i>}
  >
    <div className='TL-container'>
    <div className='TL-Img5'>
        <img src={logo5} alt="resource 5 loading" width="80%"/>
    </div>
    <div className='TL-Text'>
    <h3 className="vertical-timeline-element-title">Manufacturing Scheduler</h3>
    <h4 className="vertical-timeline-element-subtitle">Mexico City</h4>
    <p>
        Teva Pharmaceuticals<br/>
        OTC, oncological and inmunosuppresant manufacturing and packaging plant<br/>
        <a href="/">Click here to learn more!</a>
    </p>
    </div>
    </div>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
    );
}
 
export default Timeline;









