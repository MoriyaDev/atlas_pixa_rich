import React from 'react'

export default function AtlasInfo(props) {
  let item = props.item;

  return (
    <div className='text-center mt-3'>
      {item.area ? 
      <React.Fragment>
        <img src={item.flags.png} alt={item.name.common} className='w-25' />
        <h2>{item.name.common}</h2>
        <div>Pop: {item.population.toLocaleString()}</div>
        <div>Capital: {item.capital[0]}</div>
        <h4>Borders:</h4>
        {item.borders.map((val,i) => {
          return(
            <span  key={i}>
            <button onClick={() => {
              props.doApiCountryCode(val)
            }} className='btn btn-dark mx-1'>{val}</button> 
            { i != item.borders.length-1 ? "," : "" }
            </span> 
          )
        })}
      </React.Fragment>
       :<div  style={{width: "5rem", height: "5rem"}} className="spinner-border text-primary" role="status">
       <span className="sr-only"></span>

     </div>
      }
    </div>
  )
}