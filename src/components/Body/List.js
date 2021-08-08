import React, { Component } from 'react';
import DISHES from '../../data/Products';
import Item from './Item';
import DishesList from './DishesList';
import Comments from './Comments';
import CommentsData from '../../data/CommentsData';

class List extends Component {
    state={
        Dishes: DISHES,
        selectedItem: null,
        commentsData: null
    }

    listItem = (item) => {
        this.setState({
            selectedItem: item,
            commentsData: CommentsData
        })
    }


    render() {
        const dishesList = this.state.Dishes.map(item => {
            return (
               <DishesList dishesItem={item} key={item.id} listItem={this.listItem.bind(this, item)}/>
            )
        });

        let Dishesdetail = null;

        if (this.state.selectedItem !=null) {
            Dishesdetail = <Item item={this.state.selectedItem} />
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
            <div className="row mt-4">
                <div className="List col-3">
                    {dishesList}
                </div>
                {Dishesdetail}
                <div className="col-3 ">{commentsFinder}</div>
            </div>
        );
    }
}

export default List;