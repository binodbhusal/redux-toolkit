import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { ChevronDown, ChevronUp } from "../icons";
import { openModal } from "./features/model/ModelSlice";
const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems, total, amount} = useSelector((store)=> store.cart);
    const { isOpen } = useSelector((store)=> store.modal);

       if(amount < 1){
        return (<section className="cart">
            <header>
                <h2>Your BAG</h2>
                <h4 className="cart-empty">is currently empty</h4>
            </header>
        </section>
        );
       }
  return (
    <section className="cart">
        <header>
            <h2>Your BAG</h2>
        </header>
        <div>
            {
                cartItems.map((item)=> {
                    return <CartItem key={item.id} {...item} />
                })}
        </div>
        <footer>
            <div className="cart-total">
            <hr />
            <h4>total
            <span>${total}</span></h4>
            </div>
            <button className="btn clear-btn" onClick={() => {
                dispatch(openModal());
            }}>Clear cart</button>
        </footer>
    </section>
  )
  
}
export default CartContainer;