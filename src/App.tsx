import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd'

const App: React.FC = observer(() => {
  return (
    <div className="text-25px text-#ff6700 bg-#ccc">
      你好Unocss
      <Button>Test</Button>
    </div>
  )
})

export default App
