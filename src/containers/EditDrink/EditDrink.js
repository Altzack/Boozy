import React, { Component } from 'react';
import AppContext from '../../AppContext';
import BoozyError from '../../BoozyError';
import config from '../../config';
import styled from 'styled-components/macro';
import '../../App.css';

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
  color: #000;
  margin-right: 10px;
  font-weight: 600;
  background-color: #fff;
  border-radius: 5px;
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

export default class EditDrink extends Component {
  render() {
    return (
      <BoozyError>
        <Title>Edit Drink</Title>
        <SubTitle>
          If you want to leave a field blank, please specify 'none'
        </SubTitle>
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
              required
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="other">Mixers: </StyledLabel>
            <input
              type="text"
              id="mixers"
              placeholder="None..."
              name="mixers-section"
              aria-required="true"
              aria-label="mixers"
              required
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="liqueur">Liqueurs: </StyledLabel>
            <input
              type="text"
              id="liqueurs"
              placeholder="None..."
              name="liqueur-section"
              aria-required="true"
              aria-label="liqueur"
              required
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="juices">Juices: </StyledLabel>
            <input
              type="text"
              placeholder="Pineapple juice..."
              id="juices"
              name="juices-section"
              aria-required="true"
              aria-label="juice"
              required
            />
          </div>
          <div className="field">
            <StyledLabel htmlFor="other">Other: </StyledLabel>
            <input
              type="text"
              id="other"
              placeholder="Coconut cream..."
              name="other-section"
              aria-required="true"
              aria-label="other"
              required
            />
          </div>
          <div className="field">
            <textarea
              id="instructions"
              placeholder="instructions..."
              name="instructions-section"
              aria-label="instructions"
            />
          </div>
          <div className="buttons">
            <Button type="submit" to="/">
              Edit Drink
            </Button>
          </div>
        </BoozyForm>
      </BoozyError>
    );
  }
}
