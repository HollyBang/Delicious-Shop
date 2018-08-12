import React, { Component } from 'react';
import ComponentA from "./component/componentA"
import ComponentB from "./component/componentB"

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            myData: {},
            flag: false
        }
    }


    componentDidMount() {
        fetch('/api')
          .then(response => {
            console.log(response);
            return response.json();
          })
          .then((data) => { 
            console.log(data); 
            this.setState({
                myData: data
            });
          });
    }
    render() {
        let testData = (
            <div>
            <div>{this.state.myData.test}</div>
            <div>{this.state.myData.test2}</div>
            <div>{this.state.myData.test3}</div>
            </div>
        );
        let test = this.state.flag ? null : testData;

        return (
            <div>
                <div className="heroku-test">Я ТЕБЕ ПОРВУ СКАТЫНА!!!</div>
            {test}
        <ComponentA />
        <ComponentB />
            </div>
        )
    }
}
export default App;


