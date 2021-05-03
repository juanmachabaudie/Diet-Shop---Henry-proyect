import React, { useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import "./review.css"
import useStyles from "./Styles";
import { Rating, Alert } from '@material-ui/lab';
import { Card, TextField, Button, Divider, Typography, Container } from '@material-ui/core';
import {getReviews, addReview, deleteReview} from "../../auxiliar/functions/reviewFunctions";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

 
export default function Review(product) {
var content=[];
const [value, setValue] = useState(1);
const classes = useStyles();
const { id } = useSelector((state) => state.user);
const [reseña,setReseña] = useState(false)
const [viewAll, setViewAll]=useState(false)
const [reviews, setReviews]=useState([]);
const [testReview,setTestReview]=useState([])
const [update, setUpdate] = useState(false);
const [inputs, setInputs]=useState({
    description: "",
    calification: 1
});



const a = async ()=> {
    let reviews=await getReviews(product.product.id);
    setReviews(reviews)
    let testString=reviews.slice(0,3)
    setTestReview(testString)
}


const onHandleSubmit = async (e) => {
    
    e.preventDefault();
    console.log(inputs);
    await addReview(id, product.product.id, inputs.description, value)
    setUpdate(!update)
    setReseña(!reseña)
    return;
  };
useEffect(() => {
    a()
},[update])

// .then(data=>reviews=data).catch(e=>console.log(e));

var ratingTotal = [], rating;
reviews.map(async (e)=>{ratingTotal.push(Number(e.calification));})
                        

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
rating=average(ratingTotal).toFixed(1)

var filter=reviews.filter(e=>e.userId==id);
viewAll ? content=reviews : content=testReview;

  return (
    <div className="container" >
       
        <Card>
            <Typography  className={classes.Title} fontSize="large">Reseñas</Typography>
            <Divider/>
            <div display="flex" flexDirection>
                <Rating size="large" name="half-rating" precision={0.5} value={rating} readOnly /> 
                {rating>0?<Typography width={1} className={classes.ratingAverage}>{rating} / 5</Typography>:<p></p>}
            </div>
            <Button variant="contained" 
                   
                    disabled={(id=="GUEST")||(filter.length!=0)}
                    className={classes.reviewButton}
                    disableRipple 
                    marginBottom="2vh"
                    onClick={()=>{setReseña(!reseña)}}
                    
                    >Escribe una reseña
            
            </Button>
            
            {reseña ? 
                <Card className={classes.reviewForm} >
                    <form className={classes.reviewForm} onSubmit={onHandleSubmit}>
                        <TextField
                        id="outlined-textarea"
                        label="Agregar Reseña"
                        
                        placeholder="Descripcion"
                        multiline
                        variant="outlined"
                        onChange={e=>setInputs({...inputs, description: e.target.value})}
                        />
                        
                        <Rating 
                                style={{alignSelf: "center"}}
                                name="unique-rating"
                                
                                value={value} 
                                onChange={(event,newValue)=>{setValue(newValue)}} 
                                
                                />
                        <Button
                        
                        type="submit"
                        variant="contained"
                        color="primary"
                        
                    >
                        Agregar reseña
                        </Button>
                    </form>

                </Card>: <p></p>}
            
            <Divider/>
        </Card>
        <Container className={classes.cardsContainer}>
            {content.length ? 
                <Card elevation = {0} className={classes.container}>
                            {content.map(review=> 
                                                <Card className={classes.reviewCard}> 
                                                        <Divider/>
                                                        <Container className={classes.reviewHeader}>
                                                            <Rating size="small" name="half-rating" precision={0.5} value={review.calification} readOnly /> 
                                                            {id==review.user.id ? <Button onClick={()=>{deleteReview(review.id); setUpdate(!update)}}>Borrar reseña</Button>: <p></p>}

                                                        </Container>
                                                        <Container className={classes.reviewInfoContainer}>
                                                            <Container className={classes.reviewInfo}>
                                                                <Typography className={classes.names}>{review.createdAt.slice(0,10)}</Typography>
                                                                <Typography className={classes.names}>{`${review.user.firstName } ${review.user.lastName }: `}</Typography>
                                                            </Container>
                                                            <Container></Container>
                                                            <Container></Container>
                                                        </Container>
                                                            <Typography>{review.description}</Typography>
                                                        <Divider/>
                                                </Card>)}
                </Card>
            
            : <Card className={classes.Message}>No se encontraron reseñas para el producto</Card>}

        </Container>
        {reviews.length>3 ? 
                    <Button
                        className={classes.viewMoreButton}
                        type="submit"
                        variant="contained"
                        size="small"
                        onClick={()=>setViewAll(!viewAll)}
                        startIcon={!viewAll ? <ArrowDownward/>:<ArrowUpward/>}
                        endIcon={!viewAll ? <ArrowDownward/>:<ArrowUpward/>}
                    >   
                        {!viewAll ? "Ver todas las reseñas" : "Ver menos reseñas"}
                    </Button>
        :<p></p>}    
        
    
    </div>
  )
}