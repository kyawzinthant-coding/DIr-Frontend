interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  return <img src={src} alt={alt} loading="lazy" className={className} />;
};

export default Image;
