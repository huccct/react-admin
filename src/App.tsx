import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import useStore from './stores'
import { ConfigProvider, theme } from 'antd'
import { defaultTheme } from 'antd/es/theme/context'
const App: React.FC = observer(() => {
  let { userStore, settingStore } = useStore()
  useEffect(() => {
    const loadUserInfo = async () => {
      await userStore.userInfo()
    }
    loadUserInfo()
  }, [])

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: !settingStore.dark
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
          token: {
            colorPrimary: settingStore.colorPrimary
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
})

export default App
