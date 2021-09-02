
import React from "react";

interface countProps{
    counts: number 
}

export const Counter: React.FC<countProps> = ({counts}) =>{

    return (
        <div>
            <label><strong>{counts}</strong></label>
        </div>
    )
}