import React from 'react';
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <Loader
      type="Circles"
      color="#55d85a"
      height={100}
      width={100}
      style={{
        position: 'absolute',
        top: '300px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    />
  );
}
