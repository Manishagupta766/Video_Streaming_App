import React, { useEffect, useState } from "react";
import Logo from "../Utils/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { SEARCH_API } from "../Utils/constants";
import { json } from "react-router-dom";
import store from '../Utils/store';
import { cacheResults } from "../Utils/searchSlice";


function Head() {
  const [SearchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
const [ShowSuggestions , SetShowSuggestions] = useState(false);

  const searchCache=useSelector((store)=>store.search);

  const getSearchSuggestions = async () => {
    const response = await fetch(SEARCH_API +SearchQuery);
    const data = await response.json();
    console.log(data);
    setSuggestions(data[1] || []);
    dispatch(cacheResults({
      [SearchQuery] :data[1]
    }))
  };
  useEffect(() => {
    if (SearchQuery.trim() !== "") {
      const timer = setTimeout(() => 
      {
        if(searchCache[SearchQuery]){
          setSuggestions(searchCache[SearchQuery]);
        }else{
          getSearchSuggestions();
        }
      },200);
      return () => clearTimeout(timer);
    };
  }, [SearchQuery]);
 
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 mr-0 shadow-lg ">
      
      <div className="flex items-center col-span-1 ">
        <img
          alt="menu"
          className="h-10 cursor-pointer"
          onClick={toggleMenuHandler}
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <a href="/">
          <img className="h-10 ml-2" alt="logo" src={Logo} />
        </a>
      </div>

      <div className="col-span-10 relative flex items-center justify-center">
        <div className="w-full max-w-xl">
          <div className="flex ">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-l-full outline-none focus:border-blue-500"
              value={SearchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              onFocus={()=>SetShowSuggestions(true)}

              onBlur={()=>SetShowSuggestions(false)}
            />
            <button className="bg-gray-100 border border-gray-300 p-2 rounded-r-full">
              🔍
            </button>
          </div>
          {ShowSuggestions && (
             <div
             className="absolute  bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 w-[45.5%]"
             
             
           >
            
              <ul >
                {suggestions.map((suggestion, index) => (
                  
                  <li
                    key={index}
                    
                    className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                  <p>🔍</p>  {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1 flex justify-end items-center">
        <img
          className="h-8 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          alt="user-profile"
        />
      </div>
      
    </div>
  );
}

export default Head;
