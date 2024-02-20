import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function DefaultPhoneNumber() {

    const [PhoneNumber,setPhoneNumber] = useState(" ");
    const [valid, setvalid] = useState (true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setvalid (validatePhoneNumber(value));
    };
    const validatePhoneNumber = (phoneNumber) =>{
        const phoneNumberPattern = /^\d{10}$/ ;
        return phoneNumberPattern.test(phoneNumber);
    }

  return (
    <>
     <PhoneInput
        country={'us'}
        value={PhoneNumber}
        onChange={handleChange}
        inputProps={{
            required : true
        }}
        />
    </>
  )
}

export default DefaultPhoneNumber