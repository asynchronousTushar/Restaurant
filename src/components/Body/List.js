import React, { Component } from 'react';
import DISHES from '../../data/Products';
import Item from './Item';
import DishesList from './DishesList';
import Comments from './Comments';
import CommentsData from '../../data/CommentsData';
import { Modal, ModalBody, ModalFooter, Button} from 'reactstrap';

class List extends Component {
    state={
        Dishes: DISHES,
        selectedItem: null,
        commentsData: null,
        modelToggler: false
    }

    listItem = (item) => {
        this.setState({
            selectedItem: item,
            commentsData: CommentsData,
            modelToggler: !this.state.modelToggler
        });
    }

    modelTogglerHandeler = () => {
        this.setState({
            modelToggler: !this.state.modelToggler
        });
    }



    render() {
        const dishesList = this.state.Dishes.map(item => {
            return (
               <DishesList dishesItem={item} key={item.id} listItem={this.listItem.bind(this, item)}/>
            )
        });

        let Dishesdetail = null;

        if (this.state.selectedItem !=null) {
            Dishesdetail = <ul className="row">
                    <Item item={this.state.selectedItem} />
                </ul>
        }

        let commentsFinder = null;

        if (this.state.commentsData != null && this.state.selectedItem != null ) {
            commentsFinder = this.state.commentsData.map( item => {
                
                if (item.dishId === this.state.selectedItem.id) {
                    return (<Comments comment={item} key={item.id}/>)
                }
                
                return null;
            });
        }


        return (
            <div>
            <div className="row mt-4">
                <div className="List col-3">
                    {dishesList}
                </div>
                </div>
                <div className="row">
                    <Modal isOpen={this.state.modelToggler} size="lg" contentClassName="my-modal-style">
                        <ModalBody>
                            {Dishesdetail}
                            <ul>{commentsFinder}</ul>
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

export default List;