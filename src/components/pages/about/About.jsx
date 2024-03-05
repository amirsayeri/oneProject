import "./about.css"
import imgAbout from "../../../../public/ghaleb/about-us.jpg"

const About = () => {
    return (
        <div className="about">

            <img src={imgAbout} alt="about" className="imgAbout"/>
            <h2 className="about_h2">
                8 BEST ABOUT US TEMPLATE IDEAS AND EXAMPLES (2024)
            </h2>
            <p className="about_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eius iste, odit error id explicabo. Asperiores aut necessitatibus quibusdam, vel nam nesciunt sint libero quis suscipit iste doloribus fugiat <br /> neque laborum, voluptates earum voluptatibus autem, ratione exercitationem consectetur distinctio ea harum ut! Doloribus, dicta. Architecto explicabo cum ipsa laboriosam hic?</p>

        </div>
    )
}
 
export default About