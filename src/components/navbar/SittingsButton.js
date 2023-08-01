import "./notification.css";
import "./sittings.css"
import not_1 from "../../assets/not_1.png";
import not_2 from "../../assets/not_2.png";
import { useRef } from "react";
import { useDropdown } from "../../customHooks/customHooks";

const SittingsButton = () => {
  const modalContentRef = useRef(null);
  const [isOpen, , , toggle] = useDropdown(modalContentRef)
  return (
    <li ref={modalContentRef}>
      <button className="sittings-btn" onClick={toggle}>
        <i className="fa-solid fa-gear"></i>
      </button>
      {isOpen && (
      <div className="dropdown sittings">
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
      </div>
      )}
    </li>
  );
}

export default SittingsButton
