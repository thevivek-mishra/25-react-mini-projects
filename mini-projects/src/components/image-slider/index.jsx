import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

export default function ImageSlider ({url, limit=5, page =1}){
    const [image, setImage] =useState([])
    const [currentSlide, setCurrentSlide] =useState(0)
    const [errorMsg, setErrorMsg] =useState(null)
    const [loading, setLoading] =useState(false)
    async function  fetchImages(getUrl) {
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json()
            if(data) {
                setImage(data)
                setLoading(false)
            }
        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(url !== "") fetchImages(url)
    },[url])
    
    if(loading){
        return <div>Loading! please wait....</div>
    }
    if(errorMsg !== null){
        return <div>Error Occured ! {errorMsg}</div>
    }
    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrev} className=" arrow arrow-left"/>
        {
            image && image.length 
            ? image.map((imageItem)=>(
                <img 
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className="current-image"
                />
            ))
            :null
        }
        <BsArrowRightCircleFill onClick={handleNext} className=" arrow arrow-right"/>
        <span className="circle-indicators">
           {
                image && image.length ? 
                image.map((_,index)=>(
                    <button
                    key={index}
                    className="current-indicator"
                    >

                    </button>
                ))
                :null
            }
        </span> 
    </div>
}