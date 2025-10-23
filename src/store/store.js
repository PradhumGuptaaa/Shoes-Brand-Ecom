import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import adminOrderSlice from "./admin/order-slice";
import storage from 'redux-persist/lib/storage'

import shopProductsSlice from "./shop/products-slice";
import googlecartSlice from './cart/googlecartSlice';
import shopCartSlice from "./shop/cart-slice";
import userSlice from './user/userSlice';
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice";

const rootReducer=combineReducers({
    auth: authReducer,

    user:userSlice,
    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    cart: googlecartSlice,
    
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,

    commonFeature: commonFeatureSlice,
  });

  const persistConfig={
    key:"user",
    storage,
    version:1
  }
  
  const persistedReducer=persistReducer(persistConfig,rootReducer);
  
  export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
  });
  
  export const persistor=persistStore(store);
