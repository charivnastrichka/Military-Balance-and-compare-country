import db from "../../JSON_BD/TotalCharacteristic.db.json";
import React, { useEffect, useState } from "react";
import MainBlank from "../mainBlank/MainBlank";
import "./ComparePage.css";

function ComparePage() {
  const [countryArr, SetCountryArr] = useState([]);
  const hdr = (
    <h1 className="h1_info-part">Military Strength Comparisons for 2022</h1>
  );
  const underHdr = (
    <h2 className="text-under-h1">GLOBAL FIREPOWER | UTILITY</h2>
  );
  const txtOne = (
    <h3 className="h3_main-text txt">
      Online tool for comparing the current military strengths of two world
      powers.
    </h3>
  );
  const txtTwo = (
    <p className="text-under-h3 text-part-one txt">
      The GFP country comparison form is provided to allow you to make direct,
      side-by-side comparisons of any two world powers represented in the GFP
      database. Simply use the dropdowns below to select your global powers.
      Click 'COMPARE' to process the request. Nations are listed by their formal
      names in alphabetical order (A-to-Z).
    </p>
  );
  const txtThree = "";
  const txtFour = "";
  const imgPath = (
    <img
      className="img-earth"
      src={require("../../images/other/globe.jpg")}
      alt=""
    />
  );
  let lowerCaseName = "";
  function nameConversion(countryName) {
    lowerCaseName = countryName.toLowerCase().replace(/ /gi, "-");
    return lowerCaseName;
  }
  let countryOne = React.createRef();
  let countryTwo = React.createRef();

  useEffect(() => {
    window.localStorage.setItem("countryArr", JSON.stringify(countryArr));
    console.log(countryArr);
  }, [countryArr]);

  function increaseCount() {
    SetCountryArr([countryOne.current.value, countryTwo.current.value]);
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
        <div className="div-form">
          <form className="compare-form" action="/compare/countries">
            <h2 className="header-form">COMPARE NATIONS</h2>
            <select
              ref={countryOne}
              defaultValue="a"
              className="select-country1 select-country"
              id=""
            >
              {db["alphabetically"].map((item) => (
                <option
                  className="option-select option-select1"
                  value={nameConversion(item.country)}
                >
                  {item.country.replace(/Russia/gi, "ᵣussia")}
                </option>
              ))}
            </select>
            <select
              ref={countryTwo}
              defaultValue="a"
              className="select-country2 select-country"
              id=""
            >
              {db["alphabetically"].map((item) => (
                <option
                  className="option-select option-select2"
                  value={nameConversion(item.country)}
                >
                  {item.country.replace(/Russia/gi, "ᵣussia")}
                </option>
              ))}
            </select>
            <button
              role="link"
              onClick={() => {
                increaseCount();
              }}
              className="btn-form-compare"
            >
              COMPARE
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ComparePage;
