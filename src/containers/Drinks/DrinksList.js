import React, { Component } from 'react';

class DrinkList extends Component {
  static defaultProps = {
    drinks: [],
  };

  render() {
    const { drinks } = this.props;
    return (
      <section className="DrinkList">
        <h2>Drinks</h2>
        <ul className="Drink_List" aria-live="polite">
          {drinks.map((drink) => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </ul>
      </section>
    );
  }
}

export default DrinkList;
