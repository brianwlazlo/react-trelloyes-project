import React from 'react';
import Card from './card';
import './list.css';


export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
        <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

/* --- my starter code ---
function List (props) {
  return (
    <section class="List">
      <header class="List-header">
        <h2>{lists.header}</h2>
      </header>
      <div class="List-cards">
        <Card
          key = 
          title = 
          content =  />
        <button type="button" class="List-add-button">
            + Add Random Card
        </button>
      </div>
    </section>
  )
}

export default List;
*/