import React from 'react'
import sitemap from '../../assets/images/Sitemap.png'
import { Container, Row, Col } from 'react-bootstrap'

function Sitemap() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={9}>
          <img src={sitemap} alt="SiteMap of website" />
        </Col>
      </Row>
    </Container>
  )
}

export default Sitemap