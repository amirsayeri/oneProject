import ProData from "../../../ProData"
import { useState } from "react"
import "./products.css"
import { Link } from "react-router-dom"

import { useContext } from "react"
import {changeNumber} from "../../../App.jsx"



const Products = () => {

    const [ data , setData  ] = useState(ProData)

    const {setNumber} = useContext(changeNumber)

    const [ inputData , setInputData ] = useState("")

    // const refData = useRef(null)





    // const filterBtn = (description) => {
    //     const filterPro = ProData.filter( (item) => item.Description == description)
    //     setData(filterPro)
    // }

    const filterBtn = (description) => {
        const filtering = ProData.filter( (item) => item.Description == description )
        setData(filtering)
    } 

    const searchBtn = () => {
        const filterSearch = ProData.filter( (item) => item.title == inputData )
        setData(filterSearch)
    }



    return (
        <div>
            <div className="div_filtering">
                <div className="div_btn_filter">
                    <button className="btn_Procards" onClick={ () => setData(ProData)}>All Products</button>
                    <button className="btn_Procards" onClick={ () => filterBtn("women")}>Women</button>
                    <button className="btn_Procards" onClick={ () => filterBtn("men")}>men</button>
                    <button className="btn_Procards" onClick={ () => filterBtn("accessories")} >accessories</button>
                </div>
                <div>
                    <input type="text" className="inputSearch" placeholder="Search ... " onChange={ (e) => setInputData(e.target.value) }/>
                    <button className="search_btn" onClick={searchBtn}>search</button>
                </div>
            </div>
            <div className="div_Products">
                {data.map( (item) => {
                    return <Link to={`/product/${item.id}`} key={item.id} className="card">
                        <div className="div_img">
                           <img src={item.img} alt="mahsol" className="img"/>
                        </div>
                        <div>
                         <h3>{item.title}</h3>
                         <p>{item.Description}</p>
                        </div>
                        <div className="div_tozih">
                           <p className="price">{item.price}</p>
                           <button onClick={ () => setNumber( prev => prev + 1 ) } className="btn">Buy</button> 
                        </div>
                    </Link>
                } )}
            </div>
        </div>
    )
}

export default Products