import { useEffect } from "react";
import { useState } from "react";
import { Tv_show } from "./api/tvshow"
import s from "./style.module.css";
import { BACKDROP_BASE_URL} from "./config";
import { Tvshowdetail } from "./components/tvshowdetails/tvshowdetail";
import { Logo } from "./components/logo/logo";
import logoimg from "./assets/images/logo.png";
import { Tvshowli } from "./tvshowlist/tvshowli";
import { Searchbar } from "./components/searchbar/searchbar";


export function App(){

    const[currentTvshow,setCurrentTvshow]=useState();
    const[recommendationList,setRecommendationList]=useState([]);
    useEffect(()=>{
        
        fetchpopulars();

    },[]);

    
    useEffect(()=>{
        if(currentTvshow){
            fetchRecommentations(currentTvshow.id);
        }
       

    },[currentTvshow]);
    async function fetchpopulars(){
        try{
        const popularTvshowlist=await Tv_show.fetchpopulars();
        if(popularTvshowlist.length>0){
            setCurrentTvshow(popularTvshowlist[0]);
        }
    }
    catch (error) {
        alert("Something went wrong when fetching the popular tv shows");
      }
    }

    async function fetchRecommentations(tvshowid) {
        try{
        const recommendationListResp = await Tv_show.fetchRecommentations(
            tvshowid
        );
        if (recommendationListResp.length > 0) {
          setRecommendationList(recommendationListResp.slice(0, 10));
        }
      }catch (error) {
        alert("Something went wrong when fetching the popular tv shows");
      }
    }
      
    

    

    function updateCurrentTvshow(tvshow){
        setCurrentTvshow(tvshow);

    }
    async function fetchByTitle(title) {
        try{

        const searchResponse = await Tv_show.fetchByTitle(
           title
        );
        if (searchResponse.length > 0) {
          setCurrentTvshow(searchResponse[0]);
        }
      }
      catch (error) {
        alert("Something went wrong when fetching the popular tv shows");
      }
    }
    
    


    return(
        <div className={s.main_container}
        style={{
            background: currentTvshow
              ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                 url("${BACKDROP_BASE_URL}${currentTvshow.backdrop_path}") no-repeat center / cover`
              : "black",
          }}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                    <Logo  
                    title='Watowatch' 
                    subtitle="find a show you may like"
                    img={logoimg}
                    />
                </div>
                <div className="col-md-12 col-lg-4">
                    <Searchbar onSubmit={fetchByTitle}/>
                </div>
                </div>
            </div>
           
            <div className={s.tv_showdisplay}>
                {currentTvshow  && <Tvshowdetail tvshow={currentTvshow}/>}
                </div>

            <div className={s.recommended_tvshows}>
                {currentTvshow  && (
                <Tvshowli 
                onClickItem={updateCurrentTvshow} 
                tvShowli={recommendationList}
                />
                )}
            

                </div>
                </div>
    );
}