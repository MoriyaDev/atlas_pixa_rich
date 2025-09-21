import React, { useEffect, useState } from 'react'
import AtlasInfo from "./AtlasInfo";
import AtlasInput from "./AtlasInput";
import axios from 'axios';
const Atlas = () => {
  const [infoItem, setInfoItem] = useState({});
  useEffect(() => { doApi("israel") }, [])

  const doApi = async (_country) => {
    setInfoItem({});
    let url = "https://restcountries.com/v3.1/name/" + _country;
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
      setInfoItem(resp.data[0])

    }
    catch (err) {
      console.log(err);
      alert("oops")
    }

  }

  const doApiCountryCode = async (_countryCode) => {

     setInfoItem({});
    let url = "https://restcountries.com/v3.1/alpha/"+_countryCode;
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
      setInfoItem(resp.data[0])

    }
    catch (err) {
      console.log(err);
      alert("oops")
    }
  }

  return (
    <div>
      <h2>Atlas app</h2>
<AtlasInput doApi={doApi}></AtlasInput>
      <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode}></AtlasInfo>
    </div>
  )
}

export default Atlas
