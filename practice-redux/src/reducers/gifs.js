import * as types from './../constants/ActionType'
var initialState = [
    {
        id: 1,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 2,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 3,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 4,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 5,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 6,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 7,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
    {
        id: 8,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g",
    },
];

var gifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK :
            console.log(action) 
            return state;
        default:
            return state;
    }
};

export default gifsReducer;