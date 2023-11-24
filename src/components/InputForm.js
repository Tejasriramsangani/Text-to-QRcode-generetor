import React,{ useContext}from 'react'
import InputField from '../components/InputField'
import InputColor from '../components/InputColor'
import { InputContext } from '../components/Code'

const InputForm = ({ }) => {
    const { getQrCode, inputValue } = useContext(InputContext);
    const handleSubmit = () => getQrCode();


  return (
    <div className='col-span-2 p-6 grid gap-4'>
    <InputField/>
    <InputColor/>
    <button
    disabled={!inputValue.text}
    onClick={handleSubmit}
    className='bg-pink-400 max-w-xs ml-auto px-4 py-2 text-white
    rounded-sm mt-4  hover:bg-pink-500 disabled:bg-gray-300'>
        Generate QrCode</button>
    </div>
  )
}

export default InputForm;
