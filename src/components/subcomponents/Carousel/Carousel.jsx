import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

//Images
import beachLanscape from '../../../assets/images/landscape-beach.jpg';
import manFishing from '../../../assets/images/fishing-man.jpg';
import rainForest from '../../../assets/images/suspension-bridge.jpg';
import volcano from '../../../assets/images/volcano.jpg';


function CarouselModule() {

  const items = [{
    image: beachLanscape,
    alt: 'Beach landscape photograph',
    capTitle: 'Taniti Beach',
    capText: 'Taniti Island has many beautiful and outstanding beaches for you to visit.'
  },{
    image: manFishing,
    alt: 'Fisherman photograph',
    capTitle: 'Taniti Local Fish',
    capText: 'In Taniti Island you can experience and taste our local dishes with our freshest daily caught seafood!'
  },{
    image: rainForest,
    alt: 'Suspension Bridge photograph',
    capTitle: "Taniti's Lush Rain Forests",
    capText: 'The island offers many nature paths, hiking trails and astonishing panorama for those that love the outdoors and hiking.'
  },{
    image: volcano,
    alt: 'Active volcano photograph',
    capTitle: 'Taniti Island Active Volcano',
    capText: 'Anyone that visit the island cannot leave without feeling the thrill of visiting our local volcano tour. A truly once in a lifetime experience.'
  }];

  const renderItems = () => items.map((i, x) => {
      return (<Carousel.Item key={'item' + x}>
        <img
          className="img-dimension"
          src={i.image}
          alt={i.alt}
        />
        <Carousel.Caption as={'div'} className='bg-caption'>
          <h5>{i.capTitle}</h5>
          <p>{i.capText}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )});
  return (
    <Carousel fade data-bs-theme="dark">
      {renderItems()}
    </Carousel>
  )
}

export default CarouselModule