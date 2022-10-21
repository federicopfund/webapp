import React, { Component } from 'react';

export class Service extends Component {
    static displayName = Service.name;

    render() {
        return (
            <div>
                <h1>Hello, Service!</h1>
                <p>Bienvenido ah About, built with:</p>

                <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            </div>
        );
    }
}
