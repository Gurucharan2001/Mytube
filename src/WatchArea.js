import axios from "axios";
import React from "react";

// const WatchArea = (props)=>{
//     return (
//         <h2>Watch Area {props.id}</h2>
//     )
// }

//class components
class WatchArea extends React.Component{
    constructor(){
        super()
        this.state = { loading:true }
    }

    //lifecycle method!!
    componentDidMount(){  //it work one time when the component is created!!!
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=${process.env.API_KEY}&id=${this.props.id}`)
        .then((res)=>{
            const item = res.data.items[0]
            this.setState({
                title:item.snippet.title,
                views:item.statistics.viewCount,
                description:item.snippet.description,
                channel:item.snippet.channelTitle,
                like:item.statistics.likeCount,
                url:item.id,
                loading:false
            })
        })
        .catch((err)=>console.log(err))
    }

    render(){
        if(this.state.loading){
            <h3>Loading...</h3>
        }

        const { title,views,description,channel,like,url } = this.state

        return(
            <div className="watch-area">
                <div className="player">
                    <iframe src={`//www.youtube.com/embed/${url}`} 
                        width="1050"
                        height="500"
                        allow="autoplay encrypted-media"
                        frameBorder="0"
                        title={title}>

                    </iframe>
                </div>
                <h1 className="header-font">{title}</h1>
                <div className="video-information">
                    <div className="view inner-font">{views} Views</div>
                    <div className="like inner-font">{like} Likes</div>
                </div>
                <div className="channel-name">{channel} Channel</div>
                <p className="inner-font">{description} Description</p>
            </div>
        )
    }
}

export default WatchArea;