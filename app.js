

// State object
const appState = {
    items: [
        { itemId: 4, amount: 3},
        { itemId: 23, amount: 1}
    ],
    loginStatus: "LOGGED_IN",
    filters: []
}

// Actions

const loginStatusUpdateAction = { type: 'USER_LOGGED_IN', status: 'LOGGED_IN' }
const addItemAction = { type: 'ADD_ITEM', item: { itemId: 2, amount: 2}}
const addFilterAction = { type: 'ADD_FILTER', filter: { name: 'SEARCH_PHRASE', value: 'phone' } }

// state update functions
const loginStatus = (state = "GUEST", action) => {
    if(action.type === 'USER_LOGGED_IN'){
        return action.status;
    } else {
        return state;
    }
}

const cartItems = (state = [], action) => {
    switch(action.type){
        case 'ADD_ITEM': 
            return [
                ...state,
                action.item
            ];
        case 'REMOVE_ITEM':
            return [
                ...state.items.filter(item => item.itemId === action.item.itemId)
            ]
        default: 
            return state;
    }
}

// App state
const shoppingCartApp = (state = {}, action) => {
    return {
        login: loginStatus(state, action),
        items: cartItems(state, action)
    }
}