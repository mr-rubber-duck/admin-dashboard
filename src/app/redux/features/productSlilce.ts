import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ✅ Define IProduct interface
interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    name: string;
    price: string; // or number, depending on your data type
    category: string;
}

// ✅ Set initial state using the interface
const initialState: IProduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: "",
    category: "",
};

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {
            return action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
