import React from "react";
import { Card, CardTitle, CardBody, CardImg, CardText } from "reactstrap";



const Item = props => {
    return (
        <li>
            <Card>
                <CardImg top src={props.item.image} alt={props.item.name} ></CardImg>
                <CardBody style={{textAlign: "left"}} >
                    <CardTitle>
                        <h2>{props.item.name}</h2>
                    </CardTitle>
                    <br />
                    <CardText >{props.item.description}</CardText>
                    <h3>Price: { props.item.price} </h3>
                </CardBody>
            </Card>
        </li>
    );
}

export default Item;