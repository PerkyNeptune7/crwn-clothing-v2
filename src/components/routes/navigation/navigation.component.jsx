import { Outlet } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles'; 
import {selectIsCartOpen} from '../../../store/cart/cart.selector';
import {selectCurrentUser} from '../../../store/user/user.selector'
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;