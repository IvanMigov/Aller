import React from 'react';
import {connect} from 'react-redux';
import { Component } from 'react';
import Loader from './loader';
import  ResultItem from './result_item';
import * as actions from '../actions';

let showApproved = '';


class Results extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    showApproved = params.get('showApproved');
    this.props.fetchArticles(showApproved);
  }
  getItem(item, index){
    return (
      <ResultItem
        key= {index}
        item = {item}
      />
    )
  }
  getItems(){
    const items = this.props.items;
    if(items){
      return (
        items.map(this.getItem.bind(this))
      )
    } else{
      return <Loader/>
    }
  }

  render() {
    return (
      <div className="all-wrapper">
        {this.getItems()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.articles,
  };
}
Results = connect(mapStateToProps,actions)(Results);

export default Results