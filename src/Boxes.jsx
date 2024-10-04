import { useState } from "react";

export function Boxes({ id, indexValue,totalBoxChecker}) {

    return (
        <>
            <button onClick={()=>totalBoxChecker(id)} className="bg-violet-500 rounded-2xl p-2 text-[20px] text-white w-[50px]">
                {indexValue}
            </button>
        </>
    );
}
