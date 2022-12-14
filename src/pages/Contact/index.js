import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import classNames from "classnames/bind";
import styles from "./contact.module.scss";

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <div className={cx("wrapper")}>
      <h1>Contact Us</h1>
      <div className={cx("container")}>
        <div className={cx("contact")}>
          <div>
            <PhoneEnabledIcon />
            <h3>Phone</h3>
            <span>+84 984 333 333</span>
          </div>
          <div>
            <LocationOnIcon />
            <h3>Address</h3>
            <span>35 Mac Thai To</span>
          </div>
          <div>
            <AccessTimeIcon />
            <h3>Address</h3>
            <span>07:30 am to 23:00 pm</span>
          </div>
          <div>
            <MailOutlineIcon />
            <h3>Email</h3>
            <span>biho.shop@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3727927614123!2d105.78835951543019!3d21.01776458600424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab56dea2b779%3A0x52679c2e8b869457!2zMzUgUC4gTeG6oWMgVGjDoWkgVOG7lSwgWcOqbiBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1664438548227!5m2!1svi!2s"
          style={{ width: "100%", border: 0 }}
          height={450}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="a"
        />
      </div>
      <form action="" id="form-send-message"></form>
      <div className={cx("container")}>
        <h2 className={cx("title")}>Leave Message</h2>
        <div className={cx("infor-contact")}>
          <input
            type="text"
            placeholder="Your Name"
            required
            form="form-send-message"
          />
          <input
            type="text"
            placeholder="Your Email"
            form="form-send-message"
            required
          />
        </div>
        <textarea
          name=""
          placeholder="Your message"
          id=""
          cols="30"
          rows="10"
          form="form-send-message"
          required
        ></textarea>
        <Button variant="contained" type="submit" className={cx("btn-send")}>
          SEND MESSAGE
        </Button>
      </div>
    </div>
  );
};

export default Contact;
