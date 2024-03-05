import "./home.css"
import img1 from "../../../../public/ghaleb/banner-01.jpg"
import img2 from "../../../../public/ghaleb/banner-02.jpg"
import img3 from "../../../../public/ghaleb/banner-03.jpg"
import img4 from "../../../../public/ghaleb/model.jpg"
import Products from "../products/Products.jsx"


const Home = () => {

    const sum = () => {
        window.location.replace("/Products")
    }


    return (
         <>
            <div className="baner">
                <h2 className="cover_h2">New Collection 2024</h2>
                <h3 className="cover_h3">Men and Women</h3>
                <button className="cover_btn" onClick={sum}>Show Product</button>
            </div>

            <div className="Selection">

                <div className="div_selection">
                    <h3 className="text_selection">Women</h3>
                    <img src={img1} alt="img" className="img"/>
                    <p className="p_selection">Various new womens clothes <br /> Up-to-date models</p>
                </div>
                <div className="div_selection">
                    <h3 className="text_selection">Men</h3>
                    <img src={img2} alt="img2" className="img"/>
                    <p className="p_selection">The best mens clothes <br />  Click to view </p>
                </div>
                <div className="div_selection">
                    <h3 className="text_selection">Accessories</h3>
                    <img src={img3} alt="img3" className="img"/>
                    <p className="p_selection">The most beautiful new and old accessories <br /> In different colors</p>
                </div>

            </div>

             
            <div className="div_Product">
                <div className="div_filter">
                    <h2 className="h2_Product">Find your product with options</h2>
                </div>
                <Products/>
            </div>

            <div className="div_model">
                <h2>The Casualselection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img src={img4} alt="model" className="model"/>
            </div>
            
         </>
    )
}

export default Home