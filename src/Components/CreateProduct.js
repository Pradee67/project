import React, { Component } from 'react'
import ProductService from '../Services/ProductService';

class CreateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            
            productname: '',
            brand: '',
            availablecount: '',
            price: '',
        }
        this.changePname = this.changePname.bind(this);
        this.changeBrand = this.changeBrand.bind(this);
        this.changeAvailablecount = this.changeAvailablecount.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({pname: product.productname,
                    brand: product.brand,
                    availablecount : product.availablecount,
                    price:product.price
                });
            });
        }        
    }
    saveOrUpdateProduct= (e) => {
        e.preventDefault();
        let product = {productname: this.state.productname, brand: this.state.brand, availablecount: this.state.availablecount,price:this.state.price};
        console.log('product=> ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
            ProductService.CreateProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changePname= (event) => {
        this.setState({productname: event.target.value});
    }

    changeBrand= (event) => {
        this.setState({brand: event.target.value});
    }

    changeAvailablecount= (event) => {
        this.setState({availablecount: event.target.value});
    }
    changePrice= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name </label>
                                            <input placeholder="Pname" name="pname" className="form-control" 
                                                value={this.state.productname} onChange={this.changePname}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Brand</label>
                                            <input placeholder="brand" name="brand" className="form-control" 
                                             value={this.state.brand} onChange={this.changeBrand}/>
                                             </div>
     
                                             <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                             </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProduct