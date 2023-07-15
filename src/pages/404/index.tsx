import React from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import './style/index.scss'
const index = observer(() => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/home')
  }
  return (
    <>
      <p>
        HTTP:
        <span>404</span>
      </p>
      <code>
        <span>this_page</span>.<em>not_found</em>= true;
      </code>
      <code>
        <span>if</span>(<b>you_spelt_it_wrong</b>) {'{'}
        <span>try_again()</span>
        {';}'}
      </code>
      <code>
        <span>
          else if (<b>we_screwed_up</b>)
        </span>
        {'{'}
        <em>alert</em>
        {'('}
        <i>"We're really sorry about that."</i>
        {');'}
        <span>window</span>.<em>location</em>= home{';}'}
      </code>
      <center>
        <a onClick={goHome} className="cursor-pointer">
          HOME
        </a>
      </center>
    </>
  )
})

export default index
