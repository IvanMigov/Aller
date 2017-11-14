import React, {Component} from 'react';

class UserSuggestionItem extends Component {
  constructor() {
    super();
    this.state = {
      suggestion: ''
    }
  }

  handleChange(evt) {
    this.setState({suggestion: evt.target.value.trim()});
  }
  sendChangesToParent(){
    this.props.sendChanges(this.props.text,this.state.suggestion)
  }
  render() {
    const {text} = this.props;
    return (
      <div className="all-item-wrapper">
        <div className="all-item-inner-wrapper">
          <span className="all-item-title">
            ORIGINAL TEXT
          </span>
          <p className="all-item-original">
            {text}
          </p>
          <span className="all-item-title">
            USERS VERSION
          </span>

          <textarea
            value={this.state.suggestion}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="all-button-container">
          <button
            onClick={this.sendChangesToParent.bind(this)}
          ><i></i>SEND CHANGES
          </button>
        </div>
      </div>
    );
  }
}
export default UserSuggestionItem;