import React from 'react';

export default class HomeBox extends React.Component {
    render() {
        return (
            <div className=".child-content">
                <h2 className="content-head is-center">A new away to get your mortgage</h2>

                <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <input id="name" type="text" placeholder="Name" />
                            <input id="email" type="email" placeholder="Email" />
                            <button type="submit" className="pure-button">Start</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}