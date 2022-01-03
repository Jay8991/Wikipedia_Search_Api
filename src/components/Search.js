import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Results } from './Results';

export const Search = () => {
    // 2 states one for the word and other for results
    const [searchWord, setSearchWord] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    const search_data = async (event) => {
      event.preventDefault() 
      //check if search word is empty
      if(searchWord === ""){
        return;
      }
      // get url with search being dynamic
      let url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&&srlimit=10&srsearch=${searchWord}`
      // console.log(url)   
      // get request 
      let response = await axios.get(url)
      // console.log(response.data.query.search)
      setSearchResults(response.data.query.search)
    }

    return (
        <div >
          <div className='container'>
            <h1 className='mt-3'>Search Wikipedia</h1>
            <form onSubmit={search_data}>
              <input className="form-control mt-2" type="text" placeholder="Search Wiki" onChange={(e) => {
                setSearchWord(e.target.value)
              }} />
            </form>
            <hr />    
          </div>
          <div>
            <ul className="list-group">
                { 
                  searchResults.map(result => <Results key={result.pageid} r={result}/>)
                }
            </ul>
          </div>
        </div>
    );
}


