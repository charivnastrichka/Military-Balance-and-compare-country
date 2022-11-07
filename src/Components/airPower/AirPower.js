import React from "react";
import "./AirPower.css";
import db from "../../JSON_BD/TotalCharacteristic.db.json";
import MainBlank from "../mainBlank/MainBlank";

const AirPower = () => {
  const hdr = <h1 className="h1_info-part">2022 Military Aircraft Strength</h1>;
  const underHdr = <h2 className="text-under-h1">FIXED-WING | AIRPOWER</h2>;
  const txtOne = (
    <h3 className="h3_main-text txt">
      Ranking total aircraft fleet strength by country, from highest to lowest.
    </h3>
  );
  const txtTwo = (
    <p className="text-under-h3 text-part-one txt">
      Global Firepower tracks total air service strength for each national power
      taken into consideration for the annual GFP ranking. Fixed-wing and
      rotary-wing (helicopters) aircraft types are factored in from all branches
      of service (Air Force, Army Aviation, Navy, Marine). Aircraft types
      considered include fighters (multirole, interceptors), trainers (basic,
      advanced), transports (fixed-wing and helos), dedicated bombers and
      ground-attackers, special-missions platforms, etc. Aircraft currently
      under development or on order heading into the upcoming year are NOT taken
      into account.
    </p>
  );
  const txtThree = <p className="text-under-h3 text-part-one txt"></p>;
  const txtFour = (
    <p className="note-text txt">
      Data presented on this list is through 2022. Estimates are made when
      official data is not available.
    </p>
  );
  const imgPath = (
    <img
      className="img-earth"
      src={require("../../images/other/chengdu-j10-fighter.jpg")}
      alt=""
    />
  );
  let lowerCaseName = "";
  let total = Number(db["AirPower"][0].airPower.replace(/[$,]/gi, ""));
  function nameConversion(countryName) {
    lowerCaseName = countryName.toLowerCase().replace(/ /gi, "-");
    return lowerCaseName;
  }

  return (
    <div className="main-page">
      <main className="main-content">
        <MainBlank
          hdr={hdr}
          underHdr={underHdr}
          txtOne={txtOne}
          txtTwo={txtTwo}
          txtThree={txtThree}
          txtFour={txtFour}
          imgPath={imgPath}
        />
        <h2 className="header-over-rating">RATING Military Aircraft</h2>
        <ul className="rating-all-div">
          {db["AirPower"].map((item) => (
            <li key={item.PwrIndx} className="rating-elem">
              <p className="rating-num">{item.ratingAirPower}</p>
              <p className="country-name">
                {item.country.replace(/Russia/gi, "ᵣussia")}{" "}
              </p>

              <div className="img-container">
                <img
                  src={require(`../../images/countries/${nameConversion(
                    item.country
                  )}.jpg`)}
                  alt="ff"
                  className="country-img"
                />
              </div>
              <p className="pwr-index">
                Total: {item.airPower}
                <p
                  className=" statistic-line-air"
                  style={{
                    width: `${
                      (Number(item.airPower.replace(/[,]/gi, "")) * 100) / total
                    }%`,
                  }}
                ></p>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default AirPower;
