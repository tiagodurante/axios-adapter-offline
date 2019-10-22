import localforage from 'localforage'

export default ({name = 'axios-stack', driver = localforage.LOCALSTORAGE}) => {
  let instance = localforage.createInstance({
    name: name
  })

  instance.setDriver(driver)

  return instance
}
