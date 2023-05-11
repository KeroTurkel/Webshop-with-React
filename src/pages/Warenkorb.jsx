import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Warenkorb.css";

function Warenkorb() {
  const [email, setEmail] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 20.99 },
    { id: 2, name: "Product 2", price: 15.99 },
    { id: 3, name: "Product 3", price: 10.99 },
    { id: 4, name: "Product 1", price: 20.99 },
    { id: 5, name: "Product 2", price: 15.99 },
    { id: 6, name: "Product 3", price: 10.99 },
    
  ]);

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const totalPrice = products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can submit the form data to your database
    console.log({
      firstName,
      lastName,
      company,
      address,
      city,
      postcode,
      country,
      state,
      phone,
      products,
    });
  };

  return (
<div className="content3">
  <div className="background-img">
    <div className="content-inner3">
        <div className="container">
       
          <div className="left-column">
          
            <div className="form-container">
            
              <form onSubmit={handleSubmit}>
                <h2>Shipping Address</h2>
                <div className="input-container">
                  <label>Email*</label>
                  <input
                    type="text"
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="signup-container">
                    <label>
                      <input
                        type="checkbox"
                        checked={showPasswordInput}
                        onChange={(event) =>
                          setShowPasswordInput(event.target.checked)
                        }
                      />
                      <span>Don't have an account? Sign up</span>
                    </label>
                  </div>
                  {showPasswordInput && (
                    <div className="input-container">
                      <label>Password*</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  )}
                  
              <div className="input-row">
                <div className="input-container">
                  <label>First Name*</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
              
                <div className="input-container">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
                <div className="input-container">
                  <label>Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
              <div className="input-row">
                <div className="input-container">
                  <label>Street address*</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>City / Town*</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-container">
                  <label>Postcode*</label>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(event) => setPostcode(event.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>Country*</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label>State (optional)</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                  />
                </div>
              </div>
                <div className="input-container">
                <label>Phone*</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
                </div>

                <div className="button-container"> 
                  <Link to="/tr_products"><button>Back</button></Link>
                  <div className="btn-continue"><Link to="/credit"><button type="submit">Continue</button></Link></div>
                </div>
              </form>
            

            
            </div>
      </div>


    <div className="right-column">
      <div className="form-container">
      <h2>Cart</h2>
            <div className="productCart-list">

              {products.map((product) => (
                  <div className="productCart" key={product.id}>
                    <img src={`https://picsum.photos/id/${product.id}/100/100`} alt="product" />
                  <div>
                      <h3>{product.name}</h3>
                      <p>{product.price}€</p>
                  </div>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </div>
              ))}
            <div className="double-line"></div>
            <div className="total-container">
              <p>Total:</p>
              <p>{totalPrice}€</p>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default Warenkorb;