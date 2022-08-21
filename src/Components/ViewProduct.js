import React, { Component } from 'react'
import ProductService from '../Services/ProductService'

class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
    ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.product.productname }</div>
                        </div>
                        <div className = "row">
                            <label> Brand: </label>
                            <div> { this.state.product.brand }</div>
                        </div>
                        <div className = "row">
                            <label> Availablecount: </label>
                            <div> { this.state.product.availablecount }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.product.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProduct