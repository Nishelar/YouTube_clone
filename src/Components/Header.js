import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { SEARCH_API } from "../Utils/constants";
import { cacheResult } from "../Utils/searchSlice";

const HeaderComponent=()=>{
    const[searchQuery,setSearchQuery]=useState("");
    const[searchSuggestions,setSearchSuggestions]=useState([]);
    const[showSearchSuggestions,setShowSearchSuggestions]=useState(false);
    const dispatch=useDispatch();
    const cacheData=useSelector(store=>store.search)
    const getSearchSuggestions=async()=>{
        const data=await fetch(SEARCH_API+searchQuery);
        const json=await data.json();
        setSearchSuggestions(json[1]);
        dispatch(cacheResult({[searchQuery]:json[1]}))
    }

    useEffect(()=>{
        
        const timer=setTimeout(()=>{
            if(cacheData[searchQuery]){
                setSearchSuggestions(cacheData[searchQuery])
                console.log(cacheData[searchQuery])
            }
            else{
            getSearchSuggestions();
            }   
        },200)
        return ()=>{
            clearTimeout(timer)
        }

    },[searchQuery])

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return(
        <div className="items-center shadow-lg grid grid-flow-col"> 
            <div className="flex py-2 items-center mr-1 sm:col-span-1" >
                <img onClick={()=>toggleMenuHandler()}  className="h-3 cursor-pointer mx-1 flex-shrink-0 sm:h-8 pl-3" src="https://icons-for-free.com/download-icon-hamburger+button-1324760585124590953_256.ico" alt="Hamburger icon"/>
                <img className="h-6 mx-1 flex-shrink-0 sm:h-12 px-2" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="Youtube logo"/>
            </div>
            <div className="second  flex justify-center py-1 col-span-10">
                <div className="flex justify-center w-[100%] h-[100%]" >
                 <input className="w-1/2 rounded-l-full border-gray-300 border-2 px-6" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onBlur={()=>setShowSearchSuggestions(false)} onFocus={()=>setShowSearchSuggestions(true)}/>
                 <button className="bg-gray-200 rounded-r-full px-2 py-2 sm:py-2 sm:px-4"><img className="h-2 sm:h-6 min-h-full flex-shrink-0" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt=""/></button>
                </div>
                { showSearchSuggestions&&searchSuggestions.length!==0?
                <div className="mt-12 absolute bg-white py-2  w-[35rem] shadow-lg rounded-lg border border-gray-200">
                      <ul>
                      {searchSuggestions.map((item,index)=>{
                        return (
                                <li key={index} onClick={()=>setSearchQuery(item)} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍{item}</li>
                        )
                      })}
                      </ul>
                    
                </div>:null
}
            </div>
            <div className="third  flex justify-end px-2 mx-auto col-span-1 sm:px-6">
                <img className="h-6 min-h-full flex-shrink-0" src="https://cdn-icons-png.flaticon.com/512/61/61205.png" alt="account_info"/>
            </div>
        </div>
    )
}

export default HeaderComponent;