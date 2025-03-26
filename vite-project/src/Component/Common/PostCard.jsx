import React from 'react'

function PostCard({image,title,text,date}) {
  return (
    <div className="max-w-sm">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />


    <h3 className="text-lg font-semibold mt-4">{title}</h3>


    <p className="text-gray-500 text-sm mt-2">
      {date} 
    </p>


    <p className="text-gray-700 mt-2">{text}</p>


    <button
      className="text-orange-400 font-bold mt-4"
        onClick={(x)=>{}}
    >
      READ MORE »
    </button>
  </div>
  )
}

export default PostCard
