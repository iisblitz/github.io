import pic from '../recursos/DBGA_pic.jpg'

const About = () => {
    return (
    <div className="about">
        <div className="profile">
            <img src={pic} alt="ProfilePic" />
            <div className='data'>
                <h1>Name: David Gonzalez</h1>
                <h4>Ocupations: Engineer, Programmer, Adventurer</h4>
                <p>Age: 33, Current locatiion: Mexico City</p>
                
            </div>
        </div>
    </div>  );
}
 
export default About;