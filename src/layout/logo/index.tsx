import React from 'react'
import { observer } from 'mobx-react-lite'
import setting from '@/setting'

const index: React.FC = observer(() => {
  return (
    setting.logoHidden && (
      <div className="w-45 flex items-center h-14 text-gray-500 font-bold text-4.5 whitespace-nowrap overflow-hidden pl-3">
        <img
          src={setting.logo}
          alt="logo"
          className="inline-block w-10 h-10 rounded-2"
        />
        <span className="ml-2 overflow-hidden text-ellipsis flex-nowrap">
          {setting.title}
        </span>
      </div>
    )
  )
})

export default index
