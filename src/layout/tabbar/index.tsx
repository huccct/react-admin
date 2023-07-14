import React from 'react'
import { observer } from 'mobx-react-lite'
import BreadCrumb from './breadcrumb'
import Setting from './setting'

const index: React.FC = observer(() => {
  return (
    <div className="flex justify-between items-center w-full h-full">
      <div className="flex items-center ml-10">
        <BreadCrumb />
      </div>
      <div className="flex items-center">
        <Setting />
      </div>
    </div>
  )
})

export default index
