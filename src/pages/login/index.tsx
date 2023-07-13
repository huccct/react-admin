import React from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '@/stores'
const index: React.FC = observer(() => {
  const { userStore } = useStore()
  return (
    <div>
      Login
      <h2>{userStore.a}</h2>
    </div>
  )
})

export default index
