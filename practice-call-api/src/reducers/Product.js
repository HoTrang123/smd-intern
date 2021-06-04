var initialState = [
    {
        id: 1,
        name: 'name1',
        price: 100,
        status: true
    },
    {
        id: 2,
        name: 'name2',
        price: 200,
        status: false
    },
    {
        id: 3,
        name: 'name3',
        price: 300,
        status: true
    }
];

var products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;