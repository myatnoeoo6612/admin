import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
                <span >Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
                <span>Users</span>
            </li>
            <li>
              <StoreIcon className="icon" />
                <span >Products</span>
            </li>
            <li>
              <CreditCardOutlinedIcon className="icon" />
                <span>Order</span>
            </li>
            <li>
              <LocalShippingOutlinedIcon className="icon" />
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <PollOutlinedIcon className="icon" />
                <span>Stats</span>
            </li>
            <li>
                <NotificationsOutlinedIcon className="icon" />
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>System Health</span>
            </li>
            <li>
                <PsychologyOutlinedIcon className="icon" />
                <span>Logs</span>
            </li>
            <li>
                <SettingsOutlinedIcon className="icon" />
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppOutlinedIcon className="icon" />
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        
      </div>
    </div>
  )
}

export default Sidebar