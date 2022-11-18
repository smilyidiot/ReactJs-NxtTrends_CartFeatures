import CartContext from '../../context/CartContext'
import './index.css'

const CartCheckout = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const noOfItems = cartList.length
      const totalPrice = cartList.map(each => each.price * each.quantity)
      const calculatedPrice = totalPrice.reduce((a, b) => a + b, 0)
      console.log(calculatedPrice)

      return (
        <div className="checkout-container">
          <h1 className="checkout-total">
            Order Total:
            <span className="total-price"> Rs {calculatedPrice}/-</span>
          </h1>
          <p className="checkout-para">{noOfItems} items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartCheckout
