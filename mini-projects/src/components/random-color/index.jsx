import { useEffect, useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] =useState("hex")
    const [color, setColor] =useState("#000000")
    function randomColorUtility(len){
        return Math.floor(Math.random()*len)

    }
    function handleCreateRandomHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#"
        for(let i =0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        // console.log(hexColor)
        setColor(hexColor)
    }
    function handleCreateRandomRgbColor(){
        let r = randomColorUtility(256);
        let g = randomColorUtility(256);  
        let b = randomColorUtility(256);
        
        let rgbColor = `rgb(${r},${g}, ${b})`
        // console.log(rgbColor)
        setColor(rgbColor)
        
    }
    useEffect(()=>{
        if(typeOfColor === 'hex') handleCreateRandomHexColor()
        else handleCreateRandomRgbColor()
    },[typeOfColor])
  return (
    <>
      <div className="container" style={{width:'100vw',height:'100vh',background:color}}>
        <button onClick={()=>setTypeOfColor("hex")}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor("rgb")}>create RGB color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor: handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={
            {display:"flex",
                justifyContent:"center",
                alignContent:"center",
                color: "white",
                fontSize:"60px",
                marginTop:"50px"
            }
        }>
            <h3>{typeOfColor === 'rgb'? 'RGB color:': 'HEX Color:'}</h3>
            <h1>{color}</h1>
        </div>

      </div>
    </>
  );
}
