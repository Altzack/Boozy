import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import Loader from '../Loader/Loader';

const DrinkContainer = styled.div`
  max-width: 1000px;
  align-items: center;
  padding: 50px;
`;

const PageContainer = styled.div`
  display: flex;
  padding-top: 42px;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (max-width: 350px) {
    margin-right: 50px;
  }
`;

const Title = styled.h1`
  font-family: Rubik;
  font-weight: 300;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 300px) {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Button = styled.button`
  color: #fff;
  font-weight: 500;
  height: 34px;
  background-color: #1c89ff;
  margin-top: 12px;
  width: 100px;
  transition: all 0.1s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-bottom: 4px solid rgba(0, 0, 0, 0.21);
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  :hover {
    transition: all 0.1s ease-in-out;
    background-color: #3e9afc;
    cursor: pointer;
  }
`;

export default class DrinkList extends React.Component {
  static contextType = AppContext;

  render() {
    if (this.context.loading === true)
      return (
        <div style={{ marginTop: 150 }}>
          <Loader />
        </div>
      );

    const list = this.context.drinks.map((drink) => {
      return (
        <DrinkContainer className="drink" key={drink.id}>
          <Title>
            <Link style={{ color: '#fff' }} to={`/drinks/${drink.id}`}>
              {drink.title}
            </Link>
          </Title>
          <div>
            <img
              alt="drink"
              style={{ width: 190 }}
              src="placeholderdrink-min.jpg"
            />
          </div>
          <Link to={`/drinks/${drink.id}`}>
            <Button>View drink</Button>
          </Link>
        </DrinkContainer>
      );
    });
    return <PageContainer className="drinklist">{list}</PageContainer>;
  }
}
