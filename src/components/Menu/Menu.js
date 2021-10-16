import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import './Menu.css'

const Menu = (props) => {
    const{id, image, name, category, price, description} = props.curEle;

    return (
        <div>
            <CardGroup>
                <Card className="card-details">
                    <Card.Img variant="top" className="card-image" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {category}
                        </Card.Text>
                        <h4>Price: ${price}</h4>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Add To Cart</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Menu
