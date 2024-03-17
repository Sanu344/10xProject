import styles from "./Basicinfo.module.css";
import { MdOutlineOtherHouses } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { RxEyeOpen } from "react-icons/rx";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Basinfo() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [result, setResult] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.removeItem("basicinfo");
    localStorage.setItem("basicinfo", JSON.stringify(data));
    const result = localStorage.getItem("basicinfo");

    console.log(result);
    navigate("/pptd");
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

      <div className={styles.label1}>Property Type</div>
      <div className={styles.label2}>Negotiable</div>
      <div className={styles.label3}>Price</div>
      <div className={styles.label4}>Ownership</div>
      <div className={styles.label5}>Property Age</div>
      <div className={styles.label6}>Property Approved</div>
      <div className={styles.label7}>Property Description</div>
      <div className={styles.label8}>Bank Loan</div>

      <button
        onClick={() => {
          navigate("/pptv");
          localStorage.removeItem("basicinfo");
          localStorage.removeItem("geninfo");
          localStorage.removeItem("locinfo");
          localStorage.removeItem("pptdinfo");
        }}
        className={styles.previous}
      >
        Cancel
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.geninfoform}>
        <input
          type="text"
          {...register("propertytype")}
          className={styles.ip1}
          placeholder="Property Type"
          required
        />
        <input
          type="text"
          {...register("negotiable")}
          className={styles.ip2}
          placeholder="Negotiable"
          required
        />
        <input
          type="text"
          {...register("price")}
          className={styles.ip3}
          placeholder="Price"
          required
        />
        <input
          type="text"
          {...register("ownership")}
          className={styles.ip4}
          placeholder="Ownership"
          required
        />
        <input
          type="text"
          {...register("propertyage")}
          className={styles.ip5}
          placeholder="Property Age"
          required
        />
        <input
          type="text"
          {...register("propertyapproved")}
          className={styles.ip6}
          placeholder="Property Approved"
          required
        />
        <input
          type="text"
          {...register("propertydescription")}
          className={styles.ip7}
          placeholder="Property Description"
          required
        />
        <input
          type="text"
          {...register("bankloan")}
          className={styles.ip8}
          placeholder="Bank Loan"
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

export default Basinfo;
