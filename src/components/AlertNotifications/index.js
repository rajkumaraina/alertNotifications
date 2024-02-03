import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="mainContainer">
    <h1 className="heading">Alert Notifications</h1>
    <div className="insideContainer">
      <Notification>
        <div className="container">
          <AiFillCheckCircle className="success" />
          <div className="content">
            <h1 className="successHeading">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="container">
          <RiErrorWarningFill className="error" />
          <div className="content">
            <h1 className="errorHeading">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="container">
          <MdWarning className="warning" />
          <div className="content">
            <h1 className="warningHeading">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="container">
          <MdInfo className="info" />
          <div className="content">
            <h1 className="infoHeading">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </Notification>
    </div>
  </div>
)
export default AlertNotifications
