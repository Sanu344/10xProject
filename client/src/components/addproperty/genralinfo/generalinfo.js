import styles from "./generalinfo.module.css";
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { RxEyeOpen } from "react-icons/rx";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Geninfo() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.removeItem("geninfo");
    localStorage.setItem("geninfo", JSON.stringify(data));

    console.log(localStorage.getItem("basicinfo"));
    navigate("/loc");
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

      <div className={styles.label1}>Name</div>
      <div className={styles.label2}>Mobile</div>
      <div className={styles.label3}>Posted by</div>
      <div className={styles.label4}>Sale Type</div>
      <div className={styles.label5}>Featured Package</div>
      <div className={styles.label6}>PPD Package</div>

      <button onClick={() => navigate("/pptd")} className={styles.previous}>
        Previous
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.geninfoform}>
        <input
          type="text"
          {...register("name")}
          className={styles.ip1}
          placeholder="Name"
        />
        <input
          type="text"
          {...register("mobile")}
          className={styles.ip2}
          placeholder="Mobile"
        />
        <input
          type="text"
          {...register("postedby")}
          className={styles.ip3}
          placeholder="Posted by"
        />
        <input
          type="text"
          {...register("saletype")}
          className={styles.ip4}
          placeholder="Sale Type"
        />
        <input
          type="text"
          {...register("featuredpackage")}
          className={styles.ip5}
          placeholder="Featured Package"
        />
        <input
          type="text"
          {...register("ppdpackage")}
          className={styles.ip6}
          placeholder="PPD Package"
        />
        <input type="file" {...register("image")} className={styles.ipimg} />
        <button type="submit" className={styles.sndc}>
          Save & Continue
        </button>
        <div className={styles.camera}></div>
        <FaCamera className={styles.camicon} />
        <div className={styles.camtxt}>Add Photo</div>
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

export default Geninfo;
