import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import styled from 'styled-components/macro';
import config from '../../config';
import '../../App.css';
import moment from 'moment';

const DrinkContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 10px;
  @media (min-width: 767px) {
    font-size: 50px;
  }
  @media (min-width: 1030px) {
    font-size: 45px;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: rgba(232, 230, 227, 0.85);
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 10px;
  @media (min-width: 767px) {
    font-size: 35px;
  }
  @media (min-width: 1030px) {
    font-size: 28px;
  }
`;

const Modified = styled.h2`
  font-size: 10px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #777;
  margin-top: 10px;
  @media (min-width: 200px) {
    font-size: 18px;
  }
  @media (min-width: 1030px) {
    font-size: 22px;
  }
`;

const Instructions = styled.div`
  max-width: 580px;
  white-space: wrap;
  text-align: center;
  font-size: 20px;
  @media (min-width: 767px) {
    font-size: 30px;
  }
  @media (min-width: 1030px) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  color: #fff;
  font-weight: 500;
  height: 34px;
  background-color: #2a9d8f;
  margin-top: 12px;
  margin-right: 10px;
  width: 200px;
  transition: all 0.1s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-bottom: 4px solid rgba(0, 0, 0, 0.21);
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  :hover {
    transition: all 0.1s ease-in-out;
    background-color: #61d5c7;
    cursor: pointer;
  }
  @media (min-width: 299px) {
    width: 75px;
    margin-right: 9px;
  }
  @media (min-width: 350px) {
    width: 90px;
  }
  @media (min-width: 400px) {
    width: 100px;
  }
  @media (min-width: 500px) {
    width: 110px;
  }
  @media (min-width: 800px) {
    width: 120px;
    font-size: 28px;
    height: 50px;
  }
  @media (min-width: 1030px) {
    width: 110pxpx;
    font-size: 19px;
    height: 40px;
  }
`;

export default class DrinkInfoPage extends React.Component {
  static contextType = AppContext;

  copyToClipboard = () => {
    const drinkId = Number(this.props.match.params.drinkId);
    console.log(drinkId);
    let copyText = `https://boozy.vercel.app/drinks/${drinkId}`;

    navigator.clipboard.writeText(copyText).then(
      function () {
        console.log('Copying link to clipboard was successful!');
        alert('Copying link to clipboard was successful!');
      },
      function (err) {
        console.error('Could not copy text: ', err);
        alert('Could not copy');
      }
    );
  };

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
      })
      .then(() => {
        this.props.history.push('/drinks');
        this.context.deleteDrink(drinkId);
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
      this.context.drinks.length > 0
        ? this.context.drinks.find((d) => {
            return d.id === drinkId;
          })
        : '';

    return (
      <DrinkContainer className="drink">
        <Title>{drinkInfo.title}</Title>
        <SubTitle>Alcohol: {drinkInfo.alcohol}</SubTitle>
        {drinkInfo.mixers ? (
          <SubTitle>Mixers: {drinkInfo.mixers}</SubTitle>
        ) : (
          ''
        )}
        {drinkInfo.liqueurs ? (
          <SubTitle>Liqueur: {drinkInfo.liqueurs}</SubTitle>
        ) : (
          ''
        )}
        {drinkInfo.juices ? (
          <SubTitle>Juices: {drinkInfo.juices}</SubTitle>
        ) : (
          ''
        )}
        {drinkInfo.other ? <SubTitle>Other: {drinkInfo.other}</SubTitle> : ''}
        <Instructions>{drinkInfo.instructions}</Instructions>
        <br />
        <div>
          <Button onClick={this.handleClickDelete}>Delete</Button>
          <Button onClick={this.copyToClipboard}>Share</Button>
          <Button>
            <Link style={{ color: '#fff' }} to={`/EditDrink/${drinkId}`}>
              Edit
            </Link>
          </Button>
        </div>
        <Modified>
          Modified: {moment(drinkInfo.modified).format('MM/DD/YY')}
        </Modified>
      </DrinkContainer>
    );
  }
}
