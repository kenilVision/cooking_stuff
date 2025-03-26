import React from 'react'

function ReviewCard({image, text ,clientname ,jobTitle, headline}) {
  return (
    <div className='bg-white py-10 px-5 '
    style={{
        boxShadow: '0px 0px 7px 0px #00000040'
    }}>
      
      <div className="flex items-center space-x-4 ">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="text-2xl font-bold">{clientname}</h3>
          <p className="text-lg  text-gray-500">{jobTitle}</p>
        </div>
      </div>

    
      <p className="font-semibold mt-4 text-lg ">{headline}</p>

    
      <p className="text-gray-600 mt-2 text-lg ">{text}</p>

   
      <div className="flex items-center mt-4">
       
          <span className={`text-yellow-500  text-xl`}>
            ★ ★ ★ ★ ★ 
          </span>
        
      </div>
    </div>
  )
}

export default ReviewCard
