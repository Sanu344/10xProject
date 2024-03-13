import styles from "./propertyview.module.css";
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { RxEyeOpen } from "react-icons/rx";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function PropertyView() {
  const naigate = useNavigate();
  const [propertyList, setPropertyList] = useState([]);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    fetch("http://localhost:3030/prop/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchItem: search }),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.setalert === true) {
          alert(JSON.stringify(response.message));
        } else {
          if (response.data.length > 0) {
            setPropertyList(response.data);
          } else {
            alert("no records found");
            const npRes = [];
            setPropertyList(npRes);
          }
        }
      });
  }

  /////
  useEffect(() => {
    fetch("http://localhost:3030/prop/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.setalert === true) {
          alert(JSON.stringify(response.message));
        } else {
          if (response.data.length > 0) {
            setPropertyList(response.data);
          } else {
            alert("no records found");
            const npRes = [];
            setPropertyList(npRes);
          }
        }
      });
  }, []);
  /////

  return (
    <>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box4}></div>
      <div className={styles.box5}>
        <p className={styles.tdp}>PPD ID</p>
        <p className={styles.tdp}>Image</p>
        <p className={styles.tdp}>Property</p>
        <p className={styles.tdp}>Contact</p>
        <p className={styles.tdp}>Area</p>
        <p className={styles.tdp}>Views</p>
        <p className={styles.tdp}>Staus</p>
        <p className={styles.tdp}>Days Left</p>
        <p className={styles.tdp}>Action</p>
      </div>
      <div className={styles.logo}>
        <p className={styles.logop}>LOGO</p>
      </div>
      <div className={styles.search}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className={styles.searchp}
            placeholder="Search PPD ID"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={styles.srchbutton} type="submit">
            <IoIosSearch size={28} />
          </button>
        </form>
      </div>

      <div className={styles.userid}>
        <p className={styles.useridp}>USER ID :</p>
      </div>
      <div className={styles.username}>
        <p className={styles.usernamep}>User Name</p>
      </div>
      <div className={styles.side}>
        <p className={styles.sidep}>Property</p>
      </div>
      <div className={styles.side2}>
        <p className={styles.side2p}>PPD Assistance </p>
      </div>
      <div className={styles.side3}>
        <p className={styles.side3p}>Received Interest </p>
      </div>
      <div className={styles.side4}>
        <p className={styles.side4p}>Sent Interest</p>
      </div>
      <div className={styles.side5}>
        <p className={styles.side5p}>Property Views</p>
      </div>
      <div className={styles.side6}>
        <p className={styles.side6p}>Tariff Plan</p>
      </div>
      <div className={styles.icon1}>
        <MdOutlineOtherHouses />
      </div>
      <div className={styles.icon3}>
        <FiDownload />
      </div>
      <div className={styles.icon4}>
        <FiUpload />
      </div>
      <div className={styles.icon5}>
        <RxEyeOpen />
      </div>
      <div className={styles.icon6}>
        <GoTag />
      </div>
      <div className={styles.icon2}>
        <BiBell />
      </div>
      <div className={styles.icon7}>
        <CiUser />
      </div>
      <div onClick={() => setClick(!click)} className={styles.icon8}>
        <FaAngleDown />
      </div>
      <button
        onClick={() => {
          naigate("/basic");
        }}
        className={styles.addppty}
      >
        +Add Property
      </button>

      <div className={styles.displaybox}>
        <table className={styles.table}>
          <tbody>
            {propertyList.map((items, index) => {
              return (
                <tr key={index} className={styles.disele}>
                  <td className={styles.td}>{items.ppdid}</td>
                  <td className={styles.td}>{items.image}</td>
                  <td className={styles.td}>{items.propertytype}</td>
                  <td className={styles.td}>{items.mobile}</td>
                  <td className={styles.td}>{items.area}</td>
                  <td className={styles.td}>{items.views}</td>
                  <td className={styles.td + " " + styles.td6}>
                    {items.status}
                  </td>
                  <td className={styles.td}>{items.daysleft}</td>
                  <td className={styles.td}>
                    {
                      <>
                        <MdRemoveRedEye className={styles.editicon} />

                        <MdEdit
                          className={styles.editicon2}
                          onClick={() => console.log("clicked")}
                        />
                      </>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {click && (
        <button
          onClick={() => {
            localStorage.clear();
            naigate("/");
          }}
          className={styles.logoutBtn}
        >
          Logout
        </button>
      )}
    </>
  );
}

export default PropertyView;
