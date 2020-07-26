const stateBurger = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55,
    },
    total: 85,
};

const stateBurgerReducer = (state = stateBurger, action) => {
    switch (action.type) {
        case "ADD_BREAD_MID":
            {
                let { propsBurger, amount } = action;
                let burgerUpdate = {...state.burger };
                if (amount === -1 && state.burger[propsBurger] < 1) {
                    return {...state };
                }
                burgerUpdate[propsBurger] += amount;
                state.burger = burgerUpdate;

                state.total += amount * state.menu[propsBurger];
                return {...state }
            }
    }
    return {...state };
};

export default stateBurgerReducer;