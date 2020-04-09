export const countReducer = (count=0, action) => {
  switch(action.type) {
    case 'increment': 
      console.log('increment')
      return count + 1
    case 'decrement':
      return count - 1
    default:
      return count
  }
}

export const increment = () => ({
  type: 'increment'
})

export const decrement = () => ({
  type: 'decrement'
})

export const asyncIncrement = () => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, 1500);
} 