import React,{useState, useContext, useEffect } from 'react'
import { ChromePicker } from 'react-color';
import { InputContext } from '../components/Code';

const InputColor = () => {
    const [color,setColor] = useState('#054080');
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const { inputValue, setInputValue} =  useContext(InputContext);
    useEffect(() => {
        setInputValue({...inputValue, color: color })
    }, [color])

    const handleChange = color => setColor(color.hex);
  return (
    <div>
        <label className='font-semibold text-md'>
            Color
        </label>
        <div className='flex items-center gap-2'>
            <div
            onClick={() => setDisplayColorPicker(!displayColorPicker)}
            style={{ background: color}}
            className='w-10 h-8 cursor-pointer border-4'></div>
            <span>{color}</span>
        </div>
         {
            displayColorPicker && (
                <div className='absolute mt-2'>
                    // chromepicker comes from reactcolor //  
                     <ChromePicker color={color} onChange={handleChange} />
                  
                </div>
            )
         }
    </div>
  )
}

export default InputColor;
