import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { getTime } from '@/utils/time'
import useStore from '@/stores'

const index = observer(() => {
  // import mobx userStore
  let { userStore } = useStore()

  return <div></div>
})

export default index
