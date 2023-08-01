import "./dropdown.css"
import "./notification.css";
import not_1 from "../../assets/not_1.png";
import not_2 from "../../assets/not_2.png";
import not_3 from "../../assets/not_3.png";
import not_4 from "../../assets/not_4.png";
import { useRef} from "react";
import {useDropdown } from "../../customHooks/customHooks";


const Notifications = () => {
  const modalContentRef = useRef(null);
  const [isOpen,,, toggle] = useDropdown(modalContentRef)
  return (
    <li ref={modalContentRef}>
      <button
        className="notification-btn"
        onClick={toggle}
      >
        <i className="fas fa-bell"></i>
      </button>
      {(isOpen &&
        <div className="dropdown notifications"   >
          <div className="notify_item">
            <div className="notify_img">
              <img src={not_1} alt="profile_pic" />
            </div>
            <div className="notify_info">
              <p>
                Alex commented on<span>Timeline Share</span>
              </p>
              <span className="notify_time">10 minutes ago</span>
            </div>
          </div>
          <div className="notify_item">
            <div className="notify_img">
              <img src={not_2} alt="profile_pic" />
            </div>
            <div className="notify_info">
              <p>
                Ben hur commented on your<span>Timeline Share</span>
              </p>
              <span className="notify_time">55 minutes ago</span>
            </div>
          </div>
          <div className="notify_item">
            <div className="notify_img">
              <img src={not_3} alt="profile_pic" />
            </div>
            <div className="notify_info">
              <p>
                Meryn trant liked your<span>Cover Picture</span>
              </p>
              <span className="notify_time">2 hours ago</span>
            </div>
          </div>
          <div className="notify_item">
            <div className="notify_img">
              <img src={not_4} alt="profile_pic" />
            </div>
            <div className="notify_info">
              <p>
                John wick commented on your<span>Profile Picture</span>
              </p>
              <span className="notify_time">6 hours ago</span>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Notifications;
