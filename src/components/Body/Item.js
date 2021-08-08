import React from "react";
import { Card, CardTitle, CardBody, CardImg, CardText } from "reactstrap";



const Item = props => {
    return (
        <div className="col-6 mt-1" >
            <Card>
                <CardImg top src={props.item.image} alt={props.item.name} style={{width: "auto", height: "400px"}}></CardImg>
                <CardBody style={{textAlign: "left"}} >
                    <CardTitle>
                        <h2>{props.item.name}</h2>
                    </CardTitle>
                    <CardText style={{ height: "100px"}}>{props.item.description}</CardText>
                    <h3>Price: { props.item.price} </h3>
                </CardBody>
            </Card>
        </div>
    );
}

export default Item;