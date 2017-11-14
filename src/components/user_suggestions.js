import React from 'react';
import {connect} from 'react-redux';
import { Component } from 'react';
import * as actions from '../actions';
import Loader from './loader';
import  UserSuggestionItem from './user_suggestion_item';
let articleURL = '';


class UserSuggestions extends Component {
  componentWillMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    articleURL = params.get('articleURL');
    this.props.fetchParagraphs(articleURL);
  }
  sendChanges(originalText,suggestText){
    if(suggestText){
      this.props.saveSuggestion({
        uri: articleURL,
        originalText,
        suggestText
      });
    }
  }
  getItem(item, index){
    return (
      <UserSuggestionItem
        key= {index}
        index = {index}
        text = {item}
        sendChanges = {this.sendChanges.bind(this)}
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
    title: state.paragraphs && state.paragraphs.title,
    items: state.paragraphs && state.paragraphs.paragraphs,
  };
}
UserSuggestions = connect(
  mapStateToProps,
  actions
)(UserSuggestions);

export default UserSuggestions