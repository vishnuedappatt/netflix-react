import React  from 'react'
import './RowPost.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [youId,setYouId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  },[])
 

  // for youtube
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const idHandler=(id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          console.log(response.data)
          if (response.data.results.length !== 0){
            setYouId(response.data.results[0])
          }else{
            console.log('No data present')
          }
        })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
           {movies.map((obj)=>
             <img onClick={()=>idHandler(obj.id)} className={props.isSmall ?'small-cards':'cards'} alt="cards" src={`${imageUrl+obj.backdrop_path}`}  />
           )}
           
            
        </div>
          { youId && <Youtube opts={opts} videoId={youId.key} />} 
    </div>
  )
}

export default RowPost