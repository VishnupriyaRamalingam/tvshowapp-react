
import { Fivestartrating } from "../ratings/fivestarrating";
import s from "./style.module.css";
export function Tvshowdetail({tvshow}){
    const rating =tvshow.vote_average / 2;
    return(
        <div>
            <div className={s.title}>{tvshow.name}</div>
            <div className={s.rating_container}>
                <Fivestartrating rating={rating}/>
                <span className={s.rating}>{rating}/5</span>
                
                </div>
            <div className={s.overview}>{tvshow.overview}</div>
        </div>
    );
}