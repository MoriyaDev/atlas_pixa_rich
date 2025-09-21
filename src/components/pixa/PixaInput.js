// PixabayInput.jsx
import React, { useRef } from 'react';

export default function PixabayInput({ doApi }) {
  const inputRef = useRef();

  const onSearchClick = () => {
    doApi(inputRef.current.value);
  };

  return (
    <div className="d-flex mb-3">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search images..."
        className="form-control me-2"
        onKeyDown={(e) => e.key === "Enter" && doApi(inputRef.current.value)}
      />
      <button className="btn btn-primary" onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}
