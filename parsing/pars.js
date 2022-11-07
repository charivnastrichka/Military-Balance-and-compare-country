
const axios = require('axios')
const cheerio = require('cheerio')
const fs=require('fs');
const path=require('path');
let division=(num)=>{
    num=num/2;
    num=num+1;
    return num;
}
//             // get countries name and after rating number
// axios.get('https://www.globalfirepower.com/countries-listing.php').then(html => {
//     const $ = cheerio.load(html.data)
//     let countryName = [];
//     $('.countryName > .textWhite, .countryName > .textLarge, .textShadow').each((i, elem) => {
//         if(i%2===0){
//             if(i===282) countryName += `${"{\n"+'"number": '+ division(i) +",\n"+'"country": '+'"'+$(elem).text().trim()+'"'+"\n}"}\n`

//             else countryName += `${"{\n"+'"numberOnRating": '+ division(i) +",\n"+'"country": '+'"'+$(elem).text().trim()+'"'+"\n}"+","}\n`
//         }

//     })
//     // console.log(countryName);

//     //write in file
//     fs.writeFile('./JSON_BD/countries.json',`{\n "countries":[\n ${countryName} ]}`,(err)=>{
//         if(err) console.log(err);
//     })
// })

//                 //get totalPopulation with name country
// axios.get('https://www.globalfirepower.com/total-population-by-country.php').then(html => {
//     const $ = cheerio.load(html.data)
//     let totalPopulation=[];
//     $('body > div:nth-child(16) > div > a > div > div.topRow > div.countryNameContainer > div.longFormName > span,body > div:nth-child(16) > div > a> div > div.topRow > div.valueContainer > span > span').each((i, elem) => {
//         if(i%2===0){
//             totalPopulation += `{\n "country": "${$(elem).text().trim()}",\n"ratingTotalPopulation": "${division(i)}",`
//         }
//         else {
//             if ($(elem).text().trim()==='354,234') {
//                 totalPopulation += `\n "totalPopulation": "${$(elem).text().trim()}"\n}\n`
//             }
//             else {
//                 totalPopulation += `\n "totalPopulation": "${$(elem).text().trim()}"\n},\n`
//             }
//         }
//
//     })
//     // console.log(totalPopulation);
//
//   // write in file
//     fs.writeFile('./JSON_BD/totalPopulation.json',`{\n "totalPopulation":[\n ${totalPopulation} ]}`,(err)=>{
//         if(err) console.log(err);
//     })
// })



function parsing(url,selectorName,arrName,dataName,trigger,dataRating,pathForWrite){
    axios.get(url).then(html => {
        const $ = cheerio.load(html.data)
         arrName = [];
        $(selectorName).each((i, elem) => {
            if (i % 2 === 0) arrName += `{\n "country": "${$(elem).text().trim()}",\n"${dataRating}": "${division(i)}",`
            else {
                if ($(elem).text().replace(/\s/g,'') === trigger) arrName += `\n "${dataName}": "${$(elem).text().replace(/\s/g,'')}"\n}\n`

                else arrName += `\n "${dataName}": "${$(elem).text().replace(/\s/g,'')}"\n},\n`
            }
        })
        console.log(arrName)
        fs.writeFile(pathForWrite, `{\n "${dataName}":[\n ${arrName} ]}`, (err) => {
            if (err) console.log(err);
        })
    })
}
                //    //defenseSpending
// parsing('https://www.globalfirepower.com/defense-spending-budget.php',
//     'body > div:nth-child(11) > div > a > div > div.topRow > div.countryNameContainer > div.longFormName > span,body > div:nth-child(11) > div > a > div > div.topRow > div.valueContainer > span > span',
//     'defenseSpending',"defenseSpending","$0","RatingDefenseSpending",'./JSON_BD/defenseSpending.json')

                ////get airPower with name country
// parsing("https://www.globalfirepower.com/aircraft-total.php",
//     'body > div:nth-child(14) > div > a > div > div.topRow > div.countryNameContainer > div.longFormName > span,body > div:nth-child(14) > div > a > div > div.topRow > div.valueContainer > span > span',
//     "airPower","airPower","145","ratingAirPower","./JSON_BD/airPower.json")


            ////get manPower with name country

// parsing('https://www.globalfirepower.com/available-military-manpower.php',
//     'body > div:nth-child(11) > div > a > div > div.topRow > div.countryNameContainer > div.longFormName > span,body > div:nth-child(11) > div > a > div > div.topRow > div.valueContainer > span > span',
//     'manPower','manPower',"145",'ratingManPower','./JSON_BD/manPower.json')  ;
//
//                 ////get Armored Vehicle with name country
//
// parsing('https://www.globalfirepower.com/armor-apc-total.php',
//     'body > div:nth-child(11) > div > a > div > div.topRow > div.countryNameContainer > div.longFormName > span,body > div:nth-child(11) > div > a > div > div.topRow > div.valueContainer > span > span',
//     'armoredVehicle','armoredVehicle',"0",'ratingArmoredVehicle','./JSON_BD/armoredVehicle.json')  ;

