import React,{createContext, useState} from 'react';
import InputForm from '../components/InputForm'
import QrCode from '../components/QrCode'
import axios from 'axios';


export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    text:'',
    color:''
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: { Authorization: 'Bearer bac60ea0-f92d-11ed-8dc6-2bf3ae0e2d78' }
  }
  const bodyParameters = {
    
    "colorDark": inputValue.color,
    "qrCategory": "text",
    "text": inputValue.text
  }
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
         bodyParameters,
         config
        );
        setResponse(res.data.url);

    } catch(err) {
      setError(err);

    } finally {
      setLoading(false);

    }
  }
  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error

  }
 return (
    
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-36 px2">
  <div className='container mx-auto max-w-4xl bg-white rounded-md shadow mt-76'>
    <div className='md:grid md:grid-cols-3'>
      <InputContext.Provider value={value}>
      <InputForm/>
      <QrCode/>

      </InputContext.Provider>
      
    </div>
  </div>
</div>
  
  );
}


export default App;


