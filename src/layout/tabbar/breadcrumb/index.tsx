import React from 'react'
import { observer } from 'mobx-react-lite'
import { Breadcrumb } from 'antd'
import { useMatches } from 'react-router-dom'
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem'

const index: React.FC = observer(() => {
  const matches = useMatches()

  return (
    <Breadcrumb separator={'>'}>
      {matches.map((item, index) => {
        return <BreadcrumbItem key={index}>{item.pathname}</BreadcrumbItem>
      })}
    </Breadcrumb>
  )
})

export default index
