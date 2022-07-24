import { BooleanType, Product, ProductSlice } from "@/models"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProductSlice = {
  product: undefined,
  listAttribute: undefined,
  search: {
    isOpen: undefined,
    keyword: undefined,
    isSearching: undefined,
  },
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }: { payload: Product | undefined }) => {
      state.product = payload
    },

    toggleSearchResult: (state, { payload }: BooleanType) => {
      state.search.isOpen = payload
    },

    setKeyword: (state, { payload }: { payload: string }) => {
      state.search.keyword = payload
    },

    setSearchingStatus: (state, { payload }: BooleanType) => {
      state.search.isSearching = payload
    },
  },
})

export default productSlice.reducer

export const { setProduct, setKeyword, setSearchingStatus, toggleSearchResult } =
  productSlice.actions
