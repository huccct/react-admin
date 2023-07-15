import React from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '@/stores'
interface Iprops {
  menuList: []
}
const index = observer(({ menuList }: Iprops) => {
  let { userStore } = useStore()
  console.log(userStore.menuRoutes)

  return <div></div>
})

export default index
