export const localState = () => {
  try {
    const serializedState = localStorage.getItem('logInData')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('logInData', serializedState)
  } catch (err) {
    console.log(err)
  }
}
