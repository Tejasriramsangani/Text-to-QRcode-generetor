import React,{ useContext }from 'react'
import { InputContext } from "../components/Code";

const InputField = () => {
    const { inputValue, setInputValue} =  useContext(InputContext);
    const handleOnChange = e => setInputValue({ ...inputValue, text: e.target.value});
  return (
    <div>
        <label className='font-semibold text-md'>Your text</label>
        <input 
        type="text"
        className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm'
        placeholder="abc" 
        value={inputValue.text}
        onChange={handleOnChange}/>
     
    </div>
  )
}

export default InputField;
