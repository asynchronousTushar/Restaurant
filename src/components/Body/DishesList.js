import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const DishesList = (props) => {

    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <Card color="light" className="text-dark my-3 w-100 shadow-lg rounded">
                <CardBody>
                    <CardImg src={props.dishesItem.image} style={{ height: "200px" }} />
                    <CardTitle style={{ cursor: "pointer", fontWeight: "bold", display: "inline-block" }} onClick={props.listItem} >{props.dishesItem.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishesList;