import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tushar </span>
            from <span className="purple"> Shimla, Himachal Pradesh.</span>
            <br /> I am a Second Year student pursuing B.E.
            in CSE from Jaypee University of Information Technology, Waknaghat.
            <br />
            Additionally, I am enthusiastic about Machine Learning.
            <br />
            <br />
            Some of my contributions are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href="https://github.com/mkr-29/robotrix">Robotrix</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href="https://github.com/Tushar4059x/SAHYOG">Sahyog</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href="https://github.com/ieee-juit/megadrone">megadrone</a>
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
