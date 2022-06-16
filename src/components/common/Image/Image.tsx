import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

const Image: React.FC<ImageProps> = ({ src, alt, className, style }) => {
  return <img src={src} alt={alt} className={className} style={style} />;
};

export default Image;
