import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  sendMessage = (msg) => {
    let { messages } = this.state;
    messages = [...messages, msg];
    const robotMsg = answersData
      .filter((answer) => !answer.tags.includes('DEFAULT'))
      .find((answer) => answer.tags.some((tag) => msg.text.indexOf(tag) >= 0));
    if (robotMsg !== undefined) messages.push(robotMsg);
    this.setState({
      messages,
    });
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput sendMessage={this.sendMessage} />
      </main>
    );
  }
}

export default Chat;
