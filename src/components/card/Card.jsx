import React from 'react'
import './Card.css'
import Ceo from "../../assets/ceo.jpeg";

function Card({item}) {
  return (
    <>
    <div className="cardWrapper">
      <div>
        <h2>{item.title}</h2>
        <span>👍</span>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
      <div>
        <p><span>{item.type} </span>by anujgosalia</p>
        <ul>
          <li>{item.date}</li>
          <li>{item.timeInMin} mins Read</li>
          <li>{item.views} Views</li>
        </ul>
      </div>
    </div>
  </>
    
  )
}

export default Card