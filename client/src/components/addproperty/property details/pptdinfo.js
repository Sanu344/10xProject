import styles from "./pptdinfo.module.css";
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
function Ppdinfo() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.removeItem("pptdinfo");
    localStorage.setItem("pptdinfo", JSON.stringify(data));

    console.log(localStorage.getItem("pptdinfo"));
    navigate("/gen");
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
        <p className={styles.useridp}>
          USER ID : {localStorage.getItem("kittytag")}
        </p>
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

      <div className={styles.label1}>Length</div>
      <div className={styles.label2}>Bredth</div>
      <div className={styles.label3}>Total Area</div>
      <div className={styles.label4}>Area Unit</div>
      <div className={styles.label5}>No of BHK</div>
      <div className={styles.label6}>No of Floor</div>
      <div className={styles.label7}>Attached</div>
      <div className={styles.label8}>Western Toilet</div>
      <div className={styles.label9}>Furnished</div>
      <div className={styles.label10}>Car Parking</div>
      <div className={styles.label11}>Lift</div>
      <div className={styles.label12}>Electricity</div>
      <div className={styles.label13}>Facing</div>

      <button onClick={() => navigate("/basic")} className={styles.previous}>
        Previous
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.geninfoform}>
        <input
          type="text"
          {...register("length")}
          className={styles.ip1}
          placeholder="Length"
          required
        />
        <input
          type="text"
          {...register("breadth")}
          className={styles.ip2}
          placeholder="Bredth"
          required
        />
        <input
          type="text"
          {...register("area")}
          className={styles.ip3}
          placeholder="Total Area"
          required
        />
        <input
          type="text"
          {...register("areaunit")}
          className={styles.ip4}
          placeholder="Area Unit"
          required
        />
        <input
          type="text"
          {...register("numberofbhk")}
          className={styles.ip5}
          placeholder="No of BHK"
          required
        />
        <input
          type="text"
          {...register("numberoffloor")}
          className={styles.ip6}
          placeholder="No of Floor"
          required
        />
        <input
          type="text"
          {...register("attached")}
          className={styles.ip7}
          placeholder="Select Attached"
          required
        />
        <input
          type="text"
          {...register("westerntoilet")}
          className={styles.ip8}
          placeholder="Select Western Toilet"
          required
        />
        <input
          type="text"
          {...register("furnished")}
          className={styles.ip9}
          placeholder="Select Furnished"
          required
        />
        <input
          type="text"
          {...register("carparking")}
          className={styles.ip10}
          placeholder="Select Car Parking"
          required
        />
        <input
          type="text"
          {...register("lift")}
          className={styles.ip11}
          placeholder="Select Lift"
          required
        />
        <input
          type="text"
          {...register("electricity")}
          className={styles.ip12}
          placeholder="Example: 3 phase "
          required
        />
        <input
          type="text"
          {...register("facing")}
          className={styles.ip13}
          placeholder="Select Facing"
          required
        />
        <button type="submit" className={styles.sndc}>
          Save & Continue
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

export default Ppdinfo;
