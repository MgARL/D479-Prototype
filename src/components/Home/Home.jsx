import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

//styles
import './home.css';


//Sub-components
import CarouselModule from '../subcomponents/Carousel/Carousel';

function Home() {
    const [ShowScrollArrow, setScrollArrow] = useState(true);

    const events = [{
        date: 'October 11, 2024:',
        event: 'Lorem ipsum odor from'
    }, {
        date: 'October 13, 2024:',
        event: 'Lorem ipsum odor from'
    },{
        date: 'October 17, 2024:',
        event: 'Lorem ipsum odor from'
    },{
        date: 'October 19, 2024:',
        event: 'Lorem ipsum odor from'
    },{
        date: 'October 22, 2024:',
        event: 'Lorem ipsum odor from'
    },{
        date: 'October 25, 2024:',
        event: 'Lorem ipsum odor from'
    },{
        date: 'October 29, 2024:',
        event: 'Lorem ipsum odor from'
    },{
        date: 'October 31, 2024:',
        event: 'Halloween Spooky Party'
    }]
    const renderEvent = () => events.map((e, i) => {
        return (
            <li key={i + 'event'} className='mt-2'>{e.date} {e.event} {i + 3} pm - {i + 4} pm</li>
        )
    });

    const handleScroll = (e) => {
        const element = e.target;
        if (element) {
            const { scrollTop, scrollHeight, clientHeight } = element;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            setScrollArrow(!isAtBottom); 
          }
    }
  return (
    <Container>
        <div className='d-flex justify-content-center my-3'>
            <h1>Taniti Island</h1>
        </div>
        
        <div className='carouselContainer'>
            <CarouselModule />
        </div>

        <Row className='my-5 justify-content-between'>
            <Col lg={8}>
                <Row>
                    <Col sm={12}>
                    <h3>The Ultimate Adventure Awaits</h3>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. Cubilia blandit at habitasse fermentum ad.
                        Feugiat conubia interdum erat; suspendisse convallis ut nam. Sit curae dis laoreet euismod amet orci. Phasellus laoreet praesent massa ad aenean metus sed lobortis.
                        Potenti interdum penatibus tincidunt pellentesque potenti.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <h4>Explore the Island</h4>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sit volutpat eleifend fames porttitor tortor. Cubilia blandit at habitasse fermentum ad.
                        Feugiat conubia interdum erat; suspendisse convallis ut nam. Sit curae dis laoreet euismod amet orci. Phasellus laoreet praesent massa ad aenean metus sed lobortis.
                        Potenti interdum penatibus tincidunt pellentesque potenti.
                    </p>
                    </Col>
                </Row>
            </Col>

            <Col onScroll={(e) => handleScroll(e)} lg={3} id='events-aside' className='primary-bg-color text-light pt-2 shadow'>
                <div>
                    <Row className='text-center'>
                        <h4>Upcoming events</h4>
                    </Row>
                    <ul>
                        {renderEvent()}
                    </ul>
                </div>
                <i className={ShowScrollArrow ? "fa-sharp-duotone fa-solid fa-chevron-down" : "fa-sharp-duotone fa-solid fa-chevron-down d-none"} id='events-more-arrow'></i>
            </Col>
        </Row>
    </Container>
  )
}

export default Home