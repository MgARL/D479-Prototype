import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

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
        <Container fluid className='primary-bg-color'>
            <Row className='justify-content-between'>
                <Col lg={2} className='text-center text-lg-start'>
                    <Row id="Branding">
                        <Col xs={12}>
                            <img src={logo} alt="Taniti Island Logo" width="250" height="100" />
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
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </Col>
                        <Col xs={2}>
                            <a href="https://www.facebook.com/search/top?q=taniti%20island" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </Col>
                        <Col xs={2}>
                            <a href="https://www.instagram.com/explore/search/keyword/?q=taniti%20island" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </Col>
                        <Col xs={2}>
                            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </Col>
                    </Row>
                    <Row id='other-links' className='mt-5 justify-content-center'>
                        <Col xs={3} lg={2} className='border-right'>
                            <a href="https://www.youtube.com/results?search_query=tahiti+island" target="_blank" rel="noopener noreferrer">
                                sitemap
                            </a>
                        </Col>
                        <Col xs={3} lg={2} className='border-right'>
                            <a href="https://www.google.com/search?q=accessibility+best+practices+ux&sca_esv=f207507d3efe929e&sca_upv=1&slgrf=ADLYWIJraB6KXliOJdfCBc4SRBqhUMAuAw%3A1727749673497&ei=KV77ZvOGHtLpwN4Pq5G48AE&oq=accessibility+best+practices+&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWFjY2Vzc2liaWxpdHkgYmVzdCBwcmFjdGljZXMgKgIIATIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgeGA8yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5Il0tQAFi3NnABeAGQAQCYAXygAbAMqgEEMTMuNbgBA8gBAPgBAZgCE6AC-gyoAhLCAgQQIxgnwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAhAQABiABBixAxhDGIMBGIoFwgIIEAAYgAQYsQPCAgcQIxgnGOoCwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAg4QLhiABBixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAcICChAAGIAEGEMYigXCAhAQLhiABBixAxhDGIMBGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICGRAuGIAEGLEDGNEDGEMYgwEYxwEYyQMYigXCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgIIEAAYgAQYkgPCAg4QLhiABBjHARiOBRivAcICBBAAGAPCAhEQLhiABBixAxiDARjHARivAcICDRAAGIAEGLEDGEMYigXCAhEQABiABBiRAhixAxiDARiKBZgDCboGBggBEAEYAZIHBDE0LjWgB-6eAQ&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">
                                Accessibility Statement
                            </a>
                        </Col>
                        <Col xs={3} lg={2} className='border-right'>
                            <a href="https://www.instagram.com/explore/search/keyword/?q=taniti%20island" target="_blank" rel="noopener noreferrer">
                                Terms & Conditions
                            </a>
                        </Col>
                        <Col xs={3} lg={2}>
                            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col lg={2} className='text-center text-light my-3'>
                    {newsletterSubmitted ? renderNewsLetterSignedUp() : renderNewsLetterForm()}
                </Col>
            </Row>
        </Container>
    )
}

export default Footer