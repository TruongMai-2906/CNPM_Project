import { RawData } from "pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import { SImage } from "types/types";
import   "./register.scss";

export interface RegisterProps {
  
}

export interface DataType {
    title?:string,
    newsletter?:string,
    selectText?:string,
    optionText?:string,
    description?:string,
    buttonText?:string
}

export interface RegisterResourceDataType {
  background?: SImage;
  character?: SImage;
}

const Register: React.FC<DataType & RegisterProps> = (props) => {
  const data:DataType={
    title:"Keep up with the Gameloft realm!",
    newsletter:"Sign up to our newstetter to receive the latest new, special event and other exciting with me.",
    selectText:"VietNam",
    optionText:"VietNam",
    description:"Sign up to our newstetter to receive the latest new special event and other exciting with me",
    buttonText:"Register"
}

const [data1, setData] = useState<RegisterResourceDataType>();

useEffect(() => {
  const rawData: RawData = JSON.parse(localStorage.getItem("data") || "");
  const finalData  = rawData.sections?.find((section) => section.__typename === "ComponentHomepageRegister");
  setData((finalData as RegisterResourceDataType));
}, []);

  return (
    <div className="register">
      <img className="com-register__background" src={`http://localhost:1337${data1?.background?.url}` || ""} alt="background" />
      <div className="left_register">
        { data1?.character && <img className="com-register__character" src={`http://localhost:1337${data1?.character?.url}` || ""} alt="character" /> }
      </div>
      <div className="right_register">
        <div className="form_register">
          <div className="form_title">
          {props?.title||data?.title||""}
            <div className="form_description">
            {props?.newsletter||data?.newsletter||""}
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <div className="container_national-date">
              <input type="date" className="input-date" />
              <select name="VietNam" id="" className="national">
                  {props?.selectText||data?.selectText||""}
                <option value="VietNam"> {props?.optionText||data?.optionText||""}</option>
              </select>
            </div>
            <div className="accept_me">
              <input type="checkbox" />
                <p className="register_description">
                {props?.description||data?.description||""}
                </p>
            </div>
          </div>
        </div>
        <button>  {props?.buttonText||data?.buttonText||""}</button>
      </div>
    </div>
  );
};

export default Register;
