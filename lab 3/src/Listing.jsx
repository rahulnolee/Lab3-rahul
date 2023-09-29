
import React from 'react';

export default function Listing(props){
 const ratingStyle = {
    color: props.rating >=4.0 ? 'green' : 'red',
    margin:0,
 }
 const priceStyle = {
    color:'green',
    margin:2,
    
 }
 const hotelStyle={
    color: 'white',
    margin:0,
 }
const countryStyle={
    margin:0,
}
 const imageStyle={
    margin:15,
   
 }
 return(
        <div>
           <img style={imageStyle} src={props.pic}  height="180px" width="160px"/> 
           <h3 style={countryStyle}>{props.country}</h3>
           <p style={hotelStyle}>{props.location}</p>
           <h4 style={ratingStyle}>{props.rating}★</h4>
           <h4 style={priceStyle}>$ {props.price}/night!</h4>
        </div>
        
        
       

    )
    
}