import React, { useState } from 'react';

import './card-carousel.css';

import { Card } from 'react-bootstrap';

export default function CardCarousel({ type, cards }) {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);


    const renderCards = () => cards.map((card, i) => (
        <div className='custom-card me-3' key={card.Title + i}>
            <Card>
                <Card.Img variant="top" src={card.ImgUrl} className='card-img' />
                <Card.Body>
                    <Card.Title>{card.Title}</Card.Title>
                    <Card.Text>
                        {renderStars(card.Rating, card.Title)}
                        <br />
                        {card.Description}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    ));

    const renderStars = (rating, title) => {
        const stars = []
        for (let index = 1; index <= rating; index++) {
            stars.push(index);
        }

        return stars.map(s => (
            <i key={title + rating + s} className="fa-solid fa-star"></i>
        ));
    }

    const handleLeftArrowClick = (e) => {
        const container = document.getElementById('cards-container' + type);
        container.scrollLeft -= 250;
    };

    const handleRightArrowClick = (e) => {
        const container = document.getElementById('cards-container' + type);
        container.scrollLeft += 250;
    };

    //on scroll event
    const handleScroll = (e) => {
        const element = e.target;
        if (element) {
            const { scrollLeft, scrollWidth, clientWidth } = element;
            const offset = 50;
            const isAtEnd = scrollLeft + clientWidth + offset >= scrollWidth;
            const isAtStart = scrollLeft  <= offset;
            setShowLeftArrow(!isAtStart);
            setShowRightArrow(!isAtEnd);
          }

    }

    return (
        <>
            <i className={ showLeftArrow ? "fa-solid fa-chevron-left left-arrow" : "fa-solid fa-chevron-left left-arrow hide"} id={"left-arrow" + type} onClick={(e) => handleLeftArrowClick(e)}></i>
            <div className='mb-3 cards-container' id={'cards-container' + type} onScroll={(e) => handleScroll(e)}>
                {renderCards()}
            </div>
            <i className={showRightArrow ? "fa-solid fa-chevron-right right-arrow" : "fa-solid fa-chevron-right right-arrow hide"} id={"right-arrow" + type} onClick={(e) => handleRightArrowClick(e)}></i>
        </>
    )
}
