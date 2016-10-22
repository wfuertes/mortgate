import React from 'react';
import './Chat.css';

export default class ChatBox extends React.Component {
    render() {
        return (
            <div className="content">
                <h2 className="content-head is-center">MORTGATE super chat</h2>
                <div className="chat-content">
                    <div className="bot-profile">
                        I'm the ChatBot!
                    </div>
                    <div className="message-history">
                        <ul>
                            <li className="you">2016/10/01 16:44 (you): bla bla bla bla bla</li>
                            <li className="bot">2016/10/01 16:45 (bot): blw ble ble ble bla</li>
                            <li className="bot">2016/10/01 16:46 (bot): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:47 (you): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:44 (you): bla bla bla bla bla</li>
                            <li className="bot">2016/10/01 16:45 (bot): blw ble ble ble bla</li>
                            <li className="bot">2016/10/01 16:46 (bot): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:47 (you): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:44 (you): bla bla bla bla bla</li>
                            <li className="bot">2016/10/01 16:45 (bot): blw ble ble ble bla</li>
                            <li className="bot">2016/10/01 16:46 (bot): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:47 (you): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:44 (you): bla bla bla bla bla</li>
                            <li className="bot">2016/10/01 16:45 (bot): blw ble ble ble bla</li>
                            <li className="bot">2016/10/01 16:46 (bot): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:47 (you): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:44 (you): bla bla bla bla bla</li>
                            <li className="bot">2016/10/01 16:45 (bot): blw ble ble ble bla</li>
                            <li className="bot">2016/10/01 16:46 (bot): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:47 (you): bla bla bla bla bla</li>
                            <li className="you">2016/10/01 16:44 (you): bla bla bla bla bla</li>
                            <li className="bot">2016/10/01 16:45 (bot): blw ble ble ble bla</li>
                        </ul>
                    </div>
                    <div className="message-input">
                        <textarea />
                    </div>
                </div>
            </div>
        );
    }
}