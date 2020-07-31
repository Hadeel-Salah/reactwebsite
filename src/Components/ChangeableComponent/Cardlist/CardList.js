import React from 'react';
import { Card } from '../Card/Card';
import './cardlist.css';

const CardList = props => (
  <div className="allCards">
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  </div>
  
);
export default CardList;