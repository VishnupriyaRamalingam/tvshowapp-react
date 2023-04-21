import { Tvshowlistitem } from '../components/tvshowlistitem/tvshowlist';
import s from './style.module.css';
export function Tvshowli({tvShowli,onClickItem}){
    return(
        <div>
            <div className={s.title}>
                you'll probably like:
            </div>
            <div className={s.list}>
                {tvShowli.map((tvshow)=>{
                return(
                    <span className={s.tv_show_item} key={tvshow.id}>
                    <Tvshowlistitem
                    tvshow={tvshow}
                    onClick={onClickItem}/>
                    </span>
                );
                })}
            </div>
        </div>

    );
}