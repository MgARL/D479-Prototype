import React from 'react'
import sitemap from '../../assets/images/Sitemap.png'
import { Container, Row, Col } from 'react-bootstrap'

function Sitemap() {
  return (
    <Container className='fill-page'>
      <Row className='justify-content-center'>
        <Col xs={9} className='mt-5 pt-3'>
          <img src={sitemap} alt="SiteMap of website" />
        </Col>
      </Row>
    </Container>
  )
}

export default Sitemap