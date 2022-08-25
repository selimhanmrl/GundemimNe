import { useState } from "react";

export default function Item(props) {
  
  const { data, onAdd, onRemove } = props;
  

  const [color,setColor]=useState('bg-gray-800');
  const [textColor,setTextColor]=useState('white');
 
  const button = (item)=>{
      console.log(color)
      if(color === "bg-gray-800"){
        setColor("bg-red-400 ");
        setTextColor('red');
        onAdd(item)
      }
      else{
        setColor("bg-gray-800");
        setTextColor('red');
        onRemove(item)
      }
  }




  return (
    <div class="transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out justify-center">
      <div >
        <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <a key={data._id}>
              <div class="flex flex-row">
                <img
                  src={data.image}
                  alt={""}
                  class="h-56 lg:h-60 w-full object-cover" 
                />
              </div>
              <div class="">
                <h2 class="font-semibold text-xl leading-6 text-gray-700 my-8">{data.name}</h2>
              </div>
              <div class="">
              <button type="submit" class={`w-full rounded-md   py-2 text-indigo-100  hover:shadow-md duration-75 ${color}`} onClick={()=>{button(data)}}>  Gündemlerine Ekle</button>

              </div>           
            </a>
          
        </div>
      </div>
      
    </div>
  )
}

    
  

