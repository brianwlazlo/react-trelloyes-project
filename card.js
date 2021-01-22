import React from 'react';
import './card.css';


export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

/* -- my starter code ----
function Card (props) {
  return (
    <div class="Card">
      <button type="button">delete</button>
      <h3>props.title</h3>
      <p>props.content</p>
  </div>
  )
};

export default Card;
*/