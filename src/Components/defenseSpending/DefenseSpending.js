import React from "react";
import "./DefenseSpending.css";
import db from "../../JSON_BD/TotalCharacteristic.db.json";
import MainBlank from "../mainBlank/MainBlank";

const DefenseSpending = () => {
  const hdr = (
    <h1 className="h1_info-part">Defense Spending by Country (2022)</h1>
  );
  const underHdr = <h2 className="text-under-h1">GOVERNMENT | FINANCIALS</h2>;
  const txtOne = (
    <h3 className="h3_main-text txt">
      Ranking total annual defense spending budget capability by country, from
      highest to lowest.
    </h3>
  );
  const txtTwo = (
    <p className="text-under-h3 text-part-one txt">
      Global Firepower tracks the annual defense spending budgets of each
      participant in the GFP ranking, these being funds allotted by governments
      to cover various aspects of a standing fighting force - namely
      procurement, maintenance / support, and pensions.
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
      src={require("../../images/other/flags-500.jpg")}
      alt=""
    />
  );
  let total = Number(
    db["defenseSpendingObject"][0].defenseSpending.replace(/[$,]/gi, "")
  );
  function nameConversion(countryName) {
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
        <h2 className="header-over-rating">RATING Defense Spending</h2>
        <ul className="rating-all-div">
          {db["defenseSpendingObject"].map((item) => (
            <li key={item.RatingDefenseSpending} className="rating-elem">
              <p className="rating-num">{item.RatingDefenseSpending}</p>
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
                Total: {item.defenseSpending}
                <p
                  className=" statistic-line-air"
                  style={{
                    width: `${
                      (Number(item.defenseSpending.replace(/[$,]/gi, "")) *
                        100) /
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

export default DefenseSpending;
