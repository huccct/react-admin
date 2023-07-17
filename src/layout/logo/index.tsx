import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import setting from '@/setting'
interface LogoProps {
  iscollapse?: boolean
}

const index: React.FC<LogoProps> = observer(({ iscollapse }) => {
  return (
    setting.logoHidden && (
      <div className="w-45 flex items-center h-14 text-gray-500 font-bold text-4.5 whitespace-nowrap pl-3  @transition-all duration-200">
        <img
          src={setting.logo}
          alt="logo"
          className="inline-block w-10 h-10 rounded-2"
        />
        {!iscollapse && (
          <span className="ml-2 overflow-hidden text-ellipsis flex-nowrap  @transition-all duration-200">
            {setting.title}
          </span>
        )}
      </div>
    )
  )
})

export default index
