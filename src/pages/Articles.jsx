import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from '../components/Welcome'
class Articles extends Component {
    constructor(props){
        super(props)
        this.state = {
          Language: "ESP"
        }
    }
    componentDidMount(){   
    }
  render() {
    return (
      <div>
        <Welcome/>
      {this.props.loadData.filter(e=>e.Language === this.state.Language).map(e=>
        <div>
        <p>{e.Title}</p>
        <p>{e.Category}</p>
        <p>{e.Date}</p>
        <ol>
          {e.Keywords.split("/").map(e=><li>{e}</li>)}
        </ol>
        <ol>
          {e.Skills.split("/").map(e=><li>{e}</li>)}
        </ol>
        <p>{e.Background}</p>
        {e.Body.split("*").map(e=><p>{e}</p>)}
        <p>{e.Lessons}</p>
        {e.AfterThoughts.split("*").map(e=><p>{e}</p>)}
        </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadData: state.rootReducer.catalog
});
export default connect(mapStateToProps)(Articles);