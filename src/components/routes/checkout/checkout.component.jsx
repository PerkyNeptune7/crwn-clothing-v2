import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

const Checkout = ()=>{
    const {cartItems, cartTotal} = useContext(CartContext);
    useContext(CartContext);
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                    </HeaderBlock>
                <HeaderBlock>
                     <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                 </HeaderBlock>
                 <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <HeaderBlock>Remove
                </HeaderBlock>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (    
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
         <Total>Total: ${cartTotal}</Total>
            </CheckoutContainer>
    )
}
export default Checkout;