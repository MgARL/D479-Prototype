import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

//assets
import './planning.css';
import { lodging } from '../otherFiles/cards';

import CardCarousel from '../subcomponents/CardCarousel/CardCarousel';

function Planning() {
  return (
    <>
      <Container>
        <div id='lodging' className='mt-3'>
          <Row>
            <Col lg={12}>
              <h3>Lodging</h3>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. Cubilia blandit at habitasse fermentum ad.
                Feugiat conubia interdum erat; suspendisse convallis ut nam. Sit curae dis laoreet euismod amet orci. Phasellus laoreet praesent massa ad aenean metus sed lobortis.
                Potenti interdum penatibus tincidunt pellentesque potenti.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardCarousel cards={lodging} type="res" />
            </Col>
          </Row>
        </div>
      </Container>
      <div className='bg-primary-darker text-light'>
        <Container id='Entertainment' className='pt-3' >
          <Row>
            <Col lg={12} className='text-center'>
              <h3>Entertainment</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className='border-right mb-3'>
              <h5 className='text-center'>Air Transportation</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. </p>
              <p>Airlines that travel to Taniti Island:</p>
              <ul>
                <li>American Airlines</li>
                <li>Delta</li>
                <li>Spirit</li>
              </ul>
              <p>
                Visit the local Airport website by clicking 
                <a href="https://www.tahiti-aeroport.pf/"  target="_blank" rel="noopener noreferrer"> <u><em>here</em></u></a>.
              </p>
            </Col>
            <Col lg={4} className='border-right mb-3 ps-4'>
              <h5 className='text-center'>Ground Transportation</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. </p>

              <h5>Public Transportation</h5>
              <p>Buses Routes:</p>
              <ul>
                <li>Route A</li>
                <li>Route B</li>
                <li>Route C</li>
              </ul>
              <p>
                Click <a href="https://www.tahiti-aeroport.pf/"  target="_blank" rel="noopener noreferrer"> <u><em>here</em></u></a> {' '}
                for more information about the routes and schedules and other public transport offered by Taniti Island.
              </p>

              <h5>Private Transportation</h5>
              <p>Buses Routes:</p>
              <ul>
                <li>Taxis: Lorem ipsum odor amet, consectetuer.</li>
                <li>Private Bus Rental: Lorem ipsum odor amet, consectetuer adipiscing.</li>
                <li>Car Rentals: Lorem ipsum odor amet, consectetuer adipiscing.</li>
              </ul>
            </Col>
            <Col lg={4} className='mb-3 ps-4'>
              <h5 className='text-center'>Sea Transportation</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. </p>

              <h5>Cruises</h5>
              <p>Cruises that stop at to Taniti Island:</p>
              <ul>
                <li><a href="https://www.carnival.com/" target="_blank" rel="noopener noreferrer"><em><u>Carnival Cruise Line</u></em></a></li>
                <li><a href="https://www.royalcaribbean.com/" target="_blank" rel="noopener noreferrer"><em><u>Royal Caribbean International</u></em></a></li>
                <li><a href="https://www.ncl.com/" target="_blank" rel="noopener noreferrer"><em><u>Norwegian Cruise Line</u></em></a></li>
              </ul>
              <p>
                Please click on each cruise line to visit their corresponding websites.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Planning