import React from 'react'
import './Quote.scss'
import InputField from '../../components/Custom_InputField/InputField'
import Button from '../../components/button/Button'
import { arrow_icon } from '../../constants/image'

const Quote = () => {
  return (
    <div className='quote'>
        <div className="main_quote">
            <div className="quote_title">
                <h1>Get a Free Quote</h1>
                <p>Let’s begin by providing a free quotation for your project</p>
            </div>
            <form className="quote_form">
                <InputField
                    type='text'
                    name='name'
                    value=''
                    placeholder='Name'
                    handleChange={() => {}}
                />
                <div className='mata_input'/>
                <InputField
                    type='email'
                    name='email'
                    value=''
                    placeholder='Email'
                    handleChange={() => {}}
                />
                <div className='mata_input'/>
                <InputField
                    textArea={true}
                    name='message'
                    value=''
                    placeholder='Message'
                    handleChange={() => {}}
                />
                <div className='mata_input'/>
                <Button>Get a Free Quote</Button>
            </form>
        </div>
        <div className="main_liveChat">
            <div className="quote_title">
                <h1>Live Chat</h1>
                <p>We are online 24/7 to reply your messages</p>
            </div>
            <div className="live_chat_container">
                <div className="liveChat_content">
                    <div className='liveChat_input'>
                        <InputField
                            type='text'
                            name='liveChat'
                            value=''
                            placeholder='Type your message...'
                            handleChange={() => {}}
                            allowRadius={true}
                        />
                    </div>
                    <div className='mata'/>
                    <div className="liveChat_button">
                        <img src={arrow_icon} alt="arrow_icon" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Quote