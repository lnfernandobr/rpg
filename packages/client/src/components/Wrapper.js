export const Wrapper = ({ img, width = 20, height = 20, alt = 'Image' }) => {
  return <img src={img} alt={alt} width={width} height={height} />;
};
