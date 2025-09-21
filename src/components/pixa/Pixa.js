import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import PixaInfo from './PixaInfo'
import PixaInput from './PixaInput'
const API_KEY = "52395472-66a9253f6b208305cdb9e79a5"; 


const Pixa = () => {
    const [items, setItems] = useState([]);
  useEffect(() => { doApi("dog") }, [])

      const doApi = async (query) => {
 try {
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=3&image_type=photo`;
      const resp = await axios.get(url);
      console.log(resp.data.hits);
      setItems(resp.data.hits); // שלוש התמונות הראשונות
    } catch (err) {
      console.log(err);
      alert("Error fetching images");
    }
      }

  return (
    <div className="container mt-3">
      <h2>Pixabay Search</h2>
         <PixaInput doApi={doApi} />
      <PixaInfo items={items} />
    </div>
  )
}

export default Pixa
