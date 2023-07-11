import React from 'react'
import "./Accessories.css"
const Accessories = () => {
    const rings=[
        {
            id:1,
            src:"https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/eternity.webp",
            Rname:"Wedding Rings",
            discription:"Every diamond in our collection"

        },
        {
            id:2,
            src:"https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/three-stone.webp",
            Rname:"Engagement Rings",
            discription:"Every diamond in our collection"

        },
        {
            id:3,
            Rname:"Fine Jewelry",
            src:"https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/fine-gemstone-earrings.webp",
            discription:"Every diamond in our collection"

        },
        {
            id:4,
            src:"https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/yellow-gold-ring.webp",
            Rname:"Latest Rings",
            discription:"Every diamond in our collection"

        },

    ]
  return (
    <div name="accessoriesItems" className='container'>
      <h2>Our Collection</h2>
      <p id="containerParagraph">Discover our elegant and unique fine jewelry collections,
ranging from classic diamond studs to stylish pendants and dazzling bracelets.</p>
<div className='accessories'>
{
    rings.map(({id,src,Rname,discription})=>(
        <div id={id} className='ourCollection'>
            <img src={src} alt="img not found" id='OurCollectionImg'/>
            <h4>{Rname}</h4>
            <p>{discription}</p>
        </div>


    ))
}
</div>
    </div>
  )
}

export default Accessories
