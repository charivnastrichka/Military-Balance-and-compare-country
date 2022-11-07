import React from 'react'
import "./InfoAboutCountry.css"
import db from '../../JSON_BD/TotalCharacteristic.db.json'
import MainBlank from '../mainBlank/MainBlank'
import { useParams } from 'react-router-dom'
const InfoAboutCountry=()=> {

    function capitalizeFirstLetter(countryName) {
        return countryName.replace(/-/ig,' ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ').replace(/And/ig,'and').replace(/Of The/ig,'of the')
      }
      let forFindData=(nameCountry,nameArr,nameObj)=>{
        nameCountry=capitalizeFirstLetter(nameCountry);
        for(let i=0;i<db[nameArr].length;i++) if(db[nameArr][i].country===nameCountry) return nameObj=db[nameArr][i][nameObj];
      }

    const {nameCountry}=useParams();
    console.log(nameCountry)
    const hdr=<h1 className='h1_info-part'>2022 {capitalizeFirstLetter(nameCountry).replace(/Russia/ig,'ᵣussia')} Military Strength</h1>;
    const underHdr=<h2 className="text-under-h1">{capitalizeFirstLetter(nameCountry).replace(/Russia/ig,'ᵣussia')} | 2022</h2>;
    const txtOne= <h3 className='h3_main-text txt'> <img src={require(`../../images/countries/${nameCountry}.jpg`)} alt="" /> </h3>
    const txtTwo=  <p className="text-under-h3 text-part-one txt">For 2022, {capitalizeFirstLetter(nameCountry).replace(/Russia/ig,'ᵣussia')} is ranked <span style={{fontWeight:"bold"}}>{forFindData(nameCountry,"PwrIndx","ratingPwrIndx")}</span> of 142 out of the countries considered for the <a style={{color:"black"}} href="/main">annual GFP review</a>. It holds a PwrIndx* score of <span style={{fontWeight:"bold"}}>{forFindData(nameCountry,"PwrIndx","PwrIndx")}</span> (a score of 0.0000 is considered 'perfect'). This entry last updated on 04/09/2022.</p>;
    const txtThree=<p className="text-under-h3 text-part-one txt"></p>;
    const txtFour=<p className='note-text txt'>
    *Each nation is assessed on individual and collective values processed through our in-house formula to generate its 'PwrIndx' score. Some values are estimated when official numbers are not available. </p>;
    const imgPath=<img className='img-earth' src={require(`../../images/other/globe.jpg`)} alt="" />;

    return (
        <div className="main-page">
        <main className='main-content'>
            <MainBlank hdr={hdr} underHdr={underHdr} txtOne={txtOne} txtTwo={txtTwo} txtThree={txtThree} txtFour={txtFour} imgPath={imgPath}/>
        </main>
        </div>
    );
}

export default InfoAboutCountry;