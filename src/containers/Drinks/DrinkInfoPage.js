import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import styled from 'styled-components/macro';
import config from '../../config';
import '../../App.css';
import moment from 'moment';
import Loader from '../Loader/Loader';
import FourOhFour from '../common/FourOhFour';

const DrinkContainer = styled.div`
  align-items: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (min-width: 767px) {
    padding: 50px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  font-family: Rubik;
  font-weight: 400;
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
  font-family: Rubik;
  font-weight: 200;
  color: #fff;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 10px;
  @media (min-width: 767px) {
    font-size: 30px;
  }
  @media (min-width: 1030px) {
    font-size: 35px;
  }
`;

const Modified = styled.h2`
  font-size: 10px;
  text-align: left;
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
  text-align: left;
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
  background-color: #1c89ff;
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
    background-color: #3e9afc;
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
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static contextType = AppContext;

  copyToClipboard = () => {
    const drinkId = Number(this.props.match.params.drinkId);
    let copyText = `https://boozy.vercel.app/drinks/${drinkId}`;

    navigator.clipboard.writeText(copyText).then(
      function () {
        alert('Copying link to clipboard was successful!');
      },
      function (err) {
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
        this.setState({ error });
      });
  };

  render() {
    if (this.context.loading === true)
      return (
        <>
          <div style={{ marginTop: 300 }}>
            <Loader />
          </div>
        </>
      );

    const drinkId = Number(this.props.match.params.drinkId);
    const drinkInfo =
      this.context.drinks.length > 0
        ? this.context.drinks.find((d) => {
            return d.id === drinkId;
          })
        : '';

    return (
      <>
        {drinkInfo ? (
          <DrinkContainer className="drink">
            <div style={{ textAlign: 'left' }}>
              {drinkInfo.title ? <Title>{drinkInfo.title}</Title> : ''}
              {drinkInfo.alcohol ? (
                <SubTitle>Alcohol: {drinkInfo.alcohol}</SubTitle>
              ) : (
                ''
              )}
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
              {drinkInfo.other ? (
                <SubTitle>Other: {drinkInfo.other}</SubTitle>
              ) : (
                ''
              )}
              <Instructions>{drinkInfo.instructions}</Instructions>
              <br />
              <div>
                <Button onClick={this.handleClickDelete}>Delete</Button>
                <Button onClick={this.copyToClipboard}>Share</Button>
                <Link style={{ color: '#fff' }} to={`/EditDrink/${drinkId}`}>
                  <Button>Edit</Button>
                </Link>
              </div>
              <Modified>
                Modified: {moment(drinkInfo.modified).format('MM/DD/YY')}
              </Modified>
            </div>
          </DrinkContainer>
        ) : (
          <FourOhFour />
        )}
      </>
    );
  }
}
