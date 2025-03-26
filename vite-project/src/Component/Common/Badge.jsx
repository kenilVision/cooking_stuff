import React from 'react'

function Badge({text}) {
  return (
    <div className="mt-2">
    <span className="px-2 py-1 text-xs bg-orange-400 text-white rounded-lg">{text}</span>
  </div>
  )
}

export default Badge
