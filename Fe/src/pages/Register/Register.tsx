import   "./register.scss";
export interface RegisterProps {}

export interface DataType {
    title?:string,
    newsletter?:string,
    selectText?:string,
    optionText?:string,
    description?:string,
    buttonText?:string
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
  return (
    <div className="register">
      <div className="left_register"></div>
      <div className="right_register">
        <div className="form_register">
          <div className="form_title">
          {props?.title||data?.title||""}
            <div className="form_description">
            {props?.newsletter||data?.newsletter||""}
            </div>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Repeat Password" />
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
