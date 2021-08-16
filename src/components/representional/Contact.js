import React from 'react';
import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "tel.",
            message: ""
        }
    }

    inputHandeler = event => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        this.setState({
            [name]: value
        });
    }

    submitHandeler = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "center" }}>
                    <div className="col-12">
                        <h3>Send us your Feedback </h3>
                    </div>
                    <div className="col-12 col-lg-8 mx-auto mt-4" >
                        <Form onSubmit={event => this.submitHandeler(event)} >
                            <FormGroup row>
                                <Label htmlFor="firstname" md={3} >First Name : </Label>
                                <Col md={9} >
                                    <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={event => this.inputHandeler(event)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={3} >Last Name : </Label>
                                <Col md={9} >
                                    <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={event => this.inputHandeler(event)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={3} > Mobile : </Label>
                                <Col md={9} >
                                    <Input type="tel" name="telnum" placeholder="Mobile" value={this.state.telnum} onChange={event => this.inputHandeler(event)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={3} >Email : </Label>
                                <Col md={9} >
                                    <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={event => this.inputHandeler(event)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 5, offset: 3 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" value={this.state.agree} onChange={event => this.inputHandeler(event)} /> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={event => this.inputHandeler(event)} >
                                        <option>Mobile</option>
                                        <option>Email</option>

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={3} >Your Feedback :</Label>
                                <Col md={9} >
                                    <Input type="textarea" name="message" value={this.state.message} rows="12" onChange={event => this.inputHandeler(event)} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 9, offset: 3 }}>
                                    <Button type="submit" color="primary" >Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;