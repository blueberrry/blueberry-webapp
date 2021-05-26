import { useState, useEffect, useRef } from 'react';
const useImageLoaded = () => {
  const initialImgLoad = false,
    [imgLoaded, setImgLoad] = useState(initialImgLoad);
  const ref = useRef();

  const onImgLoad = () => setImgLoad(true);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onImgLoad();
    }
  });
  return [ref, imgLoaded, onImgLoad];
};

export default useImageLoaded;
