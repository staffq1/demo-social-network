import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
    postsArr: [
        { id: 0, message: 'Hi', likesCount: '11' },
        { id: 1, message: 'i good', likesCount: '8' },
    ]
}

test('length', () => {
    // 1. test data 
    let action = addPostActionCreator('pitbull')

    // 2. action
    let newState = profileReducer(state, action)
    
    // 3. expectation
    expect(newState.postsArr.length).toBe(3)
    
  });

  test('message', () => {
    // 1. test data 
    let action = addPostActionCreator('pitbull')

    // 2. action
    let newState = profileReducer(state, action)
    
    // 3. expectation
    expect(newState.postsArr[1].message).toBe('i good')
  });

  test('delate length', () => {
    // 1. test data 
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)
    
    // 3. expectation
    expect(newState.postsArr.length).toBe(1)

  });

  test('delate не существующий id', () => {
    // 1. test data 
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)
    
    // 3. expectation
    expect(newState.postsArr.length).toBe(2)

  });