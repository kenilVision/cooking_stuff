import React from 'react';
import Badge from './Badge';

const Card = ({ image, text , course}) => {
  return (
    <div className="bg-white rounded-xl max-w-sm p-0"
    style={{
      boxShadow:"0px 1px 4px 0px #00000040"
    }}>
      {/* Image section */}
      <div className="p-0">
        <img
          src={image}
          alt=" (Lifetime Access)"
          className="w-full "
        />
      </div>


      <div className="p-4">
  
        <h3 className="text-[26px] font-semibold mt-2">
          {text} (Lifetime Access)
        </h3>


        <div className="flex items-center text-2xl mt-1">
          <span className="text-yellow-500">4.2 ★ ★ ★ ★ ★ </span>
          <span className="text-gray-600 ml-2">(2,002)</span>
        </div>

        
        <div className="flex items-center text-3xl mt-2">
          <span className="font-bold text-black">₹500</span>
          <span className="text-gray-400 line-through ml-2">₹5,000</span>
        </div>
        <div className="flex items-center text-3xl mt-2">
          {course?<Badge text={course}/>:""}
         
        </div>
      </div>
    </div>
  );
};

export default Card;
