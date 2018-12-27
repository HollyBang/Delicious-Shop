import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import ComponentA from "../component/componentA"
// import ComponentB from "../component/componentB"
// import ImgUpload from "../component/ImgUpload"
import StorePage from "../containers/storePage/storePage";
import StartPage from "../containers/startPage/startPage";
import DeliveryPage from "../containers/deliveryPage/deliveryPage";
import ContactUsPage from "../containers/contactUsPage/contactUs";
import FullProductItem from '../component/FullProductItem/FullProductItem.jsx';
import Navbar from "../layouts/navbar/nav";

class App extends Component {
    constructor() {
        super();
        this.state = {
            myData: {},
            flag: false
        }
    }
    render() {
        return (
            <div className="main-app__wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route exact path="/store" component={StorePage} />
                    <Route exact path="/delivery" component={DeliveryPage} />
                    <Route exact path="/contact" component={ContactUsPage} />
                    <Route exact path="/:productId" component={FullProductItem} />
                </Switch>
            </div>
        )
    }
}
export default App;


