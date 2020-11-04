import React, { Component } from 'react';
import AppContext from '../../AppContext';
import BoozyError from '../../BoozyError';
import config from '../../config';
import styled from 'styled-components/macro';
import '../../App.css';
import moment from 'moment';

const BoozyForm = styled.form`
  display: flex;
  color: #000;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109),
    0 1px 1px rgba(128, 128, 128, 0.155),
    0 2.1px 2.1px rgba(128, 128, 128, 0.195),
    0 4.4px 4.4px rgba(128, 128, 128, 0.241),
    0 12px 12px rgba(128, 128, 128, 0.35);
`;

const StyledLabel = styled.label`
  color: #fff;
  font-weight: 500;
`;
const Button = styled.button`
  color: #fff;
  width: 200px;
  height: 36px;
  border-radius: 18px;
  background-color: #1c89ff;
  border: solid 1px transparent;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: transparent;
    border-color: #fff;
    transition: all 0.1s ease-in-out;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  margin-top: 20px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
`;

export default class AddDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  static contextType = AppContext;

  handleSubmit = (e) => {
    let dayString = moment().format('MM/DD/YYYY');
    e.preventDefault();
    const getDrink = {
      title: e.target['title-section'].value,
      alcohol: e.target['alcohol-section'].value,
      liqueurs: e.target['liqueur-section'].value,
      juices: e.target['juices-section'].value,
      other: e.target['other-section'].value,
      instructions: e.target['instructions-section'].value,
      mixers: e.target['mixers-section'].value,
      modified: dayString,
    };

    fetch(`${config.API_ENDPOINT}/drinks`, {
      method: 'POST',
      body: JSON.stringify(getDrink),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((drinkRes) => {
        if (!drinkRes.ok) return drinkRes.json().then((e) => Promise.reject(e));
        return drinkRes.json();
      })
      .then((drink) => {
        this.context.addDrink(drink);
        this.props.history.push('/drinks');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <BoozyError>
        <Title>Create A Drink</Title>
        <SubTitle>If none, leave the field blank</SubTitle>
        <BoozyForm onSubmit={this.handleSubmit}>
          <div className="field">
            <StyledLabel htmlFor="title">Title: </StyledLabel>
            <input
              type="text"
              id="title"
              name="title-section"
              placeholder="Piña colada..."
              aria-required="true"
              aria-label="Title"
              maxLength="28"
              required
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="alcohol">Alcohol: </StyledLabel>
            <input
              type="text"
              id="alcohol"
              placeholder="Rum..."
              name="alcohol-section"
              aria-required="true"
              aria-label="alcohol"
              maxLength="20"
              required
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="other">Mixers: </StyledLabel>
            <input
              type="text"
              id="mixers"
              placeholder="..."
              name="mixers-section"
              aria-required="true"
              maxLength="20"
              aria-label="mixers"
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="liqueur">Liqueurs: </StyledLabel>
            <input
              type="text"
              id="liqueurs"
              placeholder="..."
              name="liqueur-section"
              maxLength="20"
              aria-required="true"
              aria-label="liqueur"
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="juices">Juices: </StyledLabel>
            <input
              type="text"
              placeholder="Pineapple juice..."
              id="juices"
              maxLength="20"
              name="juices-section"
              aria-required="true"
              aria-label="juice"
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="other">Other: </StyledLabel>
            <input
              type="text"
              id="other"
              maxLength="20"
              placeholder="Coconut cream..."
              name="other-section"
              aria-required="true"
              aria-label="other"
            />
          </div>
          <div className="field">
            <textarea
              style={{ width: 200 }}
              id="instructions"
              placeholder="instructions..."
              name="instructions-section"
              aria-label="instructions"
              maxLength="150"
              required
            />
          </div>
          <div className="buttons">
            <Button type="submit" to="/">
              Add Drink
            </Button>
          </div>
        </BoozyForm>
      </BoozyError>
    );
  }
}
