import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartCheckOut from '../CartCheckout'

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

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? ( // cartList.length === 0 ?
              // emptyCart
              <EmptyCartView />
            ) : (
              // or cartItems
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
                <CartCheckOut />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
