import React from 'react';

interface IImgProps {
  imageUrl: string;
  imageAlt: string;
}

function Img({ imageUrl, imageAlt }: IImgProps): JSX.Element {
  return <img src={imageUrl} alt={imageAlt} />;
}

export default Img;
