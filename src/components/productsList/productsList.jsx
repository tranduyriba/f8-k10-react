import React from "react";
import { useState } from "react";
import {datas} from "./datas"





function ProductsItem (props) {
    return (
        <>
            <h2>{props.datas.name}</h2>
            <p>Giá: {props.datas.price}</p>
            <p>Mô tả: {props.datas.description}</p>
        </>
    )
}   

export default function ProductsList () {
    const [isShown, setIsShown] = useState(false)
    return (
        <>
        <button onClick={() => setIsShown(!isShown)}>Show</button>
            {isShown ? <div><p>Danh sách san pham</p>{ProductsItem}</div> : 'khoong'}        
        </>
    )
}
