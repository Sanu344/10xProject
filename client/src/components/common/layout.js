import "./Layout.css";
import { BiBell } from "react-icons/bi";
import { MdOutlineOtherHouses } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { RxEyeOpen } from "react-icons/rx";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
function Layout() {
  return (
    <div>
      <header>
        <div>
          <p className="user_id">USER ID:</p>
          <p className="user_name">
            <CiUser className="CiUser" />
            User Name
            <FaAngleDown className="FaAngleDown" />
          </p>
        </div>
      </header>
      <hr className="hori" />

      <main>
        <div>
          <button className="search_bar">Search PPD ID </button>
          <button className="Add_property">{"+"} Add Property</button>
        </div>
      </main>

      <nav className="sideNavBar">
        <p className="logo">Logo</p>

        <ul>
          <li className="property">
            <MdOutlineOtherHouses className="property-icon" />
            Property
          </li>
          <li className="list_items">
            <BiBell className="list_items_bell" />
            Assistance
          </li>
          <li className="list_items">
            <FiDownload className="recieved-interest-icon" />
            Received Interest
          </li>
          <li className="list_items">
            <FiUpload className="sent-interest-icon" />
            Sent Interest
          </li>
          <li className="list_items">
            <RxEyeOpen className="Property-views-icon" />
            Property Views
          </li>
          <li className="list_items">
            <GoTag className="gotag" />
            Tariff Plan
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Layout;
