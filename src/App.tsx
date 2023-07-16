import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import useStore from './stores'
const App: React.FC = observer(() => {
  let { userStore } = useStore()
  useEffect(() => {
    const loadUserInfo = async () => {
      await userStore.userInfo()
    }
    loadUserInfo()
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
})

export default App
