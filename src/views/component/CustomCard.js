import './../../assets/scss/component/CustomCard.scss';
import {useState} from 'react';
import {Card} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomCard = ({array}) => {
    const [card, setCard] = useState(array);

    const mapToComponent = (data) => {
        return data.map((elem, idx) => {
            return (
                <Card className="Card" key={idx}>
                    <Card.Header>{elem.title}</Card.Header>
                    <Card.Body>
                    <Card.Title>{elem.body}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            );
        });
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return(
        <Slider slidesToShow={5} slidesToScroll={5} initialSlide={0}>
            {mapToComponent(card)}
        </Slider>
    )
}

export default CustomCard;