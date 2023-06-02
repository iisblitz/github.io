import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';

class Studies extends React.Component {
render() {
return (
<div>
<Welcome />
{this.props.loadData.notes
.filter(e => e.Language === this.props.loadData.language)
.map(e => (
<div>
<p>{e.Title}</p>
<p>{e.Category}</p>
<p>{e.HeaderImage}</p>
<div>
<ul>
{e.Key.split('/').map((key, index) => (
<li key={index}>
{key}
 - {e.Definition.split('/')[index]}
</li>
))}
</ul>
</div>
<p>{e.Summary}</p>
</div>
))}
<Link to="../">
{this.props.loadData.Language === 'ESP' ? 'Regresar' : 'Go Back'}
</Link>
</div>
);
}
}

const mapStateToProps = (state) => ({
loadData: state.rootReducer,
});

export default connect(mapStateToProps)(Studies);