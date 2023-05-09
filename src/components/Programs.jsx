import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.CardsRef= props.loadData.map(()=> React.createRef());
    }
    componentDidMount(){
        window.addEventListener('scroll',this.checkCards);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.checkCards);
    }

    checkCards = () => {
        const triggerBottom = window.innerHeight / 5*4;
        this.CardsRef.forEach(cardRef =>{
            const card = cardRef.current;
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom){
                card.classList.add('show');
            } else { card.classList.remove('show')}
        })
    }
    render() {
        return (
            <div>
                <div className="proDisplay">
                    {this.props.loadData.map((e,index) =>
                    (

                        <div key={e.id} className={`Card ${e.Color}`} ref={this.CardsRef[index]}>
                            <Link to={e.Work + "/" + e.Title} className={`proCards`}>
                                <div className="img">
                                    <img src={e.Logo} alt="workLogo" />
                                </div>
                                <div className="texts">
                                    <h3>Project Name: {e.Title}</h3>
                                    <p>Project for: {e.Work}</p>
                                    <p>Description: {e.ShortDescription}</p>
                                    <p>Duration: {e.TimeConstraints}</p> 
                                </div>
                                <div className={`BOK`}>
                                    
                                    <h3>{e.Education}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div>
                    <Link to="/Maintenance">SO</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    loadData: state.rootReducer.arts
});

export default connect(mapStateToProps)(Programs);