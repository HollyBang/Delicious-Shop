import React, { Component } from 'react';
import ComponentA from "./component/componentA"
import ComponentB from "./component/componentB"

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    
  
    callApi = async () => {
      const response = await fetch('/api');
      const body = await response.json();
  
      if (response.status !== 200) throw Error(body.message);
  
      return body;
    };
      }
    render() {
        return (
            <div>
                <div className="heroku-test">Я ТЕБЕ ПОРВУ СКАТЫНА!!!</div>
        <ComponentA />
        <ComponentB />
            </div>
        )
    }
}
export default App;


