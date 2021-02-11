import { saveState, localState } from '../localStorage/localData'

const initialState = {
  isAuthUser: !!localStorage.getItem('logInData'),
  user: localState() || {},
  userName:
    localState() === undefined
      ? ''
      : localState().userGmailData.profileObj.name,
}

const loginReducer = (state = initialState, action) => {
  console.log('user data', localState())
  switch (action.type) {
    case 'SUCCESS':
      saveState({
        userGmailData: action.value,
      })
      return {
        ...state,
        isAuthUser: true,
        user: action.value,
        userName:
          localState() === undefined
            ? ''
            : localState().userGmailData.profileObj.name,
      }
      break
    case 'FAILED':
      return {
        ...state,
        isAuthUser: false,
        user: action.value,
      }
      break
    case 'LOG_OUT':
      localStorage.removeItem('logInData')
      return {
        ...state,
        isAuthUser: false,
        user: {},
      }
      break
    default:
      return {
        ...state,
        isAuthUser: !!localStorage.getItem('logInData'),
        user: localState() || {},
        userName:
          localState() === undefined
            ? ''
            : localState().userGmailData.profileObj.name,
      }
      break
  }
}

export default loginReducer
