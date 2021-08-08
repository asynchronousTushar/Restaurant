import React from 'react';
import { Card, CardBody } from 'reactstrap';
import dateFormat from 'dateformat';

const Comments = props => {
    return (
        <div style={{textAlign: "left"}}>
            <Card>
                <CardBody>
                    <h2>{props.comment.author}</h2>
                    <h5>Rating: {props.comment.rating}</h5>
                    <br/>
                    <p style={{fontWeight: "bold"}}>{props.comment.comment}</p>
                    <p>{ dateFormat(props.comment.date, 'fullDate')}</p>
                </CardBody>
            </Card>
        </div>
    );
}

export default Comments;