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
import { FaWindowClose } from "react-icons/fa";
function PropertyView() {
  const naigate = useNavigate();
  const [propertyList, setPropertyList] = useState([]);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);
  const [iconclick, setIconclick] = useState(false);
  const [dataPass, setDataPass] = useState();

  function handleSearch(e) {
    e.preventDefault();
    fetch("https://realestate-q1pp.onrender.com/prop/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("happyCat"),
        searchItem: search,
      }),
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
  ////////
  function updateview(ppdid) {
    fetch("https://realestate-q1pp.onrender.com/prop/views", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("happyCat"),
        ppdid: ppdid,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.status === false) {
          alert(JSON.stringify(response.message));
          localStorage.clear();
          naigate("/");
        }
      });
  }
  //////

  /////
  useEffect(() => {
    fetch("https://realestate-q1pp.onrender.com/prop/all", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("happyCat"),
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.status === false) {
          alert(JSON.stringify(response.message));
          localStorage.clear();
          naigate("/");
        }
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
        <p className={styles.useridp}>
          USER ID :{localStorage.getItem("kittytag")}
        </p>
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
                  <td className={styles.td}>
                    <img width={50} height={50} src={items.image} alt="img" />
                  </td>
                  <td className={styles.td}>{items.propertytype}</td>
                  <td className={styles.td}>{items.mobile}</td>
                  <td className={styles.td}>{items.area}</td>
                  <td className={styles.td}>{items.views}</td>
                  <td className={styles.td + " " + styles.td6}>
                    {items.status}
                  </td>
                  <td className={styles.td}>{items.daysleft}</td>
                  <td className={styles.td} key={index}>
                    {
                      <>
                        <MdRemoveRedEye
                          onClick={() => {
                            setIconclick(true);
                            setDataPass(items);
                            updateview(items.ppdid);
                          }}
                          className={styles.editicon}
                        />

                        <MdEdit
                          className={styles.editicon2}
                          onClick={() => {
                            console.log("clicked");
                          }}
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
      {iconclick && (
        <div className={styles.viewInfo}>
          <FaWindowClose
            onClick={() => setIconclick(false)}
            className={styles.closebtn}
          />{" "}
          <div className={styles.displaycontent}>
            <table>
              <tbody>
                <tr className={styles.tablerow}>
                  <td>PPDID : {dataPass.ppdid}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Property Type : {dataPass.propertytype}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Negotiable : {dataPass.negotiable}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Price : {dataPass.price}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Ownweship : {dataPass.ownership}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Property Age : {dataPass.propertyage}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Property Approved : {dataPass.propertyapproved}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Property description : {dataPass.propertydescription}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Bank Loan : {dataPass.bankloan}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Length : {dataPass.length}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Breadth : {dataPass.breadth}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Total Area : {dataPass.area}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Area Unit : {dataPass.areaunit}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>No of BHK : {dataPass.numberofbhk}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Number of Floor : {dataPass.numberoffloor}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Attached : {dataPass.attached}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Western Tiolet : {dataPass.westerntoilet}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Furnished : {dataPass.furnished}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Car Parking : {dataPass.carparking}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Lift : {dataPass.lift}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Electricity : {dataPass.electricity}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Facing : {dataPass.facing}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Name : {dataPass.name}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Mobile : {dataPass.mobile}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Posted By : {dataPass.postedby}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Sale Type : {dataPass.saletype}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Featured Package : {dataPass.featuredpackage}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>PPD Package : {dataPass.ppdpackage}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Email : {dataPass.email}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>City : {dataPass.city}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Pincode : {dataPass.pincode}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Location : {dataPass.locationArea}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Address : {dataPass.address}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Landmark : {dataPass.landmark}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Latitude : {dataPass.latitude}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Longitude : {dataPass.longitude}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Views : {dataPass.views}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Status : {dataPass.status}</td>
                </tr>
                <tr className={styles.tablerow}>
                  <td>Days Left : {dataPass.daysleft}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.imageDisplay}>
              <img src={dataPass.image} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PropertyView;
