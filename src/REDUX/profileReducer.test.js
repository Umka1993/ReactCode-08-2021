import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";




test('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it')
    let state = {

        posts: [
            {id:1, message: 'Привет', likesCount: 10},
            {id:2, message: 'Я учу реакт', likesCount: 50}
        ]
    }
    //2. action
    let newState =  profileReducer(state,action)

    //3. expectation
    expect (newState.posts.length).toBe(3)
});

test('message of new post should be "it" ', () => {
    //1. test data
    let action = addPostActionCreator('it')
    let state = {

        posts: [
            {id:1, message: 'Привет', likesCount: 10},
            {id:2, message: 'Я учу реакт', likesCount: 50}
        ]
    }
    //2. action
    let newState =  profileReducer(state,action)

    //3. expectation
    expect (newState.posts[2].message).toBe('it')
});

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    let state = {

        posts: [
            {id:1, message: 'Привет', likesCount: 10},
            {id:2, message: 'Я учу реакт', likesCount: 50}
        ]
    }
    //2. action
    let newState =  profileReducer(state,action)

    //3. expectation
    expect (newState.posts.length).toBe(1)
});

