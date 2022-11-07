import React from "react";
import "./MainPage.css";
import db from "../../JSON_BD/TotalCharacteristic.db.json";
import MainBlank from "../mainBlank/MainBlank";

const MainPage = () => {
  const hdr = <h1 className="h1_info-part">2022 Military Strength Ranking</h1>;
  const underHdr = <h2 className="text-under-h1">GFP | ANNUAL RANKING</h2>;
  const txtOne = (
    <h3 className="h3_main-text txt">
      Ranking the total available active military manpower by country, from
      highest to lowest.
    </h3>
  );
  const txtTwo = (
    <p className="text-under-h3 text-part-one txt">
      The finalized Global Firepower ranking below utilizes{" "}
      <span className="text-bold"> over 50 individual factors</span> to
      determine a given nation's
      <span className="text-bold"> PowerIndex ('PwrIndx') </span>score with
      categories ranging from military might and financials to logistical
      capability and geography.
    </p>
  );
  const txtThree = (
    <p className="text-under-h3 text-part-one txt">
      Our unique, in-house formula allows for smaller, more
      technologically-advanced, nations to compete with larger, lesser-developed
      ones and special modifiers, in the form of bonuses and penalties, are
      applied to further refine the annual list. Color arrows indicate
      year-over-year trend comparison (
      <span className="text-bold">
        {" "}
        <span className="text-green">Increase</span>,{" "}
        <span className="text-grey">Stable</span>,{" "}
        <span className="text-red">Decline</span>
      </span>
      ).
    </p>
  );
  const txtFour = (
    <p className="note-text txt">
      Note: A perfect PwrIndx score is 0.0000 which is realistically
      unattainable in the scope of the current GFP formula; the smaller the
      PwrIndx value, the more powerful a nation's theoretical fighting
      capability is (by conventional means as nuclear capability is not taken
      into account).
    </p>
  );
  const imgPath = (
    <img
      className="img-earth"
      src={require("../../images/other/globe.jpg")}
      alt=""
    />
  );

  function nameConversionToLowCase(countryName) {
    return countryName.toLowerCase().replace(/ /gi, "-");
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
        <h2 className="header-over-rating">RATING</h2>
        <ul className="rating-all-div">
          {db["PwrIndx"].map((item) => (
            <li key={item.PwrIndx} className="rating-elem">
              <p className="rating-num">{item.ratingPwrIndx}</p>
              <a
                href={`/country/${nameConversionToLowCase(item.country)}`}
                className="country-name"
              >
                <p>{item.country.replace(/Russia/gi, "ᵣussia")}</p>
              </a>
              <div className="img-container">
                <img
                  src={require(`../../images/countries/${nameConversionToLowCase(
                    item.country
                  )}.jpg`)}
                  alt="ff"
                  className="country-img"
                />
              </div>
              <p className="pwr-index">PwrIndx Score: {item.PwrIndx}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MainPage;
