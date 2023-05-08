import pic from '../recursos/Logos/DBGA_pic.jpg'


const About = () => {
    return (
    <div>
        <div className="profile">
            <div className="profpic">
            <img src={pic} alt="ProfilePic"/>
            </div>
            <div className='data'>
                <h1>David Gonzalez</h1>
                <p className='icons'><a href="https://www.linkedin.com/in/david-gonzalez-alanis/"><i className="fa-brands fa-linkedin"></i> Linkedin</a> 
                <a href="https://github.com/iisblitz"><i className="fa-brands fa-github"> </i> GitHub</a>
                <a href="https://wa.me/525514515527"><i className="fa fa-whatsapp"></i>What-App </a>
                </p>
                <p>Email: iis_dbga@live.com Phone: +52 55-1451-5527 Location: Mexico City / Coyoacan </p>
                <p>Methodical work, continuous improvement, and professional teamwork to achieve the company's objectives.</p>
                <p>Ocupations: Industrial Engineer, Full Stack Developer, Adventurer and Coach</p>
                <p>Short bio:</p>
                <p>Born in Santiago Nuevo Leon, I studied as an industrial engineer and successfully managed manufacturing plants through teamwork and Excel tool development from the ERP for analytics and dashboard design for 6 years. At age 29, I designed my own business from scratch using the business model from manufacturing plants. In 2022, I changed my career to tech to fit my travel-loving lifestyle. I also practice martial arts, led an airsoft team for 6 years, and have been traveling by motorcycle since 2017. I aspire to a lifestyle that revolves around intellectual challenges and traveling as a virtual nomad. Pursuing certifications on relevant technologies is my way of preparing to tackle the most interesting challenges in the tech industry.</p>


         
            </div>
        </div>
    </div>  );
}
 
export default About;
