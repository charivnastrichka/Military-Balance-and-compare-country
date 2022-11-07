import db from '../../JSON_BD/TotalCharacteristic.db.json'
import React from 'react'
import MainBlank from '../mainBlank/MainBlank';
import "./CountriesComparison.css"

function CountriesComparison() {

    let getCountries=JSON.parse(window.localStorage.getItem('countryArr'));
    let country1=getCountries[0],country2=getCountries[1];
    const hdr=<h1 className='h1_info-part'>Comparison of {capitalizeFirstLetter(country1).replace(/Russia/ig,'ᵣussia')} and {capitalizeFirstLetter(country2).replace(/Russia/ig,'ᵣussia')}  Military Strengths (2022)</h1>;
    const underHdr=<h2 className="text-under-h1">GLOBAL FIREPOWER | UTILITY</h2>;
    const txtOne= <h3 className='h3_main-text txt'>Side-by-side comparison showcasing the relative fighting strengths of {capitalizeFirstLetter(country1).replace(/Russia/ig,'ᵣussia')} and {capitalizeFirstLetter(country2).replace(/Russia/ig,'ᵣussia')} for the year 2022.</h3>
    const txtTwo=  <p className="text-under-h3 text-part-one txt">The selected countries for comparison, {capitalizeFirstLetter(country1).replace(/Russia/ig,'ᵣussia')} and {capitalizeFirstLetter(country2).replace(/Russia/ig,'ᵣussia')}, are displayed below in side-by-side format. Your Primary selection is displayed in <span className="blue">Blue</span> while your Secondary selection is displayed in <span className="red">Red</span>. You can always go back to <a href="/compare" className="compare-a">compare two other military powers</a>.</p>;
    const txtThree="";
    const txtFour='';
    const imgPath=<img className='img-earth' src={require("../../images/other/globe.jpg")} alt="" />
    let countryDifferentsPoputation;

    function capitalizeFirstLetter(countryName) {
        return countryName.replace(/-/ig,' ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ').replace(/And/ig,'and').replace(/Of The/ig,'of the')
      }

      let forFindData=(nameCountry,nameArr,nameObj)=>{
        nameCountry=capitalizeFirstLetter(nameCountry);
        for(let i=0;i<db[nameArr].length;i++) if(db[nameArr][i].country===nameCountry) return nameObj=db[nameArr][i][nameObj];
      }
      
      let diferensOfPopulation=(countryName1,countryName2,nameArr,nameObj)=>{
        countryName1=Number(forFindData(countryName1,nameArr,nameObj).replace(/[$,]/ig,''));
        countryName2=Number(forFindData(countryName2,nameArr,nameObj).replace(/[$,]/ig,''));

        if(countryName1>countryName2){
        countryDifferentsPoputation=countryName1-countryName2;
            return true;
        } 
        else{
        countryDifferentsPoputation=countryName2-countryName1;
            return false; 
        }
      }

      let corelationToPersent=(countryName1,countryName2,nameArr,nameObj)=>{
        countryName1=Number(forFindData(countryName1,nameArr,nameObj).replace(/[$,]/ig,''));
        countryName2=Number(forFindData(countryName2,nameArr,nameObj).replace(/[$,]/ig,''));
        let total=countryName1+countryName2;
        let prsnt1country1=countryName1*100/total;
        let divStyle = {
            gridTemplateColumns: `${prsnt1country1}% ${100-prsnt1country1}%`
          };
        return divStyle;
      }
      
    return (
        <div className="main-page">
        <main className='main-content'>
            <MainBlank hdr={hdr} underHdr={underHdr} txtOne={txtOne} txtTwo={txtTwo} txtThree={txtThree} txtFour={txtFour} imgPath={imgPath}/>
            <div className="compare-div-charact">
                <div className="header_compare-div-charact">
                    <img src={require(`../../images/countries/${country1}.jpg`)} alt="" className="country1-compare-img" />
                    <h2 className="name-compare-h2">COUNTRIES</h2>
                    <img src={require(`../../images/countries/${country2}.jpg`)} alt="" className="country2-compare-img" />
                </div>
                <div className='country-chracter-div'>
                <div className="country1-chracter country-chracter">
                    <h3 className="country1-character-name">{capitalizeFirstLetter(country1).replace(/Russia/ig,'ᵣussia')}</h3>
                    <p className=" country-pwrIndex">PwrIndex: {forFindData(country1,"PwrIndx",'PwrIndx')}</p>
                    <p className="country1-pwrIndex-info">*PwrIndx score of 0.0000 being optimal.</p>
                    <p className="country1-rank country-rank">Ranked {forFindData(country1,"countries","numberOnRating")} of 142</p>
                </div>
                <div className="country2-chracter country-chracter">
                    <h3 className="country2-character-name">{capitalizeFirstLetter(country2).replace(/Russia/ig,'ᵣussia')}</h3>
                    <p className=" country-pwrIndex">PwrIndex:{forFindData(country2,"PwrIndx",'PwrIndx')}</p>
                    <p className="country2-pwrIndex-info">*PwrIndx score of 0.0000 being optimal.</p>
                    <p className="country2-rank country-rank">Ranked {forFindData(country2,"countries","numberOnRating")} of 142</p>
                </div>
                </div>
            </div>


            <div className="compare-div-charact">
                <div className="header_compare-div-charact">
                    <img src={require(`../../images/countries/${country1}.jpg`)} alt="" className="country1-compare-img" />
                    <h2 className="name-compare-h2">MANPOWER</h2>
                    <img src={require(`../../images/countries/${country2}.jpg`)} alt="" className="country2-compare-img" />
                </div>
                <div className='country-chracter-div'>
                <div className="country1-chracter country-chracter">
                    <p className="total-population" >Total Population (Rnk {forFindData(country1,"totalPopulation",'ratingTotalPopulation')})</p>
                    <p className="country1-pwrIndex-info">{forFindData(country1,"totalPopulation",'totalPopulation')}</p>
                    <p className={diferensOfPopulation(country1,country2,"totalPopulation",'totalPopulation')?"green-dif":"red-dif"}>(Diff: {diferensOfPopulation(country1,country2,"totalPopulation",'totalPopulation')?`${countryDifferentsPoputation}`:`-${countryDifferentsPoputation}`})</p>
                </div>
                <div className="country2-chracter country-chracter">
                    <p className="total-population">Total Population (Rnk {forFindData(country2,"totalPopulation",'ratingTotalPopulation')})</p>
                    <p className="count-population">{forFindData(country2,"totalPopulation",'totalPopulation')}</p>
                    <p className={diferensOfPopulation(country1,country2,"totalPopulation",'totalPopulation')?"red-dif":"green-dif"}>(Diff:  {diferensOfPopulation(country1,country2,"totalPopulation",'totalPopulation')?`-${countryDifferentsPoputation}`:`${countryDifferentsPoputation}`})</p>
                </div>
                </div>
                <div className="statistic-div">
                    <div className="header-statistic-div">
                    <div className="country1-statistic-block red-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country1)}</p>
                    <div className="country1-statistic-block blue-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country2)}</p>
                    </div>
                </div>
                <div className="statistic-line" style={corelationToPersent(country1,country2,"totalPopulation",'totalPopulation')}>
                    <p className="statistic-line-country1 statistic-line-country red-block"> <span className='count-for-statistic'>{forFindData(country1,"totalPopulation",'totalPopulation')}</span></p>
                    <p className="statistic-line-country2 statistic-line-country blue-block"><span className='count-for-statistic'>{forFindData(country2,"totalPopulation",'totalPopulation')}</span></p>
                </div>


                <div className='country-chracter-div'>
                <div className="country1-chracter country-chracter">
                    <p className="total-population" >Available ManPower (Rnk {forFindData(country1,"manPower",'ratingManPower')})</p>
                    <p className="country1-pwrIndex-info">{forFindData(country1,"manPower",'manPower')}</p>
                    <p className={diferensOfPopulation(country1,country2,"manPower",'manPower')?"green-dif":"red-dif"}>(Diff: {diferensOfPopulation(country1,country2,"manPower",'manPower')?`${countryDifferentsPoputation}`:`-${countryDifferentsPoputation}`})</p>
                </div>
                <div className="country2-chracter country-chracter">
                    <p className="total-population">Available ManPower  (Rnk {forFindData(country2,"manPower",'ratingManPower')})</p>
                    <p className="count-population">{forFindData(country2,"manPower",'manPower')}</p>
                    <p className={diferensOfPopulation(country1,country2,"manPower",'manPower')?"red-dif":"green-dif"}>(Diff:  {diferensOfPopulation(country1,country2,"manPower",'manPower')?`-${countryDifferentsPoputation}`:`${countryDifferentsPoputation}`})</p>
                </div>
                </div>
                <div className="statistic-div">
                    <div className="header-statistic-div">
                    <div className="country1-statistic-block red-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country1)}</p>
                    <div className="country1-statistic-block blue-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country2)}</p>
                    </div>
                </div>
                <div className="statistic-line" style={corelationToPersent(country1,country2,"manPower",'manPower')}>
                    <p className="statistic-line-country1 statistic-line-country red-block"> <span className='count-for-statistic'>{forFindData(country1,"manPower",'manPower')}</span></p>
                    <p className="statistic-line-country2 statistic-line-country blue-block"><span className='count-for-statistic'>{forFindData(country2,"manPower",'manPower')}</span></p>
                </div>

{/*  */}
                <div className="header_compare-div-charact">
                    <img src={require(`../../images/countries/${country1}.jpg`)} alt="" className="country1-compare-img" />
                    <h2 className="name-compare-h2">FINANCIALS</h2>
                    <img src={require(`../../images/countries/${country2}.jpg`)} alt="" className="country2-compare-img" />
                </div>
                <div className='country-chracter-div'>
                <div className="country1-chracter country-chracter">
                    <p className="total-population" >Defense Budget (Rnk {forFindData(country1,"defenseSpending",'RatingDefenseSpending')})</p>
                    <p className="country1-pwrIndex-info">{forFindData(country1,"defenseSpending",'airPower')}</p>
                    <p className={diferensOfPopulation(country1,country2,"defenseSpending",'airPower')?"green-dif":"red-dif"}>(Diff: {diferensOfPopulation(country1,country2,"defenseSpending",'airPower')?`$${countryDifferentsPoputation}`:`-$${countryDifferentsPoputation}`})</p>
                </div>
                <div className="country2-chracter country-chracter">
                    <p className="total-population">Defense Budget (Rnk {forFindData(country2,"defenseSpending",'RatingDefenseSpending')})</p>
                    <p className="count-population">{forFindData(country2,"defenseSpending",'airPower')}</p>
                    <p className={diferensOfPopulation(country1,country2,"defenseSpending",'airPower')?"red-dif":"green-dif"}>(Diff:  {diferensOfPopulation(country1,country2,"defenseSpending",'airPower')?`-$${countryDifferentsPoputation}`:`$${countryDifferentsPoputation}`})</p>
                </div>
                </div>
                <div className="statistic-div">
                    <div className="header-statistic-div">
                    <div className="country1-statistic-block red-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country1)}</p>
                    <div className="country1-statistic-block blue-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country2)}</p>
                    </div>
                </div>
                <div className="statistic-line" style={corelationToPersent(country1,country2,"defenseSpending",'airPower')}>
                    <p className="statistic-line-country1 statistic-line-country red-block"> <span className='count-for-statistic'>{forFindData(country1,"defenseSpending",'airPower')}</span></p>
                    <p className="statistic-line-country2 statistic-line-country blue-block"><span className='count-for-statistic'>{forFindData(country2,"defenseSpending",'airPower')}</span></p>
                </div>


                {/*  */}
                <div className="header_compare-div-charact">
                    <img src={require(`../../images/countries/${country1}.jpg`)} alt="" className="country1-compare-img" />
                    <h2 className="name-compare-h2">AIRPOWER</h2>
                    <img src={require(`../../images/countries/${country2}.jpg`)} alt="" className="country2-compare-img" />
                </div>
                <div className='country-chracter-div'>
                <div className="country1-chracter country-chracter">
                    <p className="total-population" >Total Aircraft (Rnk {forFindData(country1,"AirPower",'ratingAirPower')})</p>
                    <p className="country1-pwrIndex-info">{forFindData(country1,"AirPower",'airPower')}</p>
                    <p className={diferensOfPopulation(country1,country2,"AirPower",'airPower')?"green-dif":"red-dif"}>(Diff: {diferensOfPopulation(country1,country2,"AirPower",'airPower')?`${countryDifferentsPoputation}`:`-${countryDifferentsPoputation}`})</p>
                </div>
                <div className="country2-chracter country-chracter">
                    <p className="total-population">Total Aircraft (Rnk {forFindData(country2,"AirPower",'ratingAirPower')})</p>
                    <p className="count-population">{forFindData(country2,"AirPower",'airPower')}</p>
                    <p className={diferensOfPopulation(country1,country2,"AirPower",'airPower')?"red-dif":"green-dif"}>(Diff:  {diferensOfPopulation(country1,country2,"AirPower",'airPower')?`-${countryDifferentsPoputation}`:`${countryDifferentsPoputation}`})</p>
                </div>
                </div>
                <div className="statistic-div">
                    <div className="header-statistic-div">
                    <div className="country1-statistic-block red-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country1)}</p>
                    <div className="country1-statistic-block blue-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country2)}</p>
                    </div>
                </div>
                <div className="statistic-line" style={corelationToPersent(country1,country2,"AirPower",'airPower')}>
                    <p className="statistic-line-country1 statistic-line-country red-block"> <span className='count-for-statistic'>{forFindData(country1,"AirPower",'airPower')}</span></p>
                    <p className="statistic-line-country2 statistic-line-country blue-block"><span className='count-for-statistic'>{forFindData(country2,"AirPower",'airPower')}</span></p>
                </div>


                {/*  */}
                <div className="header_compare-div-charact">
                    <img src={require(`../../images/countries/${country1}.jpg`)} alt="" className="country1-compare-img" />
                    <h2 className="name-compare-h2">LANDPOWER</h2>
                    <img src={require(`../../images/countries/${country2}.jpg`)} alt="" className="country2-compare-img" />
                </div>
                <div className='country-chracter-div'>
                <div className="country1-chracter country-chracter">
                    <p className="total-population" >Armored Vehicles (Rnk {forFindData(country1,"armoredVehicle",'ratingArmoredVehicle')})</p>
                    <p className="country1-pwrIndex-info">{forFindData(country1,"armoredVehicle",'armoredVehicle')}</p>
                    <p className={diferensOfPopulation(country1,country2,"armoredVehicle",'armoredVehicle')?"green-dif":"red-dif"}>(Diff: {diferensOfPopulation(country1,country2,"armoredVehicle",'armoredVehicle')?`${countryDifferentsPoputation}`:`-${countryDifferentsPoputation}`})</p>
                </div>
                <div className="country2-chracter country-chracter">
                    <p className="total-population">Armored Vehicles (Rnk {forFindData(country2,"armoredVehicle",'ratingArmoredVehicle')})</p>
                    <p className="count-population">{forFindData(country2,"armoredVehicle",'armoredVehicle')}</p>
                    <p className={diferensOfPopulation(country1,country2,"armoredVehicle",'armoredVehicle')?"red-dif":"green-dif"}>(Diff:  {diferensOfPopulation(country1,country2,"armoredVehicle",'armoredVehicle')?`-${countryDifferentsPoputation}`:`${countryDifferentsPoputation}`})</p>
                </div>
                </div>
                <div className="statistic-div">
                    <div className="header-statistic-div">
                    <div className="country1-statistic-block red-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country1)}</p>
                    <div className="country1-statistic-block blue-block"></div>
                    <p className='name-country-statistic-block'>{capitalizeFirstLetter(country2)}</p>
                    </div>
                </div>
                <div className="statistic-line" style={corelationToPersent(country1,country2,"armoredVehicle",'armoredVehicle')}>
                    <p className="statistic-line-country1 statistic-line-country red-block"> <span className='count-for-statistic'>{forFindData(country1,"armoredVehicle",'armoredVehicle')}</span></p>
                    <p className="statistic-line-country2 statistic-line-country blue-block"><span className='count-for-statistic'>{forFindData(country2,"armoredVehicle",'armoredVehicle')}</span></p>
                </div>   

            </div>
        </main>
        </div>
    );
}

export default CountriesComparison;