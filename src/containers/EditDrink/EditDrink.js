import React, { Component } from 'react';
import AppContext from '../../AppContext';
import BoozyError from '../../BoozyError';
import config from '../../config';
import styled from 'styled-components/macro';
import '../../App.css';
import moment from 'moment';
import { message } from 'antd';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const BoozyForm = styled.form`
  display: flex;
  color: #000;
  margin-top: 30px;
  width: 550px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5px 40px 40px 40px;
  border-radius: 10px;
  box-shadow: 0.4px 0.4px 0.4px 0.4px rgba(128, 128, 128, 0.109),
    0 1px 1px rgba(128, 128, 128, 0.155),
    0 2.1px 2.1px rgba(128, 128, 128, 0.195),
    0 4.4px 4.4px rgba(128, 128, 128, 0.241),
    0 -8px 8px -8px rgba(128, 128, 128, 0.241),
    0 12px 12px rgba(128, 128, 128, 0.35);
`;

const ArrowContainer = styled.div`
  text-align: left;
  20%;
  @media (min-width: 300px) {
    margin-right: 5px;
    margin-top: 15px;
  }
  @media (min-width: 325px) {
    margin-right: 10px;
    margin-top: 15px;
  }
  @media (min-width: 365px) {
    margin-right: 20px;
    margin-top: 15px;
  }
  @media (min-width: 450px) {
    margin-right: 25px;
    margin-top: 22px;
  }
  @media (min-width: 600px) {
    margin-right: 35px;
    margin-top: 20px;
  }
`;

const BackArrow = styled.div`
  width: 40px;
  color: #fff;
  height: 40px;
  line-height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  background-color: #1c89ff;
  box-shadow: 0 0 3px gray;
  font-size: 20px;
  font-weight: bold;
  @media (min-width: 600px) {
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
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
  font-size: 30px;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #fff;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  @media (min-width: 300px) {
    margin-right: 45px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const SubTitle = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const BoozyInput = styled.input`
  width: 260px;
`;

export default class EditDrink extends Component {
  static contextType = AppContext;

  handleSubmit = (e) => {
    let dayString = moment().format('MM/DD/YYYY');
    const drinkId = Number(this.props.match.params.drinkId);
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

    const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

    fetch(`${config.API_ENDPOINT}/drinks/${drinkId}`, {
      method: 'PATCH',
      body: JSON.stringify(getDrink),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((drinkRes) => {
        if (!drinkRes.ok) return drinkRes.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.props.history.push(`/drinks/${drinkId}`);
      })
      .then(() => message.success('Drink successfully edited'));

    delay(1500)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        message.error(`Please try again later: ${err}`);
      });
  };

  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  render() {
    const drinkId = Number(this.props.match.params.drinkId);
    const drinkInfo =
      this.context.drinks.length > 0
        ? this.context.drinks.find((d) => {
            return d.id === drinkId;
          })
        : '';

    return (
      <BoozyError>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BoozyForm onSubmit={this.handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ArrowContainer>
                <Link style={{ color: '#fff' }} to={`/drinks/${drinkId}`}>
                  <BackArrow>
                    <RiArrowGoBackLine />
                  </BackArrow>
                </Link>
              </ArrowContainer>
              <Title>Edit A Drink</Title>
            </div>
            <SubTitle>If none, leave the field blank</SubTitle>
            <div className="field">
              <BoozyInput
                type="text"
                id="title"
                name="title-section"
                defaultValue={drinkInfo.title}
                aria-required="true"
                aria-label="Title"
                maxLength="28"
                required
              />
            </div>
            <div className="field">
              <BoozyInput
                type="text"
                id="alcohol"
                defaultValue={drinkInfo.alcohol}
                name="alcohol-section"
                aria-required="true"
                aria-label="alcohol"
                maxLength="40"
                required
              />
            </div>
            <div className="field">
              <BoozyInput
                type="text"
                id="mixers"
                defaultValue={drinkInfo.mixers}
                placeholder={drinkInfo.mixers ? drinkInfo.mixers : 'Mixers...'}
                name="mixers-section"
                aria-required="true"
                maxLength="40"
                aria-label="mixers"
              />
            </div>
            <div className="field">
              <BoozyInput
                type="text"
                id="liqueurs"
                defaultValue={drinkInfo.liqueurs}
                placeholder={
                  drinkInfo.liqueurs ? drinkInfo.liqueurs : 'Liqueurs...'
                }
                name="liqueur-section"
                maxLength="40"
                aria-required="true"
                aria-label="liqueur"
              />
            </div>
            <div className="field">
              <BoozyInput
                type="text"
                defaultValue={drinkInfo.juices}
                placeholder={drinkInfo.juices ? drinkInfo.juices : 'Juices...'}
                id="juices"
                name="juices-section"
                aria-required="true"
                aria-label="juice"
                maxLength="40"
              />
            </div>
            <div className="field">
              <BoozyInput
                type="text"
                id="other"
                placeholder={drinkInfo.other ? drinkInfo.other : 'Other...'}
                defaultValue={drinkInfo.other}
                maxLength="40"
                name="other-section"
                aria-required="true"
                aria-label="other"
              />
            </div>
            <div className="field">
              <textarea
                style={{ width: 260, height: 60 }}
                id="instructions"
                defaultValue={drinkInfo.instructions}
                name="instructions-section"
                maxLength="150"
                aria-label="instructions"
                required
              />
            </div>
            <div className="buttons">
              <Button type="submit">Edit drink</Button>
            </div>
          </BoozyForm>
        </div>
      </BoozyError>
    );
  }
}
