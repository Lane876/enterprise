import React from "react";
// import "./header.scss";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
// import {
//   HeaderContainer,
//   LogoContainer,
//   OptionsContainer,
//   OptionLink,
//   OptionDiv,
// } from "./header.style";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()} style={{ cursor: "pointer" }}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
