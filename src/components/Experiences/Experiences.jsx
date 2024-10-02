import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

//assets
import './experiences.css';
import { restaurants, entertainment } from '../otherFiles/cards';

import CardCarousel from '../subcomponents/CardCarousel/CardCarousel';

function Experiences() {
  return (
    <Container>
      <div id='restaurants'>
        <Row>
          <Col lg={12}>
            <h3>Restaurants</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. Cubilia blandit at habitasse fermentum ad.
                Feugiat conubia interdum erat; suspendisse convallis ut nam. Sit curae dis laoreet euismod amet orci. Phasellus laoreet praesent massa ad aenean metus sed lobortis.
                Potenti interdum penatibus tincidunt pellentesque potenti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CardCarousel cards={restaurants} type="res"/>
          </Col>
        </Row>
      </div>
      <div id='restaurants'>
        <Row>
          <Col lg={12}>
            <h3>Restaurants</h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. Cubilia blandit at habitasse fermentum ad.
                Feugiat conubia interdum erat; suspendisse convallis ut nam. Sit curae dis laoreet euismod amet orci. Phasellus laoreet praesent massa ad aenean metus sed lobortis.
                Potenti interdum penatibus tincidunt pellentesque potenti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CardCarousel cards={entertainment} type="ent"/>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Experiences