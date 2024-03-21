// import React,{useState, useEffect} from 'react'
// import Language from './Language';
// import './Main.css'

// const Main = () => {
//     const [languageOutput, setLanguageOutput] = useState("");
//     const [language, setLanguage] = useState([]);

// useEffect(()=>{
//     getLanguages();
// },[]);

// async function getLanguages(){
//     const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c97f50abb2msh3616900d606885ep1f45aajsn0970ab5aca5d',
//             'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         const newData = JSON.parse(result);
//         setLanguage(newData.data.languages);
//     } catch (error) {
//         alert("error");
//     }

// }







// async function fetchData (selectedLanguage, translatedLanguage, inputValue){
//     const url = 'https://text-translator2.p.rapidapi.com/translate';
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Key': 'c97f50abb2msh3616900d606885ep1f45aajsn0970ab5aca5d',
//             'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
//         },
//         body: new URLSearchParams({
//             source_language: selectedLanguage,
//             target_language: translatedLanguage,
//             text: inputValue
//         })
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//        const newResult =JSON.parse(result);
//        setLanguageOutput(newResult.data.translatedText);
//     } catch (error) {
//        alert("error");
//     }
// }

// function formInput(e){
//     e.preventDefault();

// const selectedLanguage = e.target.children[0].value;
// const translatedLanguage = e.target.children[1].value;
// const inputValue = e.target.children[2].value;
// fetchData(selectedLanguage, translatedLanguage, inputValue);
// }

//   return (
//    <>
//    <h1 className='h1'>Text Tranlator</h1>
//    <div className="flex">
//     <form action="" onSubmit={(e)=>formInput(e)}>
//         <select name="Select Language" id="sel_1">
//             <option>Your Language</option>
            
//             {
//                 language.map((ele)=>(<Language key={'sel'+ Math.floor(Math.random()*10000)} dataObj={ele}/>))
//             }
//         </select>
//         <select name="Converted Language" id="sel_2">
//             <option>Converted Language</option>
           
//             {
//                 language.map((ele)=>(<Language key={'trans'+ Math.floor(Math.random()*10000)} dataObj={ele}/>))
//             }
//         </select><br></br>
//         <textarea className='textarea' rows={"10"} cols={"54"}></textarea> <br></br>
//         <button className='btn'>Translate</button>
//     </form>


//     <div className="display">
//         {languageOutput}
//     </div>

//    </div>
   
//    </>
//   )
// }

// export default Main










import React,{useState, useEffect} from 'react'
import Language from './Language';
import './Main.css'

const Main = () => {
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState([]);

useEffect(()=>{
getLanguages();
},[]);

async function getLanguages(){
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c97f50abb2msh3616900d606885ep1f45aajsn0970ab5aca5d',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // const newResult = JSON.stringify(result)
        // console.log(JSON.parse(newResult).data);
        const newData = JSON.parse(result);
        // console.log(newData.data.languages);
        setLanguage(newData.data.languages);
    } catch (error) {
        alert("Limit exhausted");
    }

}







async function fetchData (selectedLanguage, translatedLanguage, inputValue){
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'c97f50abb2msh3616900d606885ep1f45aajsn0970ab5aca5d',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: selectedLanguage,
            target_language: translatedLanguage,
            text: inputValue
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
       const newResult =JSON.parse(result);
       setOutput(newResult.data.translatedText);
    } catch (error) {
       alert("Limit exhausted");
    }
}

function formInput(e){
    e.preventDefault();

const selectedLanguage = e.target.children[0].value;
const translatedLanguage = e.target.children[1].value;
const inputValue = e.target.children[2].value;
fetchData(selectedLanguage, translatedLanguage, inputValue);
}

  return (
   <>
   <h1 className='h1'>Text Tranlator</h1>
   <main className="flex">
    <form action="" onSubmit={(e)=>formInput(e)}>
        <select name="Select Language" id="sel_1">
            <option value="" disabled="true">Select Your Language</option>
            
            {
                language.map((ele)=>(<Language key={'sel'+ Math.floor(Math.random()*10000)} dataObj={ele}/>))
            }
        </select>
        <select name="Converted Language" id="sel_2">
            <option value="" disabled="true">
                Select Converted Language
            </option>
           
            {
                language.map((ele)=>(<Language key={'trans'+ Math.floor(Math.random()*10000)} dataObj={ele}/>))
            }
        </select> 
        <input className='textarea' type="text" />
        <button className='btn'>Translate</button>
    </form>


    <div className="display">
    {output}
    </div>

   </main>
   
   </>
  )
}

export default Main