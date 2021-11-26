import React, { ImgHTMLAttributes } from 'react';

interface IImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  imageAlt: string;
}

function Img({ imageUrl, imageAlt }: IImgProps): JSX.Element {
  return <img src={imageUrl} alt={imageAlt} />;
}

export default Img;
