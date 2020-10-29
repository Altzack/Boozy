import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

const DrinkContainer = styled.div`
  max-width: 1000px;
  align-items: center;
  margin: auto;
  padding: 50px;
`;

const PageContainer = styled.div`
  display: flex;
  padding-top: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: #000;
  margin-right: 10px;
  font-weight: 600;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
`;

export default class DrinkList extends React.Component {
  componentDidMount() {
    this.context.getDrinks();
  }
  static contextType = AppContext;

  render() {
    const list = this.context.drinks.map((drink) => {
      return (
        <DrinkContainer className="drink" key={drink.id}>
          <Title>
            <Link to={`/drinks/${drink.id}`}>{drink.title}</Link>{' '}
          </Title>
          <div>
            <img
              alt="drink"
              style={{ width: 200 }}
              src="placeholderdrink-min.jpg"
            />
          </div>
          <Button>
            <Link style={{ color: '#000' }} to={`/drinks/${drink.id}`}>
              View Drink
            </Link>
          </Button>
        </DrinkContainer>
      );
    });
    return <PageContainer className="drinklist">{list}</PageContainer>;
  }
}
