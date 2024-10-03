import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';

//styles
import './footer.css';
import logo from '../../assets/images/logo_blue.png';

function Footer() {
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

    const handleNewsletter = (e) => {
        e.preventDefault();
        setNewsletterSubmitted(true);
    };

    const renderNewsLetterSignedUp = () => {
        return (
            <Alert variant='success' className='mt-lg-5'>
                Thank you for signing up!
            </Alert>
        );
    }

    const renderNewsLetterForm = () => {
        return (
            <Form onSubmit={(e) => handleNewsletter(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Signup for Newsletter</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email..." />
                </Form.Group>
                <Button variant="primary" type='submit'>Submit</Button>
            </Form>
        );
    }

    return (
        <div className='primary-bg-color'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={2} className='text-center text-lg-start mt-2'>
                        <Row id="Branding">
                            <Col xs={12}>
                                <Link to="/">
                                    <img src={logo} alt="Taniti Island Logo" width="250" height="100" />
                                </Link>
                            </Col>
                        </Row>
                        <Row id='copyright'>
                            <Col xs={12} className='ms-lg-5 copyright-text'>
                                <p>© 2024 Taniti Island Tourism Authority</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className='text-center my-3'>
                        <Row id="social-media" className='justify-content-around'>
                            <Col xs={2}>
                                <a href="https://www.youtube.com/results?search_query=tahiti+island" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </Col>
                            <Col xs={2}>
                                <a href="https://www.facebook.com/search/top?q=taniti%20island" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </Col>
                            <Col xs={2}>
                                <a href="https://www.instagram.com/explore/search/keyword/?q=taniti%20island" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </Col>
                            <Col xs={2}>
                                <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </Col>
                        </Row>
                        <Row id='other-links' className='mt-5 justify-content-center'>
                            <Col xs={3} lg={2} className='border-right'>
                                <Link to='/sitemap'>
                                    sitemap
                                </Link>
                            </Col>
                            <Col xs={3} className='border-right'>
                                <Link to='/privacy-and-more'>
                                    Accessibility Statement
                                </Link>
                            </Col>
                            <Col xs={3} lg={2} className='border-right'>
                                <Link to='/privacy-and-more'>
                                    Terms & Conditions
                                </Link>
                            </Col>
                            <Col xs={3} lg={2}>
                                <Link to='/privacy-and-more'>
                                    Privacy Policy
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} className='text-center text-light my-3'>
                        {newsletterSubmitted ? renderNewsLetterSignedUp() : renderNewsLetterForm()}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer