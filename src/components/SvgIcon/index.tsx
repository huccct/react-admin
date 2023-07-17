import React from 'react'

const index = ({
  prefix = '#icon-',
  name = '',
  color = '',
  width = '16px',
  height = '16px'
}) => {
  return (
    <svg style={{ width, height }}>
      <use xlinkHref={prefix + name} fill={color} />
    </svg>
  )
}

export default index
