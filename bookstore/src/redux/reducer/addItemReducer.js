
const ADDITEM = "ADDITEM";
const DELITEM = "DELITEM";


const initialState = [];

const addItemsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADDITEM:
            console.log("add cart reducer",action.payload)
            const newData =  [...state, action.payload];
            console.log("newData = ",newData)
            return newData;

        case DELITEM:
            console.log("remove cart reducer",action.payload)
            return state.filter((x) => x.id !== action.payload.id);

        default:
            return state;
    }
};

export default addItemsReducer;