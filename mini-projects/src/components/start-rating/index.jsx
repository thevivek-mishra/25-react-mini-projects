import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'
export default function StarRating({noOfStar}){
    const [rating, setRating] =useState(0)
    const [hover, setHover] =useState(0)

    function hanldeClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex)
    }
    function hanldeMouseLeave(){
        setHover(rating)
    }
    return <div className="star-rating">
        {
            [...Array(noOfStar)].map((_,index)=>{
                index += 1
                return <FaStar
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                key={index}
                onClick={()=>hanldeClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>hanldeMouseLeave()}
                size={40}
                />
            })
        }
    </div>
}