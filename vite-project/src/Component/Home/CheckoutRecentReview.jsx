import React from 'react';
import bg from '../../assets/Home/CheckoutRecentReview/c26178c70f3091d8026b3a1fd176f998.png';
import image1 from '../../assets/Home/CheckoutRecentReview/Card/Ellipse 4 (1).jpg';
import image2 from '../../assets/Home/CheckoutRecentReview/Card/Ellipse 4 (2).jpg';
import image3 from '../../assets/Home/CheckoutRecentReview/Card/Ellipse 4.jpg';
import ReviewCard from '../Common/ReviewCard';



function CheckoutRecentReview() {
    const items = [
        {
            image: image1,
            clientname:"Clay Jhonson",
            jobTitle:"Digital Marketer",
            headline:"Perfection! went above!",
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
        },
        {
          image: image2,
          clientname:"Clay Jhonson",
          jobTitle:"Digital Marketer",
          headline:"Perfection! went above!",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
        },
        {
            image: image3,
            clientname:"Clay Jhonson",
            jobTitle:"Digital Marketer",
            headline:"Perfection! went above!",
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
        }
      ];
  return (
    <>
      <div className="relative flex justify-center pt-15 pb-15 ">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        ></div>

        <div className="relative z-10 w-7xl p-10 flex flex-col items-center">
          <div className="text-6xl text-black font-bold p-2">Check out Recent Review</div>
          <div className="text-3xl text-gray-600 text-center p-2 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan neque pellentesque lorem eu sollicitudin congue ut amet. 
          </div>

          <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
            {items.map((x, index) => (
              <ReviewCard key={index} image={x.image} text={x.text} clientname={x.clientname} jobTitle={x.jobTitle} headline={x.headline}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutRecentReview