import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../../contexts/user.context";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles'; 
import { SignOutUser } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../contexts/cart.context";


const Navigation = ()=>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
           <CrwnLogo className="crwn-logo"/>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={SignOutUser}>
                  SIGN OUT
                  </NavLink>
              ) : (<NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )
            }
            <CartIcon></CartIcon>
          </NavLinks>
        </NavigationContainer>
        {isCartOpen && <CartDropdown />}
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;