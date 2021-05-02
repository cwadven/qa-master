import './../../assets/scss/component/CustomCard.scss';
import {useState} from 'react';
import {Card} from 'react-bootstrap';

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

    return(
        <div style={{ display: 'flex'}}>
            {mapToComponent(card)}
        </div>
    )
}

export default CustomCard;