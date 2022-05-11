import React from 'react'

export default function Month({month}) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
         {
              month.map((rows , i) =>(
               <React.Fragment key={i}>
               {row.map((day, idx) => (
                 <Day day={day} key={idx} rowIdx={i} />
               ))}
             </React.Fragment> 
              ))}
    </div>
  )
}
