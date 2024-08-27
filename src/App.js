
import Head from './component/Head'
import './App.css';
import Body from "./component/Body"
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Head/>
      <Body/>
     
    </div>
    </Provider>
  );
}

export default App;
