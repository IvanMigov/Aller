import React, {Component} from 'react';

class ResultSuggestionItem extends Component {
  approveSuggestion(){
    const{articleId,item,showApproved} = this.props;
    this.props.approveSuggestion({showApproved,articleId, suggestion: item})
  }
  render() {
    const {suggestText,approved} = this.props.item;
    return (
      <div className={approved ? "all-suggestion-item all-approved" : "all-suggestion-item"}>

        <p className="all-item-suggestion">
          {suggestText}
        </p>
        <button onClick={this.approveSuggestion.bind(this)}>
          Approve
        </button>
      </div>
    );
  }
}
export default ResultSuggestionItem;