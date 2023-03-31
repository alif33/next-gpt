import React from "react";
import styles from "./navbar.module.css";
import Modal from "../popup/Modal";
import Form from "../form/Auth";
import { useUser } from '../../lib/hooks'

const Navbar = () => {
  const user = useUser() 

  console.log(user, "ismail");
  return (
    <div
      className={`container d-flex justify-content-between align-items-center ${styles.navbar}`}
    >
      <div
        className={`${styles.nav_left} d-flex justify-content-center align-items-center`}
      >
        <img src="/img/Group.svg" alt="" />
        <h5>Logo here</h5>
      </div>
      <div className={styles.nav_middle}>
        <ul>
          <li>Features</li>
          <li>Explain the process</li>
          <li>Plans</li>
        </ul>
      </div>
      <div className={`${styles.nav_right} d-flex align-items-center`}>
        <div className={styles.right_img}>
          <img src="/img/english.svg" alt="" />
          <img src="/img/Vector.svg" alt="" />
        </div>
        {
          user ? (
            <a href="/api/logout"><span className="">Logout</span></a>
            
          ): (
            <div className="d-flex">
              <Modal
                actinTrigger={<h5 className="pointer pt-2">Sign Up</h5>}
                body={
                  <Form role="signup"/>
                }
              />
              <Modal
                actinTrigger={<span>Log in</span>}
                body={
                  <Form role="login"/>
                }
              />
            </div>
          )
        }
       
      </div>
    </div>
  );
};

export default Navbar;
