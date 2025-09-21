import React, { useState, useEffect } from 'react'
import PixaInfo from './PixaInfo'
import PixaInput from './PixaInput'
import { getImages } from '../../services/pixaService'


const Pixa = () => {
  const [items, setItems] = useState([]);
  useEffect(() => { doApi("dog") }, [])

  const doApi = async (query) => {
    try {
      const data = await getImages(query);
      setItems(data);
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
