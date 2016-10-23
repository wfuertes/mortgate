import React from 'react';
import './Chat.css';

export default class ChatBox extends React.Component {
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
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="bot">blw ble ble ble bla :bot</li>
                            <li className="bot">bla bla bla bla bla :bot</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="bot">blw ble ble ble bla :bot</li>
                            <li className="bot">bla bla bla bla bla :bot</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="bot">blw ble ble ble bla :bot</li>
                            <li className="bot">bla bla bla bla bla :bot</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="bot">blw ble ble ble bla :bot</li>
                            <li className="bot">bla bla bla bla bla :bot</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="me">me: bla bla bla bla bla</li>
                            <li className="bot">blw ble ble ble bla :bot</li>
                            <li className="bot">bla bla bla bla bla :bot</li>
                            <li className="me">me: bla bla bla bla bla :bot</li>
                            <li className="me">me: bla bla bla bla bla :bot</li>
                            <li className="bot">blw ble ble ble bla :bot</li>
                        </ul>
                    </div>
                    <div className="message-input">
                        <input type="text" id="name" value="" placeholder="Type your message here" />
                    </div>
                </div>
            </div>
        );
    }
}