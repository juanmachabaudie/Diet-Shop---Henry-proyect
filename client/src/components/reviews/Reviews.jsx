import React from "react";
import "./Reviews.css"
const Reviews = ({product})=>{
    const array= [1,2,3,4,5];
    const [star, setStar]= React.useState({
        active: false,
        reviews:0
    })
    const handleReviews = (v)=>{
        const id = v.target.id;
        setStar({
            ...star, active:true, reviews:id
        })
    }
         
    return (
        <div className="containerReviews">
           {
            array.map((r)=>{
                if(!star.active){
                   return  <i className="far fa-star" onClick={handleReviews} id={r} style={{color:"orange",fontSize:"20px",display:"inline-block"}}></i>
                }else{
                    if(r <= star.reviews){
                       return <i className="fas fa-star" onClick={handleReviews} id={r} style={{color:"orange",fontSize:"20px",display:"inline-block"}}></i>
                    }else{
                        return  <i className="far fa-star" onClick={handleReviews} id={r} style={{color:"orange",fontSize:"20px",display:"inline-block"}}></i>
                    }
                }
            })
           }
        </div>
    )
}
export default Reviews;