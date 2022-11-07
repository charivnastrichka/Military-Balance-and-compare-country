import React from "react";
import "./LandForces.css";
import db from "../../JSON_BD/TotalCharacteristic.db.json";
import MainBlank from "../mainBlank/MainBlank";

const LandForces = () => {
  const hdr = (
    <h1 className="h1_info-part">Armored Vehicle Strength by Country (2022)</h1>
  );
  const underHdr = <h2 className="text-under-h1">LAND SYSTEMS | ARMOR</h2>;
  const txtOne = (
    <h3 className="h3_main-text txt">
      Ranking total Armored Fighting Vehicle fleet strength by country, from
      highest to lowest.
    </h3>
  );
  const txtTwo = (
    <p className="text-under-h3 text-part-one txt">
      The AFV/APC gives muscle to the ground advance. GFP tracks this value as
      an extension of the overall ground force capability for each country
      considered for the annual GFP ranking. Examples of AFV/APC types include
      the American M2 Bradley, the Russian/Soviet BMP/BTR series, various MRAPs
      (Mine-Resistant, Ambush-Protected), and other similar wheeled or tracked
      solutions employed by various powers. Totals also include mortar carriers.
      Products currently under development or on order heading into the upcoming
      year are NOT taken into account.
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
      src={require("../../images/other/armoredForces.jpg")}
      alt=""
    />
  );
  let lowerCaseName = "";
  let total = Number(
    db["armoredVehicle"][0].armoredVehicle.replace(/[$,]/gi, "")
  );
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
        <h2 className="header-over-rating">RATING Armored Vehicle</h2>
        <ul className="rating-all-div">
          {db["armoredVehicle"].map((item) => (
            <li key={item.ratingArmoredVehicle} className="rating-elem">
              <p className="rating-num">{item.ratingArmoredVehicle}</p>
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
                Total: {item.armoredVehicle}
                <p
                  className=" statistic-line-air"
                  style={{
                    width: `${
                      (Number(item.armoredVehicle.replace(/[,]/gi, "")) * 100) /
                      total
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

export default LandForces;
