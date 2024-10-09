import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://sftp.sgp1.cdn.digitaloceanspaces.com/offers/image/RXAIUoXoBjK6z20IsQp59fO1sn4yiVWAbQbSgXXT.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://sftp.sgp1.cdn.digitaloceanspaces.com/offers/image/4EC9S69BDfwsJWlWrmNvPfyKH5z3jfA1tw0R5AAg.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://sftp.sgp1.cdn.digitaloceanspaces.com/offers/image/YV0WoXQQU8WUXSbLLk0xRzCgt0sFPz6zYizkyzJg.jpg',
    caption: 'Slide 3'
  },
];

function Slideshow(){
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default  Slideshow;