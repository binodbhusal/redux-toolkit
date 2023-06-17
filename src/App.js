import './App.css';
import Navbar from './components/Navbar';
import { useDispatch, useSelector} from 'react-redux';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { calculateTotals, fetchData } from './Redux/cart/cartSlice';
import Model from './components/Modal';
function App() {
const { cartItems, isLoading } = useSelector((store) => store.cart);
const { isOpen } = useSelector((store) => store.modal);

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchData())
},[]);

useEffect(() => {
  dispatch(calculateTotals())
},[cartItems]);

if(isLoading){
  return (
   <p>is Loading ...</p>
  );
}
  return (
    <>
    {isOpen && <Model />}
<Navbar/>  
<CartContainer />
</>
);
}

export default App;
