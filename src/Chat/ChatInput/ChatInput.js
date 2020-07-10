import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSendClick = () => {
    this.props.sendMessage({
      role: ROLE.CUSTOMER,
      text: this.state.inputValue,
    });
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleSendClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
