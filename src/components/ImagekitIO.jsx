import React from 'react'
import { IKImage } from 'imagekitio-react'

function ImagekitIO({src, className, width, height, description}) {
  return (
    <IKImage 
    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
    src= {src} className= {className}
    loading='lazy'
    lqip={{ active: true, quality: 20 }}
    width={width}
    height={height}
    description={description}

    
    
    />
  )
}

export default ImagekitIO
