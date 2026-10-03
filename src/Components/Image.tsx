
type IProps = {
    imageUrl: string,
    alt: string,
  className: string,
    width?: string,
  height?: string,
  priorty?: boolean
}

function Image({imageUrl,alt,className,width,height,priorty}: IProps) {
  return (
    <img    loading={priorty?"eager":"lazy"}
      fetchPriority={priorty?"high":"auto"} src={imageUrl} 
      style={{ width: width, height: height }} alt={alt} className={className} />
  )
}

export default Image