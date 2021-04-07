import React, { useState, useEffect } from 'react'
import './rating.css';

const Rating = (props) => {

    let [star, setStar] = useState([]);

    useEffect(() => {
        let arr = [];
        const value = props.value;
        const valueF = Math.floor(value);
        for (let i = 0; i < valueF; i++) {
            arr.push({ v: 1 })
        }
        arr.push({ v: value - valueF })
        for (let i = 0; i < 5 - arr.length; i++) {
            arr.push({ v: 0 })
        }
        setStar(arr)
    }, [star.length])

    function putStar() {
        return star.map(({ v }, i) => <i key={i} className={`fa ${(v >= 1) ? "fa-star" : (v === 0) ? "fa-star-o" : "fa-star-half-o"}`}></i>)
    }

    return (
        <div className="rating" >
            <div className="stars" data-value={`${props.value}`}>
                {putStar()}
            </div>
        </div>
    )
}

export default Rating
