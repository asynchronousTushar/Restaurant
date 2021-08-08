import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const DishesList = (props) => {

    return (
        <Card color="dark" className="text-light  mt-1">
            <CardBody>
                <CardTitle style={{cursor: "pointer", fontWeight: "bold", display: "inline-block"}} onClick={ props.listItem } >{ props.dishesItem.name }</CardTitle>
            </CardBody>
        </Card>
    );
}

export default DishesList;