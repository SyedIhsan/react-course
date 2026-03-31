import axios from 'axios'
import { useState } from 'react'
import formatMoney from '../../utils/money'

function CartItemDetails({ cartItem, loadCart }) {
  const [ isUpdate, setIsUpdate ] = useState(false);
  const [ quantity, setQuantity ] = useState(cartItem.quantity);

  const deleteCart = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const onClick = () => {
    if (!isUpdate) {
      setIsUpdate(true);
    } else {
      updateQuantity();
    }
  };

  const updateQuantity = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity
    });
    await loadCart();
    setIsUpdate(false);
  };

  const changeQuantity = (event) => {
    const inputQuantity = Number(event.target.value);
    setQuantity(inputQuantity);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      updateQuantity();
    };

    if (event.key === "Escape") {
      setIsUpdate(false);
    };
  };

  return (
    <div className="cart-item-details">
      <div className="product-name">
        {cartItem.product.name}
      </div>
      <div className="product-price">
        {formatMoney(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity:
          {isUpdate 
            ? <input
              value={quantity}
              onChange={changeQuantity}
              onKeyDown={onKeyDown}
              className='text-box'
              type="text" />
            : <span className="quantity-label">{cartItem.quantity}</span>
          }
        </span>
        <span className="update-quantity-link link-primary" onClick={onClick}>
          {isUpdate ? "Save" : "Update"}
        </span>
        <span className="delete-quantity-link link-primary" onClick={deleteCart}>
          Delete
        </span>
      </div>
    </div>
  );
}

export default CartItemDetails