import React, { Component } from 'react';
import Item from './Item';
import DishesList from './DishesList';
import Comments from './Comments';
import CommentForm from './CommentForm';
import Loader from './Loader';
import { Modal, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchComments, fetchDishes } from '../../redux/actionCreator';

const mapstatetoprops = state => {
    return {
        Dishes: state.dishes,
        CommentsData: state.comments
    }
}

const mapdispatchtoprops = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => {
            dispatch(addComment(dishId, author, rating, comment))
        },
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComment: () => dispatch(fetchComments())
    }
}

class List extends Component {
    state = {
        selectedItem: null,
        modelToggler: false
    }

    listItem = (item) => {
        this.setState({
            selectedItem: item,
            modelToggler: !this.state.modelToggler
        });
    }

    modelTogglerHandeler = () => {
        this.setState({
            modelToggler: !this.state.modelToggler
        });
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComment();
    }
    
    render() {
        
        if (this.props.Dishes.isLoading) {
            return (
                <div>
                    <Loader />
                </div>
            );
        } else if (this.props.Dishes.errMessage !== null) {
            return (
                <Alert color = "danger" >{ this.props.Dishes.errMessage }</Alert>
            );
        } else {
            const dishesList = this.props.Dishes.dishes.map(item => {
                return (
                    <DishesList  dishesItem={item} key={item.id} listItem={this.listItem.bind(this, item)} />
                );
            });

            let Dishesdetail = null;

            if (this.state.selectedItem != null) {
                Dishesdetail = <ul className="row text-center">
                    <Item item={this.state.selectedItem} />
                </ul>
            }

            let commentsFinder = null;

            if (this.props.CommentsData.isLoading) {
                commentsFinder = <Loader />;

            } else {
                
                if (this.state.selectedItem != null) {
                    commentsFinder = this.props.CommentsData.comments.map(item => {
    
                        if (item.dishId === this.state.selectedItem.id) {
                            return (
                                <Comments comment={item} key={item.id} />
                            );
                        }
    
                        return null;
                    });
                }
            }



            let commentFormDishesId = null;

            if (this.state.selectedItem) {
                commentFormDishesId = this.state.selectedItem.id;
            }

            return (
                <div className="List " >
                    <div className=" d-flex flex-wrap m-2 text-center">
                            {dishesList}
                    </div>
                    <div className="row" >
                        <Modal isOpen={this.state.modelToggler} size="lg" contentClassName="my-modal-style">
                            <ModalBody >
                                {Dishesdetail}
                                <ul>{commentsFinder}</ul>
                                <br />
                                <CommentForm dishId={commentFormDishesId} addComment={this.props.addComment} />
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.modelTogglerHandeler}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>

            );
        }
    }
}

export default connect(mapstatetoprops, mapdispatchtoprops)(List);