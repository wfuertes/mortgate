import React from 'react';
import io from 'socket.io-client';
import './Chat.css';

export default class ChatBox extends React.Component {
    constructor() {
        super();
        this._key = 0;
        this.nextKey = this.nextKey.bind(this);
        this.state = { history: [], meMsg : ''};
        this.setMeMsg = this.setMeMsg.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        // initializing socket connection!
        this._socket = io();
    }

    nextKey() {
        this._key += 1;
        return this._key;
    }

    componentDidMount() {
        this._socket.on('server-to-client-message', msg => {
            console.log('______________Receiving message from socket');
            console.log(msg);
            this.setState({
                history: [].concat(this.state.history, { author: 'bot', content: msg, id: this.nextKey() })
            });
        });
    }

    setMeMsg(event) {
        this.setState({ meMsg: event.target.value });
    }

    sendMessage(event) {
        event.preventDefault();
        if (this.state.meMsg) {
            console.log('______________Sending message to server!' + this.state.meMsg);
            this._socket.emit('client-to-server-message', JSON.stringify({sender: localStorage.getItem('sender'), text : this.state.meMsg}));
            this.setState({
                history: [].concat(this.state.history, { author: 'me', content: this.state.meMsg, id: this.nextKey() }),
                meMsg: ''
            });
        }
    }

    render() {
        return (
            <div className="content">
                <h2 className="content-head is-center">MORTGATE super chat</h2>
                <div className="chat-content">
                    <div className="chat-header">
                        Mortgate chatbot
                    </div>
                    <div className="message-history">
                        <ul>
                            {
                                this.state.history.map(function (m) {
                                    return (<li key={m.id} className={m.author}><span>{m.author}</span>: {m.content}</li>);
                                })
                            }
                        </ul>
                    </div>
                    <div className="message-input">
                        <form className="pure-form pure-form-stacked" method="post" onSubmit={this.sendMessage}>
                            <input type="text" id="name" value={this.state.meMsg} onChange={this.setMeMsg} placeholder="Type your message here" />
                            <button className="pure-button" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}