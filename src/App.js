import React, { useEffect, useState } from 'react'
import Info from './components/Info'
import Plan from './components/Plan'
import Addons from './components/Addons'
import Summary from './components/Summary'
import Sidebar from './components/Sidebar'




const App = () => {
  const [index, setIndex] = useState(0)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stepOneErrors, setStepOneErrors] = useState({});



  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };


  useEffect(() => {
    if (name && stepOneErrors.name) {
      setStepOneErrors((prevState) => ({
        ...prevState,
        name: '',
      }));
    }
    if (email && stepOneErrors.email) {
      setStepOneErrors((prevState) => ({
        ...prevState,
        email: '',
      }));
    }
    if (phone && stepOneErrors.phone) {
      setStepOneErrors((prevState) => ({
        ...prevState,
        phone: '',
      }));
    }
  }, [name, email, phone, stepOneErrors]);


  return (
    <div className='flex items-center h-screen bg-[#F0F6FF] justify-center'>
      <div className='p-4 rounded-xl shadow-2xl bg-white items-center flex flex-row  w-[1200px]'>
        <Sidebar
          index={index}
          setIndex={setIndex}
        />
        {index === 0 &&
          <Info
            name={name}
            email={email}
            phone={phone}
            setStepOneErrors={setStepOneErrors}
            stepOneErrors={stepOneErrors}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
            setIndex={setIndex}
          />}
        {index === 1 && <Plan index={index} setIndex={setIndex} />}
        {index === 2 && <Addons index={index} setIndex={setIndex} />}
        {index === 3 && <Summary />}
      </div>
    </div>
  )
}

export default App