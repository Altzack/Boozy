import React, { Component } from 'react';
import styled from 'styled-components/macro';
import {
  FaGrinBeam,
  FaHourglassHalf,
  FaLightbulb,
  FaWineGlassAlt,
} from 'react-icons/fa';

const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: rgba(232, 230, 227, 0.85);
  margin-bottom: 30px;
`;
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaLightbulb />,
        title: 'Unlimited possibilites',
        info:
          'Put your creativity to work and come up with completely unique drink recipes.',
      },
      {
        icon: <FaHourglassHalf />,
        title: 'Quick and easy',
        info:
          'Looking for something new to try? Boozy can give you great suggestions, fast.',
      },
      {
        icon: <FaWineGlassAlt />,
        title: 'Find your new favorite',
        info:
          'Browse other users awesome creations and find your new favorite drink!',
      },
      {
        icon: <FaGrinBeam />,
        title: 'Sharing is caring',
        info: 'Best of all, you can share your ideas with people everywhere!',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title>Why Boozy?</Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
