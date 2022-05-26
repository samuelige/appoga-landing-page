import React from 'react'
import './InputField.scss'


interface I_InputData {
    type?: string,
    placeholder: string,
    value: string | number,
    name?: string,
    handleChange?:  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textArea?: boolean;
    allowRadius?: boolean;

};

const InputField = ({type, name, value, placeholder, handleChange, textArea, allowRadius}: I_InputData) => {

    return (
        <div className="input_field_container">
            
            {
                textArea ? (
                    <textarea className="textinput" name={name} value={value} placeholder={placeholder} onChange={handleChange}></textarea>
                    ) : (
                        <input className={allowRadius ? "input_with_radius" : "textinput"} type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/>  
                    )
            }
            
        </div>
    )
}

export default InputField