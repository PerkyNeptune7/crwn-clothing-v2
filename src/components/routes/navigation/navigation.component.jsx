import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../../contexts/user.context";
import './navigation.styles.scss'; 
import { SignOutUser } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../contexts/cart.context";


const Navigation = ()=>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
           <CrwnLogo className="crwn-logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={SignOutUser}>
                  SIGN OUT
                  </span>
              ) : (<Link className="nav-link" to='/auth'>
                  SIGN IN
                </Link>
              )
            }
            <CartIcon></CartIcon>
          </div>
        </div>
        {isCartOpen && <CartDropdown />}
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;