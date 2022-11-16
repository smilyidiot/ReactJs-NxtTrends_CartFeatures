import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      console.log(cartList)

      // TODO: Update the functionality to remove all the items in the cart
      const removeAllButton = () => {
        removeAllCartItems()
      }

      const noOfItems = cartList.length
      const totalPrice = cartList.map(each => each.price * each.quantity)
      const calculatedPrice = totalPrice.reduce((a, b) => a + b, 0)
      console.log(calculatedPrice)

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-heading-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    onClick={removeAllButton}
                    className="remove-all-button"
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
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
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
