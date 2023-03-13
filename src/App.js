
import './App.css';
import HeaderComponent from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <HeaderComponent/>
       <Body/>
    </div>
    </Provider>
  );
}

export default App;
