import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Startseite.css";
import image from "../images/halistart.jpg";
import produkt_1 from "../images/ispartaHali.jpeg";
import produkt_2 from "../images/persianrug.png";



function Startseite({setSelectedProduct}) {

    

    const handleViewProduct = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div class="content">
            <div class="content-inner">

                <section name="section1" id="section1">
                    <div className="container1">
                        <div className="textContainer">
                            
                            <div>
                                <h1>Handmade Rugs</h1>
                                <p>Transform your home into a cozy oasis with our collection of handmade rugs. </p>
                            </div>
                            
                        </div>

                        <div className="imageContainer">
                            <div className="image">
                                <img src={image} width="100%" style={{ borderRadius: "2px" }} />
                            </div>
                        </div>
                    </div>
                </section>

                <section name="section2" id="section2">
                    <div className="container2">
                        <div className="card">
                            <img className="productImage" src={produkt_1} width='100%' style={{ borderRadius: "17px" }}/>
                            <h2>Turkish rug</h2>
                            <p>Ut  cillum dolore eu fugiat nulla pariatur. Excepfficia deserunt mollit anim id est laborum.</p>
                            <p>
                            <Link to={{ pathname: "/productpage", state: { selectedProduct: { image: produkt_1, title: "Turkish rug", price: "100$", description: " Turkish rug patterns have precise, stylized geometric or floral designs, with bright, sharp, contrasting colours. " } } }}>
                                <button onClick={() => handleViewProduct({ image: produkt_1, title: "Turkish rug", price: "100$", description: " Turkish rug patterns have precise, stylized geometric or floral designs, with bright, sharp, contrasting colours. " })}>
                                    View Product
                                </button>
                            </Link>
                            </p>
                        </div>
                        <div className="card">
                        <img className="productImage" src={produkt_2} width='100%' style={{ borderRadius: "17px" }}/>
                            <h2>Persian rug</h2>
                            <p>Ut  cillum dolore eu fugiat nulla pariatur. Excepfficia deserunt mollit anim id est laborum.</p>
                            <p>
                            <Link to={{ pathname: "/productpage", state: { selectedProduct: { image: produkt_2, title: "Persian rug", price: "500$", description: " The rugs are not only floor coverings – they're works of art. Renowned for their rich colors and interesting designs," } } }}>
                            <button onClick={() => handleViewProduct({ image: produkt_2, title: "Persian rug", price: "500$", description: " The rugs are not only floor coverings – they're works of art. Renowned for their rich colors and interesting designs," })}>
                                View Product
                            </button>
                            </Link>
                            </p>
                        </div>
                    </div>
                </section>

                <section name="section3" id="section3">
                    <h2>About us</h2>
                    <p>we are proud to offer a collection of high-quality Turkish and Persian handmade rugs that are crafted with care and precision by skilled artisans. Each rug is a unique work of art that will add warmth, comfort, and style to any room in your home. Our rugs are made using traditional techniques and only the finest materials, ensuring that you receive a piece that is not only beautiful but also durable and long-lasting. We are committed to providing our customers with exceptional service and the finest selection of handmade rugs available.</p>

                </section>


            </div>
        </div>
    );
}

export default Startseite;