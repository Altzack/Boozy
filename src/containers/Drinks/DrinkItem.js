import React from 'react';

export default function DrinkItem(props) {
  return (
    <li className="DrinkItem">
      <div className="DrinkItem_Row">
        <h3 className="DrinkItem_Title">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h3>
      </div>
      <p className="DrinkItem_Instructions">{props.instructions}</p>
      <div className="DrinkItem_Buttons">
        <button
          className="DrinkItem_Delete"
          onClick={() => props.onClickDelete(props.id)}
        >
          deletus
        </button>
      </div>
    </li>
  );
}
