import { useState } from "react";
import { Boxes } from "./Boxes";

export function BookingLogic(){


   const [totalTicket , setTotalTicket] = useState([]);

   const ValidationChecker = (i)=>{
    if(!totalTicket.includes(i) && totalTicket.length<5){
        setTotalTicket([...totalTicket , i])
    }
    else if(totalTicket.includes(i)){
        alert("you already had selected this ticket")
    }
    else{
        alert("You had selected the tickets out of the range")
    }

   }

   const finalSubmit = ()=>{
      
        let vip = 0;
        let general = 0;
        let coders = 0;

        
        for(let i = 0 ; i<totalTicket.length ; i++){

            if(totalTicket[i] >= 1 && totalTicket[i]<=25){
              vip++;
            }
            else if(totalTicket[i] >= 26 && totalTicket[i]<=61){
              general++;
            }
            else if(totalTicket[i] >= 62 && totalTicket[i]<=70){
              coders++;
            }
        }

        alert(`vip = ${vip} , general = ${general} , coders = ${coders}`)
      
   }


    return(
        <> 

        <h1 className="flex justify-center text-[30px] font-bold">General Ticket</h1>

        <div className="w-full h-auto flex flex-col justify-center space-y-2  items center mt-5">
           {Array(5)
           .fill(0)
           .map((_,rowIndex)=>(
            <div className="flex justify-center gap-4 ">

                {Array(5)
                .fill(0)
                .map((_,colIndex)=>{
                   let boxIndex = rowIndex*5 + (colIndex + 1)
                   let nextBoxChecker = boxIndex
                   return(
                    <Boxes indexValue={boxIndex} id={nextBoxChecker} totalBoxChecker={ValidationChecker}></Boxes>
                   )
                   })
                }

            </div>
           ))
           }
        </div>

      
        <h1 className="flex justify-center mt-10 text-[30px] font-bold">VIP Ticket</h1>

        <div className="w-full h-auto flex flex-col justify-center space-y-2  items center mt-5">
           {Array(6)
           .fill(0)
           .map((_,rowIndex)=>(
            <div className="flex justify-center gap-4 ">

                {Array(6)
                .fill(0)
                .map((_,colIndex)=>{
                   let boxIndex = rowIndex*6 + (colIndex + 1)
                   let nextBoxChecker = boxIndex + 25;
                   return(
                    <Boxes indexValue={boxIndex} id={nextBoxChecker} totalBoxChecker={ValidationChecker}></Boxes>
                   )
                   })
                }

            </div>
           ))
           }
        </div>



        <h1 className="flex justify-center text-[30px] mt-14 font-bold">Coders Ticket</h1>

        <div className="w-full h-auto flex flex-col justify-center space-y-2  items center mt-5">
           {Array(3)
           .fill(0)
           .map((_,rowIndex)=>(
            <div className="flex justify-center gap-4 ">

                {Array(3)
                .fill(0)
                .map((_,colIndex)=>{
                   let boxIndex = rowIndex*3 + colIndex + 1
                   let NextBoxChecker = boxIndex + 61
                   return(
                    <Boxes indexValue={boxIndex} id={NextBoxChecker} totalBoxChecker={ValidationChecker}></Boxes>
                   )
                   })
                }

            </div>
           ))
           }
        </div>


        <div className="w-full h-[100px] flex justify-center items-center p-4 mt-10">
          <button onClick={finalSubmit} className="text-white rounded-xl bg-red-700 w-[200px] p-3 text-[30px]">Submit</button>
        </div>

        </>
    )
}