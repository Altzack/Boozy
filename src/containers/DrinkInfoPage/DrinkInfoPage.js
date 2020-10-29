import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import styled from 'styled-components/macro';
import config from '../../config';

const DrinkContainer = styled.div`
  align-items: center;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const PageContainer = styled.div`
  display: flex;
  padding-top: 42px;
  padding: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: row;
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
`;

const Instructions = styled.span`
  flex-wrap: wrap;
  max-width: 600px;
  font-size: 20px;
`;

const Button = styled.button`
  color: #000;
  margin-right: 10px;
  font-weight: 600;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export default class DrinkInfoPage extends React.Component {
  static contextType = AppContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const drinkId = Number(this.props.match.params.drinkId);

    fetch(`${config.API_ENDPOINT}/drinks/${drinkId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteDrink(drinkId);
        this.props.history.push('/drinks');
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const drinkId = Number(this.props.match.params.drinkId);
    console.log(this.context.drinks);
    console.log(drinkId);
    const drinkInfo =
      this.context.drinks.length > 1
        ? this.context.drinks.find((d) => {
            return d.id === drinkId;
          })
        : '';

    return (
      <DrinkContainer className="drink">
        <Title>{drinkInfo.title}</Title>
        <SubTitle>Alcohol: {drinkInfo.alcohol}</SubTitle>
        <SubTitle>Mixers: {drinkInfo.mixers}</SubTitle>
        <SubTitle>Liqueur: {drinkInfo.liqueurs}</SubTitle>
        <SubTitle>Juices: {drinkInfo.juices}</SubTitle>
        <SubTitle>Other: {drinkInfo.other}</SubTitle>
        <SubTitle>Modified: {drinkInfo.modified}</SubTitle>
        <Instructions>{drinkInfo.instructions}</Instructions>
        <br />
        <div>
          <Button onClick={this.handleClickDelete}>Delete</Button>
          <Button>Share</Button>
          <Button>
            <Link style={{ color: '#000' }} to={`/EditDrink`}>
              Edit
            </Link>
          </Button>
        </div>
      </DrinkContainer>
    );
  }
}
