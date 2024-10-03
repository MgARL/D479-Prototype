import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { questions } from '../otherFiles/FAQuestions';

function FAQ() {
  const renderAccordion = () => questions.map((q, i) => (
    <Accordion defaultActiveKey="0" key={i}>
      <Accordion.Item eventKey={i}>
        <Accordion.Header>{q.question}</Accordion.Header>
        <Accordion.Body>
          {q.answer}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));

  return (
    <Container>
      <Row className='mt-3'>
          <Col xs={12}>
            <h2>Frequently Asked Questions</h2>
          </Col>
      </Row>
      <Row className='mt-3 mb-5'>
        <Col xs={12}>
          {renderAccordion()}
        </Col>
      </Row>
    </Container>
  )
}

export default FAQ