import axios from 'axios';
//import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fakedata";
import { BASE_URL,API_KEY_PARAM } from "../config";
export class Tv_show{
    static async fetchpopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results;
        
        //return FAKE_POPULARS;
    }
    static async fetchRecommentations(tvshowid){
        const response = await axios.get(
            `${BASE_URL}tv/${tvshowid}/recommendations${API_KEY_PARAM}`
          );
          return response.data.results;
        
      //return FAKE_RECOMMENDATIONS;
   
}
static async fetchByTitle(title){
    const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;

}
}