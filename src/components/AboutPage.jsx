import profileImage from '../resources/profile.jpg';

const AboutPage = () => {
    return (
        <section id="about">
            <div className="about-me">
                <div className="photo">
                    <img src={profileImage} alt="profile" className="profile-img" />
                </div>

                <div className="content">
                    <span className="heading">
                        About Me
                    </span>
                    Hello, my name is Rahul Reddy Talatala! I am a graduate student currently pursuing Master in Computer Science at University at Buffalo, New York.  I'm passionate about Software engineering, Full Stack Development and Data Science. I am seeking to find opportunities in Software Development where I can work in a fun and challenging working environment that would hone my skills and would like to build a career, making the best use of my analytical, creative and logical skills to perform the job efficiently.
                    <br /><br />
                    I'm creative, artistic and ambitious with a talent for thinking outside the box. I bring innovative ideas to the table which can be useful in every part of life. I have excellent team spirit and communication skills which enable me to effectively communicate with a wide range of people.
                </div>
            </div>
        </section>
    );
}

export default AboutPage;