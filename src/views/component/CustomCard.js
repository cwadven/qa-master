import './../../assets/scss/component/CustomCard.scss';
import {Card} from 'react-bootstrap';

const CustomCard = ({array}) => {
    return (
        <Card className="Card">
            <Card.Header>{array.title}</Card.Header>
            <Card.Body>
            <Card.Title>{array.body}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;