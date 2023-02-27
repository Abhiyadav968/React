import './App.css';
import Cart from './Compontens/Cart';
import Navbar from './Compontens/Navbar';
import DataProvider from './Compontens/Context/DataProvider';
import AddToCart from './Compontens/AddToCart'



function App() {
  return (
    <>
      <Navbar />
      <DataProvider>
        <Cart />
        <AddToCart />
      </DataProvider>
    </>
  );
}

export default App;
