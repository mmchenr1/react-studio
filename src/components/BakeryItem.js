// TODO: create a component that displays a single bakery item
import {useState} from 'react';

export default function BakeryItem(props) {
    const item = props.item
    function updateCart() {
        const updatedCartContents = [...props.cartContents]
        const existingItem = updatedCartContents.find((x) => x.name === item.name)

        if(!existingItem){
            let newItem = {...item, count:1};
            updatedCartContents.push(newItem)
        } else{
            existingItem.count++;
        }
        props.setCartTotal(props.cartTotal + item.price)
        props.setCart(updatedCartContents)
    }
    // setCartTotal(cartTotal + 1)
    return(
        <div className="BakeryItem">
            <img className="BakeryItem-image" src={item.image}/>
            <div className="bakery-item-text">
                <h2 className="BakeryItem-label">{item.name}</h2>
                <p className="BakeryItem-description">{item.description}</p>
            </div>
            <div className="footer-bar">
                <p className="price">${item.price}</p>
                <button onClick={updateCart} className="add-to-car-button">Add to Cart</button>
            </div>
        </div>
    )
}
