import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from "../../../Hooks/UseFetch"
import Carousel from '../../../components/carousel/Carousel'
// import Genres from '../../../components/genres/Genres'
const TopRated = () => {
    const [endPoint, setEndPoint] = useState("movie")
    
    const {data , loading} = useFetch(`/${endPoint}/top_rated`)


    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    };
  return (
    <div className='carouselSection'>
     <ContentWrapper>
        <span className='carouselTitle'>
           Rop Rated
        </span>
        <SwitchTab data ={["Movies" , "TV Shows"]} onTabChange={onTabChange}/>
     </ContentWrapper>
     <Carousel
      data = {data?.results} 
      loading ={loading} 
      endpoint={endPoint}/>
      

    </div>
  )
}
export default TopRated