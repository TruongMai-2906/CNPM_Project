import styles from './register.module.scss';
const Register:React.FC = () => {
    return(
      <div className={styles["register"]}>
                    <div className={styles["left_register"]}>

                    </div>
                    <div className={styles["right_register"]}>
                        <div className={styles["form_register"]}>
                            <div className={styles["form_title"]}>
                                        Keep up with the Gameloft realm!
                                <div className={styles["form_description"]}>
                                        Sign up to our newstetter to receive the latest new ,special event and other 
                                        exciting with me
                                </div>
                                <input type="text" placeholder='Username'/>
                                <input type="text" placeholder='Password'/>
                                <input type="text" placeholder='Repeat Password'/>
                                <div className={styles["container_national-date"]}>
                                        <input type="date" className={styles["input-date"]} />
                                        <select name="VietNam" id="" className={styles["national"]}>VietNam
                                        <option value="VietNam">VietNam</option>
                                        </select>
                                </div>
                                <div className={styles["accept_me"]}>
                                        <input type="checkbox" />
                                        <p>  Sign up to our newstetter to receive the latest new ,special event and other 
                                        exciting with me</p>
                                </div>
                            </div>
                        </div>
                        <button>
                            Register
                        </button>
                    </div>
      </div>
    )
  }
  
  export default Register;