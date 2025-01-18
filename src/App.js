import { createStore } from 'redux'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    default:
      return state
  }
}

const store = createStore(reducer)

// console.log(store)

store.dispatch({ type: 'increment' })
// console.log('add', store.getState().res)

store.dispatch({ type: 'decrement' })
// console.log('sub', store.getState().res)

store.dispatch({ type: 'reset' })
// console.log('reset', store.getState().res)

console.log(store.getState())

export default store
