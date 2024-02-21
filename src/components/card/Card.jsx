import React from 'react'
import "./Card.css" 
const Card = ({data}) => {
  return (
    <div className='mainpart'>
      <div className='card'>
        <img className='hotelpic' src={data.avatar}/>
        <div className='cardinfo'>
            <h3 className='hotelname'>{data.name}</h3>
            <p className='hoteladd'>{data.address}</p>
            <button className='rating'>{data.rating}</button>
            <div className='price'>Rs. {data.price}/night</div>
            <div className='roombook'>
              <button class='roombtn'>Book Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card

