import React, {Component} from 'react';

class ResultSuggestionItem extends Component {
  approveSuggestion(){
    this.props.approveSuggestion(this.props.item)
  }
  render() {
    const {suggestText} = this.props.item;
    return (
      <div className="all-suggestion-item">

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