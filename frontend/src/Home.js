import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router'

export default class HomeBox extends React.Component {
    constructor() {
        super();
        this.state = {name:'', email:''};
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.startChat = this.startChat.bind(this);
    }

    setName(event) {
        this.setState({ name: event.target.value });
    }

    setEmail(event) {
        this.setState({ email: event.target.value });
    }

    startChat(event) {
        event.preventDefault();

        let user = {
            name: this.state.name,
            email: this.state.email
        }; 

        $.ajax({
            method: 'POST',
            url: '/api/chats',
            headers: {
                "Content-Type" : "application/json"
            },
            data: JSON.stringify(user)
        }).done(function(response) {
            browserHistory.push('/chat');
        }).fail(function(response, status) {
            alert('erro dos bravos');
            console.log('passei aqui'); 
        });
    }

    render() {
        return (
            <div className=".child-content">
                <h2 className="content-head is-center">A new away to get your mortgage</h2>

                <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                    <form className="pure-form pure-form-stacked" method="post" onSubmit={this.startChat}>
                        <fieldset>
                            <input id="name" type="text" value={this.state.name} onChange={this.setName} placeholder="Name" required />
                            <input id="email" type="email" value={this.state.email} onChange={this.setEmail} placeholder="Email" required />
                            <button type="submit" className="pure-button">Start</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}