import s from "./style.module.css";
export function Logo({title,subtitle,img}){
    return(
        <div>
            <div className={s.container}> 
            <img className={s.img} src={img} alt="Logo"/>
            <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle}>{subtitle}</span>
        </div >
  
        

    );
    
}