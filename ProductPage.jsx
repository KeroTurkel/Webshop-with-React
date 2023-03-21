import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/ProductPage.css";


function ProductPage(props){

    
    const { selectedProduct} = props
  
    return (
        <div class="content2">
            <div class="content-inner2">
                <div className="card2">
                    <div className="imageContainer2">
                        <img src={selectedProduct ? selectedProduct.image : 'No product selected'} width='100%' style={{ borderRadius: "17px" }}/>
                    </div>
                    <div className="textContainer2">
                        <h2>{selectedProduct ? selectedProduct.title : 'No product selected'}</h2>
                        <div>{selectedProduct ? selectedProduct.price : 'No product selected'}</div>
                        <div>{selectedProduct ? selectedProduct.description : 'No product selected'}</div>
                        <p>
                            <Link to="/login">
                                <button>Buy</button>
                            </Link>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductPage;

