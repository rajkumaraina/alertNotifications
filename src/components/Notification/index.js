import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <div className="notification">
      {children}
      <div className="remove">
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
