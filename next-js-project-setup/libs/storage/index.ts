const APP_NAME = 'my-app-'
export const PROFILE_KEY = 'userProfile'

export const setItemToLocalStorage: (key: string, value: any) => void = (
  key,
  value
) => {
  localStorage.setItem(APP_NAME + key, JSON.stringify(value))
}

export const getItemFromLocalStorage: (key: string) => any = (key) => {
  const value = localStorage.getItem(APP_NAME + key)
  return value ? JSON.parse(value) : {}
}
