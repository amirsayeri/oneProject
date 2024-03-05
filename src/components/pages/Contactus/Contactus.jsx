import "./contactus.css"

const Contactus = () => {
    return (
        <div className="contact">


            <div className="top_contact">
                <p className="text_One">MICHELLE PAIS GROUO</p>
                <p className="text_Tow">CONTACT US</p>
            </div>


            <div className="botton_contact">
                <div className="childLeft_contact">
                    <p className="textleft_contact">ONLINE INQUIRY</p>
                    <form className="formContact">
                        <input type="text" placeholder="Name" className="inputName_contact"/>
                        <input type="text" placeholder="Email" className="inputEmail_contact"/>
                        <input type="text" placeholder="Phone" className="inputPhone_contact"/>
                    </form>
                        <textarea name="Massage"  cols="67" rows="10" placeholder="Massage" className="textAria_contact"></textarea>
                </div>
                <div className="childRight_contact">
                    <p className="pTop_conteact">CONTACT DETAILS</p>
                    <p className="text_address_contact">michelle@signaturerealtynj.con <br /> (909) 686-1200</p>
                    <h3 className="h3Tilte_contact">Westfield</h3>
                    <p>233 North Avenue <br /> westfield, NJ 07090</p>
                    <h3 className="h3Tilte_contact">Summit</h3>
                    <p>355 North Avenue <br /> Short, NJ 07540</p>
                    <h3 className="h3Tilte_contact">Short Hills Office</h3>
                    <p>549 Millburn Avenue <br /> Short, NJ 07821</p>
                </div>
            </div>


        </div>
    )
}

export default Contactus