import "./sittings.css"
import { useRef } from "react";
import { useDropdown } from "../../customHooks/customHooks";
import { Link } from "react-router-dom";

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
        <Link className="notify_item">
          <div className="notify_img">
              <i class="fa-solid fa-door-open"></i>
          </div>
          <div className="notify_info">
            <p>
              Add new class
            </p>
          </div>
        </Link>
        <div className="notify_item">
          <div className="notify_img">
              <i class="fa-solid fa-code-branch"></i>
          </div>
          <div className="notify_info">
            <p>
                Add new category
            </p>
          </div>
        </div>
      </div>
      )}
    </li>
  );
}

export default SittingsButton
