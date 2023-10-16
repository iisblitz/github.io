import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import {Helmet} from 'react-helmet-async'

class Studies extends React.Component {
render() {
return (
<div className='fullStudy' key='1'>
<Helmet title={`Poject: ${this.props.loadData.language[0].Title}`} description={`Description: ${this.props.loadData.language[0].Category}`} />
<Welcome />
{this.props.loadData.notes
.filter(e => e.Language === this.props.loadData.language)
.map(e => (
<div className='Notes'>

<div className='NotesTitle'>
<p>{e.Title}</p>
<p>{e.Category}</p>
<p>{e.HeaderImage}</p>
</div>

<div className='Cornell'>

<div className='Cues'>
<ul>
{e.Key.split('/').map((key, index) => (
<li key={index}>
{key}
</li>
))}
</ul>    
</div>
<div className='MainNotes'>
<ul>
{e.Definition.split('/').map((key, index) => (
<li key={index}>

 {e.Definition.split('/')[index]}
</li>
))}
</ul>
</div>
</div>

<div className='Summary'>
<p>{e.Summary}</p>
</div>
<Link to="../">
{this.props.loadData.Language === 'ESP' ? 'Regresar' : 'Go Back'}
</Link>
</div>
))}
</div>
);
}
}

const mapStateToProps = (state) => ({
loadData: state.rootReducer,
});

export default connect(mapStateToProps)(Studies);