import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import produkt from "../images/persianrug.png/";
import produkt_image from "../images/ispartaHali.jpeg";


const products = [
    {
      id: 1,
      name: "Produkt 1",
      price: "10.99",
      image: "https://via.placeholder.com/350/800",
      
    },
    {
      id: 2,
      name: "Produkt 2",
      price: "15.99",
      image: "https://via.placeholder.com/350/800",

    },
    {
      id: 3,
      name: "Produkt 3",
      price: "20.99",
      image: "https://via.placeholder.com/350/800",
    },
    {
      id: 4,
      name: "Produkt 4",
      price: "12.99",
      image: "https://via.placeholder.com/350/12",
    },
    {
      id: 5,
      name: "Produkt 5",
      price: "8.99",
      image: "https://via.placeholder.com/350/23",
    },
    {
      id: 6,
      name: "Produkt 6",
      price: "24.99",
      image: "https://via.placeholder.com/350/700",
    },
  ];

  function TurkishProducts(params) {
    
    return (
        <div class="content3">
            <div className="background-im">
                <div class="content-inner3">
                  <div className="header">
                    <div className="header-textcontainer">
                      <h1>Turkish Rugs</h1>
                      <p>Experience the beauty and durability of handmade Turkish rugs. Each rug is a unique masterpiece crafted using traditional techniques passed down for generations. From bold geometric patterns to delicate floral motifs, Turkish rugs are renowned for their intricate designs and exceptional craftsmanship.</p>
                    </div>
                    
                  </div>
                        <div className="product-list">
                            {products.slice(0,6).map((product) => (
                            <div className="product-card">
                              <div className="product" key={product.id}>
                              <div className="image-container">
                                <img src={product.image} alt={product.name} />
                              </div>
                              <div className="text-container">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <Link to="/productpage"><button>Look</button></Link>
                              </div>
                               
                            </div>
                            </div>
                            ))}                   
                        </div>
                </div>
            </div>
        </div>
    
    )
  }

  export default TurkishProducts;


