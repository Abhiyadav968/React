import logo from './logo.svg';
import './App.css';
import Form from './Compontens/Form';
import DataProvider from './Compontens/Context/DataProvider';

function App() {
  return (
    <>
      <DataProvider>
        <Form />
      </DataProvider>
    </>
  );
}

export default App;
