import React from 'react';
import { Button, FormGroup, Label, Col, Alert } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { serverUrl } from '../../redux/serverURL';

const mapDispatchToprops = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'));
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);

class Contact extends React.Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }

    submitHandeler = values => {
        axios.post(serverUrl + "feedback", values)
            .then(Response => Response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success"
                    });
                

                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 8000);
                }
            })
            .catch(error => {
                this.setState({
                    alertText: "Submit Failed",
                    alertShow: true,
                    alertType: "danger"
                });

                setTimeout(() => {
                    this.setState({
                        alertShow: false
                    })
                }, 8000);
            })
        this.props.resetFeedbackForm();
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
                    <Alert isOpen= {this.state.alertShow} color={this.state.alertType} >{this.state.alertText}</Alert>
                        <Form model="feedback" onSubmit={values => this.submitHandeler(values)} >
                            <FormGroup row>
                                <Label htmlFor="firstname" md={3} >First Name : </Label>
                                <Col md={9} >
                                    <Control.text model=".firstname" name="firstname" placeholder="First Name" className="form-control" validators={{
                                        required
                                    }} />
                                    <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                        required: 'Required'
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={3} >Last Name : </Label>
                                <Col md={9} >
                                    <Control.text model=".lastname" name="lastname" placeholder="Last Name" className="form-control" validators={{
                                        required
                                    }} />
                                    <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                        required: 'Required'
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={3} > Mobile : </Label>
                                <Col md={9} >
                                    <Control.text model=".telnum" name="telnum" placeholder="Mobile" className="form-control" validators={{
                                        required,
                                        isNumber
                                    }} />
                                    <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                        required: 'Required ',
                                        isNumber: "Please insert number."
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={3} >Email : </Label>
                                <Col md={9} >
                                    <Control.text model=".email" name="email" placeholder="Email" className="form-control" validators={{
                                        required,
                                        validEmail
                                    }} />
                                    <Errors className="text-danger" model=".email" show="touched" messages={{
                                        required: 'Required ',
                                        validEmail: "Please insert Valid email."
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 5, offset: 3 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" /> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Mobile</option>
                                        <option>Email</option>

                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={3} >Your Feedback :</Label>
                                <Col md={9} >
                                    <Control.textarea model=".message" name="message" rows="12" className="form-control" validators={{
                                        required
                                    }} />
                                    <Errors className="text-danger" model=".message" show="touched" messages={{
                                        required: 'Required'
                                    }} />
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

export default connect(null, mapDispatchToprops)(Contact);