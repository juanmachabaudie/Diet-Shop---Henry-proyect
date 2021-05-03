import { URL_BACK_PRODUCTS } from "../constants/constants";

export const 

  addReview = async (userId, productId,desc, calif) => {
    var Total = 0;
    await fetch(`${URL_BACK_PRODUCTS}/review/${userId}/${productId}`, {
      method: "POST",
      body: JSON.stringify({desc,calif}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => (Total = response));
    return Total;
  },
  
  
  deleteReview = async (reviewId) => {
    console.log(reviewId)
    var r=await fetch(`${URL_BACK_PRODUCTS}/review/${reviewId}`);
    const response= await r.json();
    
     
    return response;
      
  },
  getReviews = async (productId) => {
    
    var r= await fetch(`${URL_BACK_PRODUCTS}/${productId}/review`);
    const response= await r.json();
    
    
    return response;
  }

  

;
