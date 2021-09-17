import React from "react";
import { SocialMedia } from "../../Comonents/SocialMedia/SocialMedia";
import "./contact.css";
import Avatar from "@material-ui/core/Avatar";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import MailIcon from "@material-ui/icons/Mail";
export const Contactme = () => {
  return (
    <div className=" contactme" id="contactme">
      <h1 className="title">Contact Me</h1>
      <div className="contactContainer">
        <div className="contact">
          <div className="social">
            <SocialMedia flex={true} />
          </div>
          <div className="adddress">
            <div className="phonno">
              <a className="contact_detail" href={"tel:" + 9562325495}>
                <i class="fas fa-phone-volume"></i> 9562325495
              </a>
            </div>
            <div className="mail">
              {" "}
              <a
                className="contact_detail_email"
                href={"mailto:" + "arunkrishnanppp@gmail.com"}
              >
                <i class="fas fa-envelope"></i>
                arunkrishnanppp@gmail.com
              </a>
            </div>
            <div className="add">
              <i class="fas fa-house-user"></i>
              <p>ADDRESS: KANNUR,KERALA</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="myname">@arun</p>
        </div>
      </div>
    </div>
  );
};
