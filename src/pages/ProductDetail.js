import React, { Component } from 'react'
import {
  withRouter
} from "react-router-dom";

class ProductDetail extends Component {

    componentDidMount(){
        setTimeout(()=> {
            this.props.history.push("/");
        },2000)
    }
    render() {
        console.log(this.props)
        return (

        <div>Product Detail ID:  </div>
        )
    }
}

export default withRouter(ProductDetail)