import React, {useState, useEffect} from "react";
import "../pages/Payment.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { db } from "./Firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";


function Payment() {

    const [cardNumber, setCardNumber] = useState("");
    const [expire, setExpire] = useState("");   
    const [cvv, setCvv] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cards, setCards] = useState([]);

    const cardsRef = collection(db, "cards");

    useEffect(() => {
        const unsubscribe = onSnapshot(cardsRef, (querySnapshot) => {
          const cardsList = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
          console.log("Cards fetched from Firebase:", cardsList);
          setCards(cardsList);
        });
      
        return () => unsubscribe();
      }, []);

    const handleAddCard = async (event) => {
        event.preventDefault();
        const newCard = { cardNumber, expire, cvv, cardHolderName };
        await addDoc(cardsRef, newCard);
        setCardNumber("");
        setExpire("");
        setCvv("");
        setCardHolderName("");
    };

    const handleExpireChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, ""); 
        value = value.substring(0, 4); 
        setExpire(formatExpireDate(value));
      };

    const formatExpireDate = (value) => {
        const month = value.substring(0, 2);
        const year = value.substring(2, 4);
        return `${month}/${year}`;
    };
    
      const handleCardNumberChange = (event) => {
        let value = event.target.value.replace(/ /g, ''); 
        value = value.replace(/\D/g, ''); 
      
        if (value.length > 0) {
          value = value.match(new RegExp('.{1,4}', 'g')).join(' '); 
        }
      
        setCardNumber(value);
      };

      const handleDelete = async (index) => {
        try {
          await deleteDoc(doc(cardsRef, cards[index].id));
          console.log("Document successfully deleted!");
          setCards((prevCards) => prevCards.filter((c, i) => i !== index));
        } catch (error) {
          console.error("Error removing document: ", error);
        }
      };
      

    

    return(
        <div className="content4">
            <div className="background-img">
                <div className="content-inner4">
                    <div className="paymentForm">
                        <form>
                            <p>Saved Cards</p>
                            
                                {cards.map((card, index) => (                             
                                    <div key={card.id}>
                                        <div className="savedCards">
                                        <img
                                            className="img-fluid"
                                            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                            alt="Mastercard logo"
                                        />
                                        <div className="saved-cardnumber">
                                        **** **** **** {card.cardNumber.slice(-4)}
                                        </div>
                                    <button
                                        className="btn-removeCard"
                                        onClick={() => handleDelete(index)}
                                        >
                                        Remove Card
                                    </button>
                                   </div>
                                </div>         
                                ))}
                            
                        <div className="addCard">
                            <p>Add new Card</p>
                            <div className="input-cardholderName">
                                <input 
                                    type="text" 
                                    placeholder="Cardholder Name"
                                    value={cardHolderName}
                                    onChange={(event)=> setCardHolderName(event.target.value)}
                                />
                            </div>
                            <div className="input-cardnumber">
                                <input 
                                     type="text"
                                     value={cardNumber}
                                     maxLength={19} 
                                     placeholder="cardnumber"
                                     onChange={handleCardNumberChange}
                                     onKeyDown={(event) => {
                                        if (event.key !== 'Backspace' && event.key !== 'Delete' && cardNumber.length === 4) {
                                            setCardNumber(`${cardNumber} `);
                                        }
                                     }}
                                />
                            </div>
                            <div className="container-cvvANDexpire">
                                <div className="input-date">
                                    <input 
                                        type="text"
                                        value={expire}
                                        placeholder="MM/YY"
                                        onChange={handleExpireChange}
                                    />
                                </div>

                                <div className="input-cvv">
                                    <input 
                                        type="password"
                                        value={cvv}
                                        placeholder="cvv"
                                        maxLength={3}
                                        onChange={(event)=> setCvv(event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="button-container">
                                <button type="submit" className="btn-addCard" onClick={handleAddCard}>
                                    Add Card
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}

export default Payment;
