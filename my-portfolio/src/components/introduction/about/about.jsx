import "./about.css"
// import ThobekaTalent from "../../img/Thobeka1.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSACq46xFRJlPF-a69EcLwrKtWKpuc6NXUKg&usqp=CAU"
                        alt=""
                        className="about-image"

                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub-title">
                    I am accustomed to working on multiple projects simultaneously and carry with me outstanding problem-solving skills.
                </p>
                <p className="about-description">
                    Through my work-related and educational experiences, I have expanded my abilities to provide
                    excellent service in a professional manner and can work perfectly well with a team. Also,
                    my background in the people service industry has equipped me with superior organizational facilities and time management skills.
                </p>
                {/* <div className="about-award">
                    <img src={ThobekaTalent} alt="" className="about-award-img"

                    />

                </div> */}
            </div>
        </div>
    )
};

export default About;
