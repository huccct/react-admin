import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
const App: React.FC = observer(() => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
})

export default App
