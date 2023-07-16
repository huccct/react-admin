import React from 'react'
import { observer } from 'mobx-react-lite'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style/index.scss'
const index = observer(() => {
  const location = useLocation()
  return (
    <div>
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
    </div>
  )
})

export default index
