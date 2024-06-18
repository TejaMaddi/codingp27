// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="top-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="nav-logo"
        alt="website logo"
      />
      <button type="button" className="logout-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="nav-logout"
          alt="nav logout"
        />
      </button>
      <div className="medium-container">
        <ul className="medium-size">
          <li className="list1">Home</li>
          <li className="list1">Products</li>
          <li className="list1">Cart</li>
          <li className="button-list">
            <button type="button" className="logout-medium-button">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div className="bottom-container">
      <button type="button" className="logout-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="nav-logout"
          alt="nav home"
        />
      </button>
      <button type="button" className="logout-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
          className="nav-logout"
          alt="nav products"
        />
      </button>
      <button type="button" className="logout-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="nav-logout"
          alt="nav cart"
        />
      </button>
    </div>
  </nav>
)

export default Header
