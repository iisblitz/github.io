import pic from '../recursos/DBGA_pic.jpg'
import { connect } from 'react-redux';
import React from 'react';



class About extends React.Component{
    constructor(props) {
        super(props)
        this.state={
        texts:[],
        language:"",
        loading:true
        }
    }   
        componentDidMount(){
            const { language, texts } = this.props.loadData;
            this.setState({ language, texts, loading: false });
        }
        render(){
            if(this.state.loading){
                return <div>...Loading</div>
            }
            else{
                console.log(this.props)
                return(
                    <div>
                    <div className="profile">
                        <div className="profpic">
                        <img src={pic} alt="ProfilePic"/>
                        </div>
                        <div className='data'>
                            <h1>David Gonzalez</h1>
                            <p className='icons'><a href="https://www.linkedin.com/in/david-gonzalez-alanis/"><i className="fa-brands fa-linkedin"></i> Linkedin</a> 
                            <a href="https://github.com/iisblitz"><i className="fa-brands fa-github"> </i> GitHub</a>
                            <a href="https://wa.me/525514515527"><i className="fa fa-whatsapp"></i>WhatsApp </a>
                            </p>
                            
                            <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].ci}</p>
                            <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].subtitle}</p>
                            <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].description}</p>
                            <p>{this.props.loadData.language === "ESP"? "Mi historia:": "Short bio:"}</p>
                            <p>{this.props.loadData.texts.filter((e) => e.language === this.props.loadData.language)[0].bio}</p>
                    
                        </div>
                    </div>
                </div>
                )
            }
        }

}

const mapStateToProps = (state) => ({
    loadData: state.rootReducer
});

export default connect(mapStateToProps)(About);