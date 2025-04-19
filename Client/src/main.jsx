import ReactDOM from 'react-dom/client';  
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import  {store,persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Toaster } from "./components/ui/toaster.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <App />
    <Toaster /> 
  </Provider>
  </PersistGate>
);