import axios from "axios";
import React, { useEffect, useState } from "react";
import Results from "./Results";
import * as AppConstant from "./AppConstant";
import useDropdown from "./useDropdown";
import ColorContext from "./ColorContext";

const SearchArea = ()=>{
    //hooks( can not use in a for loop or in a if block.|| always write hooks in the starting of the component )
    const [themeColor,setThemeColor] = useState(ColorContext)
    
    const [keyword,setKeyword] =  useState("budgies")
    const [videos,setVideos] = useState([])
    const orderList = ["date","relevance","rating","title","viewCount"]
    const [order,OrderDropDown] = useDropdown("Order By","relevance",orderList)

    const [safeSearch,SafesearchDropDown] = useDropdown("Safe Search","none",["moderate","none","strict"])

    const [checked,setChecked] = useState(true)
    const [advancedParams,setAdvancedParams] = useState(``)


    useEffect(()=>{
        if(checked){
            setAdvancedParams(`&order=${order}&safeSearch=${safeSearch}`)
        }else{
            setAdvancedParams(``)
        }
    },[checked,order,safeSearch])

    const searchRequest = ()=>{
        axios.get(`${AppConstant.SEARCH_URL}&q=${keyword}${advancedParams}`)
        .then((res)=>{
            const { items } = res.data;
            console.log(items)
            setVideos(items)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(

        <div className="search-area">
            <form onSubmit={(e)=>{
                e.preventDefault()
                searchRequest();
            }}>
                <label htmlFor="keyword">Search
                    <input type="text" name="text" id="keyword" value={keyword} onChange={(e)=> setKeyword(e.target.value)}/>
                </label>
                <label htmlFor="advance">
                    Advance Search
                    <input 
                    type="checkbox" 
                    id="advance" 
                    checked={checked}
                    onChange={()=>setChecked(!checked)}
                    />
                </label>
                {
                    checked?<div>
                        <OrderDropDown />
                        <SafesearchDropDown />
                        <label htmlFor="themeColor">
                            Theme Color
                            <select 
                            value = {themeColor}
                            onChange = {(e)=>setThemeColor(e.target.value)}
                            onBlur = {(e)=>setThemeColor(e.target.value)}
                            >
                                <option value="#ad343e">Dark Red</option>
                                <option value="darkblue">Dark Blue</option>
                                <option value="green">Green</option>
                                <option value="aqua">Aqua</option>
                            </select>
                        </label>
                    </div>:null
                }
                <button style={{backgroundColor : themeColor}}>Search <i className="fa fa-search"></i></button>
            </form>

            <Results videos={videos} />
        </div>
    )
}

export default SearchArea;