import { combineReducers } from "@reduxjs/toolkit"
import { reducer as notificationsReducer } from "reapop"
import authSlice from "./auth/authSlice"
import channelSlice from "./chat/channelSlice"
import messageSlice from "./chat/messageSlice"
import chatModalSlice from "./chat/modalSlice"
import commonSlice from "./common/commonSlice"
import compareSlice from "./compare/compareSlice"
import orderSlice from "./order/orderSlice"
import productSlice from "./product/productSlice"
import searchSlice from "./search/searchSlice"
import userSlice from "./user/userSlice"

const rootReducer = combineReducers({
  compare: compareSlice,
  common: commonSlice,
  user: userSlice,
  order: orderSlice,
  product: productSlice,
  auth: authSlice,
  search: searchSlice,
  channel: channelSlice,
  message: messageSlice,
  chatModal: chatModalSlice,
  notifications: notificationsReducer(),
})

export default rootReducer

export * from "./auth/authSlice"
export * from "./chat"
export * from "./common/commonSlice"
export * from "./compare/compareSlice"
export * from "./order/orderSlice"
export * from "./product/productSlice"
export * from "./search/searchSlice"
export * from "./user/userSlice"
