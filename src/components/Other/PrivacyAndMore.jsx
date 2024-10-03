import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function PrivacyAndMore() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={9}>
          Here Terms and Conditions, Accessibility Statement, and Privacy Policy will be displayed.
        </Col>
      </Row>
      <Row className='justify-content-center fill-page'>
        <Col xs={9}>
        Images acquired from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2359884" className='text-info'>Pixabay</a>.
        </Col>
      </Row>
    </Container>
  )
}

export default PrivacyAndMore