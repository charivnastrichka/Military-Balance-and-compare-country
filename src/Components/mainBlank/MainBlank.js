import React from "react";
import "./MainBlank.css";

const MainBlank = ({
  hdr,
  underHdr,
  txtOne,
  txtTwo,
  txtThree,
  txtFour,
  imgPath,
}) => {
  return (
    <div className="main-page">
      <main className="main-content">
        <div id="m" className="info-part-with-img">
          <div className="info-part">
            {hdr}
            <br />
            {underHdr}
            <br />
            <div className="main-text">
              {txtOne}
              {txtTwo}
              {txtThree}
              {txtFour}
            </div>
          </div>
          <div className="img-earth-div">{imgPath}</div>
        </div>
      </main>
    </div>
  );
};

export default MainBlank;
