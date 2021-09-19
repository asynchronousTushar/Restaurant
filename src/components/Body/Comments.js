import React from 'react';
import { Card, CardBody } from 'reactstrap';
import dateFormat from 'dateformat';

const Comments = props => {
        return (
            <li className="mt-3">
                <Card>
                    <CardBody>
                        <h2>{props.comment.author}</h2>
                        <br />
                        <h5>Rating: {props.comment.rating}</h5>
                        <br />
                        <p style={{ fontWeight: "bold" }}>{props.comment.comment}</p>
                        <p style={{ fontSize: "12px" }}>{dateFormat(props.comment.date, 'fullDate')}</p>
                    </CardBody>
                </Card>
            </li>
         );
}

export default Comments;