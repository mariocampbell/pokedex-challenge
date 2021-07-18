import React from 'react'
import avatar from '../../images/avatar-mcmpbll.png'

const Avatar = () => {
  return (
    <div className="w-12 border-2 border-white rounded-full overflow-hidden " >
      <img src={ avatar } alt="Avatar Mario Campbell" />
    </div>
  )
}

export default Avatar
