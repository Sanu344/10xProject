import styles from "./locationinfo.module.css";
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { RxEyeOpen } from "react-icons/rx";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Locinfo() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.removeItem("locinfo");
    localStorage.setItem("locinfo", JSON.stringify(data));
    if (
      localStorage.getItem("basicinfo") &&
      localStorage.getItem("geninfo") &&
      localStorage.getItem("pptdinfo") &&
      localStorage.getItem("locinfo")
    ) {
      const basicinfo = JSON.parse(localStorage.getItem("basicinfo"));
      const geninfo = JSON.parse(localStorage.getItem("geninfo"));
      const ppdinfo = JSON.parse(localStorage.getItem("pptdinfo"));
      const locinfo = JSON.parse(localStorage.getItem("locinfo"));
      let form = { ...basicinfo, ...geninfo, ...ppdinfo, ...locinfo };
      console.log(form);

      fetch("http://localhost:3030/prop/search/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("happyCat"),
          form: form,
        }),
      })
        .then((data) => data.json())
        .then((response) => {
          if (response.setalert === true) {
            alert(JSON.stringify(response.message));
          } else {
            if (response.data.length > 0) {
              alert(JSON.stringify("added new property"));

              localStorage.removeItem("basicinfo");
              localStorage.removeItem("geninfo");
              localStorage.removeItem("pptdinfo");
              localStorage.removeItem("locinfo");

              navigate("/pptv");
            } else {
              const npRes = [];
              console.log(npRes);
            }
          }
        });
    } else {
      alert(
        "Please enter all the deatails for Basic Info, Property details, General Info, Location Info again"
      );
    }
  };

  return (
    <>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <div className={styles.box4}></div>
      <div className={styles.box5}></div>
      <div className={styles.logo}>
        <p className={styles.logop}>LOGO</p>
      </div>
      <div className={styles.addnewproperty}>
        <p className={styles.addnewpropertyp}>ADD NEW PROPERTY</p>
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
        <p className={styles.side2p}>PPD Assistance</p>
      </div>
      <div className={styles.side3}>
        <p className={styles.side3p}>Received Interest</p>
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
      {/* common layout upto this in css upto .circle4*/}
      <div className={styles.info3}></div>
      <div className={styles.circle1}>1</div>
      <div className={styles.circle2}>2</div>
      <div className={styles.circle3}>3</div>
      <div className={styles.circle4}>4</div>
      <div className={styles.tabtxt1}>Basic Info</div>
      <div className={styles.tabtxt2}>Property Detail</div>
      <div className={styles.tabtxt3}>General Info</div>
      <div className={styles.tabtxt4}>Location Info</div>

      {/**form components from here */}

      <div className={styles.label1}>Email</div>
      <div className={styles.label2}>City</div>
      <div className={styles.label3}>Area</div>
      <div className={styles.label4}>Pincode</div>
      <div className={styles.label5}>Address</div>
      <div className={styles.label6}>Landmark</div>
      <div className={styles.label7}>Latitude</div>
      <div className={styles.label8}>Longitude</div>

      <button onClick={() => navigate("/gen")} className={styles.previous}>
        Previous
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.geninfoform}>
        <input
          type="text"
          {...register("email")}
          className={styles.ip1}
          placeholder="Email"
        />
        <input
          type="text"
          {...register("city")}
          className={styles.ip2}
          placeholder="City"
        />
        <input
          type="text"
          {...register("locationArea")}
          className={styles.ip3}
          placeholder="Area"
        />
        <input
          type="text"
          {...register("pincode")}
          className={styles.ip4}
          placeholder="Pin Code"
        />
        <input
          type="text"
          {...register("adress")}
          className={styles.ip5}
          placeholder="Address"
        />
        <input
          type="text"
          {...register("landmark")}
          className={styles.ip6}
          placeholder="Land Mark"
        />
        <input
          type="text"
          {...register("latitude")}
          className={styles.ip7}
          placeholder="Latitude"
        />
        <input
          type="text"
          {...register("longitude")}
          className={styles.ip8}
          placeholder="Longitude"
        />
        <button type="submit" className={styles.sndc}>
          Add Property
        </button>
      </form>
      {click && (
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className={styles.logoutBtn}
        >
          Logout
        </button>
      )}
    </>
  );
}

export default Locinfo;
