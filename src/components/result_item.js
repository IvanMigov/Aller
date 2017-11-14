import React, {Component} from 'react';
import  ResultSuggestionItem from './result_suggestion_item';
import * as actions from '../actions';
import {connect} from 'react-redux';



class ResultItem extends Component {
  constructor() {
    super();
    this.state = {suggestion: ''}
  }
  getResultSuggestion(item, index){
    return (
      <ResultSuggestionItem
        key= {item._id}
        item = {item}
        articleId = {this.props.item._id}
        approveSuggestion = {this.props.approveSuggestion}
        showApproved = {this.props.showApproved}
      />
    )
  }
  approveSuggestion(){
    if(this.state.suggestion){
      const showApproved = this.props.showApproved;
      const articleId = this.props.item._id;
      this.props.approveSuggestion({showApproved,articleId, suggestion: {suggestText:this.state.suggestion}})
    }
  }
  changeSuggestion(evt) {
    this.setState({suggestion: evt.target.value});
  }
  removeArticle() {
    const showApproved = this.props.showApproved;
    const articleId = this.props.item._id;
    this.props.removeArticle({showApproved,articleId})
  }
  render() {
    const {originalText,suggestions} = this.props.item;
    return (
      <div className="all-result-item-wrapper">
        <button
          onClick={this.removeArticle.bind(this)}
          className="all-btn all-btn-delete"
        >Delete</button>
        <span className="all-result-item-title all-original-title">
            Original Text:
        </span>
        <p className="all-result-item-original">
          {originalText}
        </p>
        <span className="all-result-item-title">
            User Suggestions:
        </span>
        {suggestions.map(this.getResultSuggestion.bind(this))}
        <div className="all-suggestion-item all-input-suggestion">

          <input
            value={this.state.suggestion}
            onChange={this.changeSuggestion.bind(this)}
          />
          <button onClick={this.approveSuggestion.bind(this)}>
            Approve
          </button>
        </div>
      </div>
    );
  }
}
ResultItem = connect(null, actions)(ResultItem);

export default ResultItem;