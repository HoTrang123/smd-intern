import * as types from './../constants/ActionType'

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};