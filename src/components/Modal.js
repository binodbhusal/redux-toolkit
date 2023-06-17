 import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cart/cartSlice";
import { closeModal } from "./features/model/ModelSlice";
const Model = ()=> {
    const dispatch = useDispatch();
    return (
<aside className="modal-container">
    <div className="modal">
    <h2> Do you want to clear all items?</h2>
        <div className="btn btn-container">
    <button className="btn confirm-btn" onClick={() => {
        dispatch(clearCart())
        dispatch(closeModal())
    
    }}>Confirm</button>
    <button className="btn clear-btn" onClick={() => {
        dispatch(closeModal())
        }}>Cancel</button>
    </div>
    </div>
</aside>
    )
};
export default Model;
