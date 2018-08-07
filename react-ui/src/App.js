import React, { Component } from 'react';
import ComponentA from "./component/componentA"
import ComponentB from "./component/componentB"

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
        <ComponentA />
        <ComponentB />
            </div>
        )
    }
}
export default App;


