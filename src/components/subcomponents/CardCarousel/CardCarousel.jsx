import React from 'react';

import './card-carousel.css';

import { Card } from 'react-bootstrap';

export default function CardCarousel({type, cards}) {
    const renderCards = () => cards.map((card, i) => (
        <div className='custom-card me-3' key={card.Title + i}>
            <Card>
                <Card>
                    <Card.Img variant="top" src={card.ImgUrl} className='card-img' />
                    <Card.Body>
                        <Card.Title>{card.Title}</Card.Title>
                        <Card.Text>
                            {renderStars(card.Rating, card.Title)}
                            <br/>
                            {card.Description}
                        </Card.Text>
                    </Card.Body>
                </Card>
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


    return (
        <>
            <i className="fa-solid fa-chevron-left" id="left-arrow" onClick={(e) => handleLeftArrowClick(e)}></i>
            <div className='mb-3 cards-container' id={'cards-container' + type}>
                {renderCards()}
            </div>
            <i className="fa-solid fa-chevron-right" id="right-arrow" onClick={(e) => handleRightArrowClick(e)}></i>
        </>
    )
}
