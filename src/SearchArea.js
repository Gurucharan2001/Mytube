import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

const SearchArea = ()=>{
    //hooks( can not use in a for loop or in a if block.|| always write hooks in the starting of the component )
    const [keyword,setKeyword] =  useState("budgies");
    const [videos,setVideos] = useState([])

    const searchRequest = ()=>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=${process.env.API_KEY}`)
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
                <button >Search <i className="fa fa-search"></i></button>
            </form>

            <Results videos={videos} />
        </div>
    )
}

export default SearchArea;