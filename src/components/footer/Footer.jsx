import "./footer.css"
import img1 from "../../../public/ghaleb/instagram.png"
import img2 from "../../../public/ghaleb/twitter.png"
import img3 from "../../../public/ghaleb/tiktak.png"
import img4 from "../../../public/ghaleb/facebook.png"



const Footer = () => {
    return (
        <div className="footer">
            
            <div className="childe_left">
                <div className="div_One">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                    </ul>
                </div>
                <div className="div_Tow">
                    <h3>HELP</h3>
                    <ul>
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>



            <div className="child_right">
                <div className="div_Tree">
                    <h3>GET IN TOUCH</h3>
                    <p>Any questions?Let us know in store at 8th <br /> floor,379Hudson st New york NY 10018 or <br /> call us on (+1)96716 6879</p>
                    <div>
                        <img src={img1} alt="instagram" className="social"/>
                        <img src={img2} alt="twitter" className="social"/>
                        <img src={img3} alt="tiktak" className="social"/>
                        <img src={img4} alt="facebook" className="social"/>
                    </div>
                </div>
                <div className="div_For">
                    <input type="text" className="input_text" placeholder="Email ..."/>
                    <input type="submit" className="input_submit"/>
                </div>
            </div>


        </div>
    )
}

export default Footer