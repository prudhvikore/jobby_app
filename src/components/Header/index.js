import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <li>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </li>
      <li>
        <ul className="header-list-items">
          <Link to="/" className="link-item">
            <li className="home-heading home">Home</li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="jon-heading home">Jobs</li>
          </Link>
        </ul>
      </li>
      <li>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </li>
    </nav>
  )
}

export default withRouter(Header)
