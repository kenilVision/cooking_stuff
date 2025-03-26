import React from 'react'

function OrangeButton({text,onClick}) {
  return (
    <button
    className="bg-orange-400 text-white px-4 py-2 rounded-md flex items-center shadow-md hover:bg-orange-500 transition-all duration-300"
    onClick={onClick}
  >
    {text}
    <span className="ml-2">→</span> 
  </button>
  )
}

export default OrangeButton
