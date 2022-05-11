import React from 'react'
import dayjs from "dayjs";

export default function Day({day , rowIdx}) {

     function getCurrentDayClass() {
          return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue-600 text-white rounded-full w-7"
            : "";
        }

  return (
    <div className="boder border-gray-200 flex flex-column">
      <header className="flex flex-col items-center">
      {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
           </header>   
         
    </div>
  )
}
