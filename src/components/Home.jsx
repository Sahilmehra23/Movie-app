import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
import axios from 'axios'
import { useState,useEffect } from 'react'

// const Home = () => {
//   const[list,setList] = useState()
//   useEffect(() => {
//     axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=806223231028bc12d5ba2f0219deefbb&language=en-US&page=1')
//     .then(({data})=> setList(data.results))
//     },[])
//   console.log(list)
//   return (
//     <div>
    
//     <div className="container">
//       <div className="grid">
//         <img src={`https://image.tmdb.org/t/p/w200/${ list && list[1].poster_path}`} alt="" />
        
//       </div>
//     </div>
//     <Navbar/>
//     Home
//     <Footer/>
//     </div>
//   )
// }
const Home = () => {
  const [list, setWeather] = useState([]);
  useEffect(( ) => {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=806223231028bc12d5ba2f0219deefbb&language=en-US&page=1')
      .then(({data}) => {
          setWeather(data.results)
      })    
}, []);

return(
  <>
   { list.map((wd) => {
      return (
          <div className="weatherApp" key={wd.id}>
              {/* <h1>{wd.countryCode}</h1>
              <h1>{wd.id}</h1>
              <h1>{wd.name}</h1>
              <h1>{wd.regionCode}</h1> */}
             
              <img src={`https://image.tmdb.org/t/p/w200/${ list && wd.poster_path}`} alt={`${list && wd.title}poster`} />
              {/* <img src={wd.poster_path} alt="" /> */}
              <h1>{wd.title}</h1>
              {/* <p>{wd.overview}</p> */}


             
          </div>
          )
    })
  }
  {/* <Footer/>
  <Navbar/> */}
  </>
  
);
 
}


export default Home