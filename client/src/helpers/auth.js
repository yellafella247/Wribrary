export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('sei-63-wribrary')
}

export const getPayload = () => {
  const token = window.localStorage.getItem('sei-63-wribrary')
  if (!token) return
  const payload = token.split('.')[1]
  return JSON.parse(atob(payload))
}

export const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const currentTime = Math.floor(Date.now() / 1000)
  return currentTime < payload.exp
}

export const userIsOwner = (singleItem) => {
  const payload = getPayload()
  if (!payload) return
  return singleItem.addedBy._id === payload.sub
}