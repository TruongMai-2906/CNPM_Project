import   "./register.scss";
const Register: React.FC = () => {
  return (
    <div className="register">
      <div className="left_register"></div>
      <div className="right_register">
        <div className="form_register">
          <div className="form_title">
            Keep up with the Gameloft realm!
            <div className="form_description">
              Sign up to our newstetter to receive the latest new, special event
              and other exciting with me.
            </div>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Repeat Password" />
            <div className="container_national-date">
              <input type="date" className="input-date" />
              <select name="VietNam" id="" className="national">
                VietNam
                <option value="VietNam">VietNam</option>
              </select>
            </div>
            <div className="accept_me">
              <input type="checkbox" />
                <p className="register_description">
                  Sign up to our newstetter to receive the latest new special
                  event and other exciting with me
                </p>
            </div>
          </div>
        </div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Register;
