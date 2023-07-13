import React from 'react'
import { observer } from 'mobx-react-lite'
import { useRoutes } from 'react-router-dom'
import router from './routes'
const App: React.FC = observer(() => {
  const routeRes = useRoutes(router)
  return <>{routeRes}</>
})

export default App
