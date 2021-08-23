import React, { Component } from 'react';
import Item from './Item';
import DishesList from './DishesList';
import Comments from './Comments';
import CommentForm from './CommentForm';
import Loader from './Loader';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../redux/actionCreator';

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
        fetchDishes: () => dispatch(fetchDishes())
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
 
    }

    render() {
        console.log(this.props.Dishes.isLoading)
        
        if (this.props.Dishes.isLoading) {
            return (
                <div>
                    <Loader />
                </div>
            );
        } else {
            const dishesList = this.props.Dishes.dishes.map(item => {
                return (
                    <DishesList dishesItem={item} key={item.id} listItem={this.listItem.bind(this, item)} />
                );
            });

            let Dishesdetail = null;

            if (this.state.selectedItem != null) {
                Dishesdetail = <ul className="row">
                    <Item item={this.state.selectedItem} />
                </ul>
            }

            let commentsFinder = null;

            if (this.state.selectedItem != null) {
                commentsFinder = this.props.CommentsData.map(item => {

                    if (item.dishId === this.state.selectedItem.id) {
                        return (<Comments comment={item} key={item.id} />)
                    }

                    return null;
                });
            }

            let commentFormDishesId = null;

            if (this.state.selectedItem) {
                commentFormDishesId = this.state.selectedItem.id;
            }

            return (
                <div className="List" >
                    <div className="row mt-4 ">
                        <div className="List col-3">
                            {dishesList}
                        </div>
                    </div>
                    <div className="row" >
                        <Modal isOpen={this.state.modelToggler} size="lg" contentClassName="my-modal-style">
                            <ModalBody>
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