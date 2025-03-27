
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     // <StrictMode>
//         <App />
//     //  </StrictMode>


// )

import ReactDOM from 'react-dom/client';  // Ensure ReactDOM is imported correctly
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import store from "./store/store.js"; 
import { Toaster } from "./components/ui/toaster.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster />  {/* Ensure Toaster is rendered */}
  </Provider>
);
