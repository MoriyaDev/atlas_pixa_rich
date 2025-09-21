import React from 'react'

const PixaInfo = (props) => {
  const items = props.items; 

  if (!items || items.length === 0) {
    return <p>No images yet</p>;
  }

  return (
    <div className="d-flex flex-wrap">
      {items.map((item) => (
        <div key={item.id} className="card m-2" style={{ width: "18rem" }}>
          {item.webformatURL && (
            <img src={item.webformatURL} className="card-img-top" alt={item.tags} />
          )}
          <div className="card-body">
            <h5 className="card-title">{item.user || "Unknown"}</h5>
            <p className="card-text">{item.tags || ""}</p>
            {item.pageURL && (
              <a
                href={item.pageURL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-info"
              >
                View
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PixaInfo
