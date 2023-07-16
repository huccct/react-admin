import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style/index.scss'
import useStore from '@/stores'
const index = observer(() => {
  const location = useLocation()
  const [flag, setFlag] = useState(true)
  let { settingStore } = useStore()
  useEffect(() => {
    setFlag(false)
    const timer = setTimeout(() => {
      setFlag(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [settingStore.refsh])
  return (
    <div>
      {flag && (
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <Outlet />
          </CSSTransition>
        </SwitchTransition>
      )}
    </div>
  )
})

export default index
