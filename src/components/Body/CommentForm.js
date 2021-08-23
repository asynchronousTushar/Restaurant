import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';

class CommentForm extends Component {
    state = {
        author: "",
        rating: "",
        comment: ""
    }

    onChangeHandeler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitHandeler = event => {
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment);
        this.setState({
            author: "",
            rating: "",
            comment: ""
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={event => this.onSubmitHandeler(event)}>

                    <Input type="text" name="author" placeholder="Your Name" value={this.state.author} onChange={event => this.onChangeHandeler(event)} required />
                    <br />
                    <Input type="select" name="rating" value={this.state.rating} onChange={event => this.onChangeHandeler(event)}  >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="textarea" name="comment" placeholder="Your Comment" value={this.state.comment} onChange={event => this.onChangeHandeler(event)} required />
                    <br />
                    <Button type="submit" >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CommentForm;