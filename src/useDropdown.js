//this is a custom hook.the file name start with "use" .....

import React,{useState} from "react";

const useDropdown = (label,defaultState,options)=>{
    const [state,setState] = useState(defaultState)
    const id = `use-dropdown-${label.replace(" ","").toLowerCase()}`

    const DropDown = ()=>(
        <label htmlFor={id}>
            {label}
            <select 
            id={id} 
            value={state}
            onChange={(e)=>setState(e.target.value)}
            onBlur={(e)=>setState(e.target.value)}

            >
                {options.map((item)=>(
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    )
    return [state,DropDown,setState]
}


export default useDropdown;