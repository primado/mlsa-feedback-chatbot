import React from 'react'

import MyIframeComponent from './chatbotIframe'

// Images
import logo from '../assets/mlsa-badge.png'


export default function Home() {

    return (
        <div className='font-montserrat h-screen sm-412:h-full xs-360:h-full sm-428:h-full'>
            <div>
                <nav className='flex justify-between items-center py-5 px-20 mb-5 sm-412:px-5 xs-360:px-2 sm-414:px-2 sm-428:px-2'>
                    <div className="brand flex flex-row justify-between items-center">
                        <img className='w-20 mr-5'
                            src={logo} alt="MLSA Badge" />
                        <span className='font-bold text-2xl xs-360:text-xl'>MLSA Ghana</span>
                    </div>

                    <div className="nav-left">
                        <div className='font-medium text-2xl sm-412:text-base xs-360:text-base'>Feedback Chatbot</div>
                    </div>
                </nav>

                <div className="hero flex flex-row gap-12 px-20 sm-412:flex-col sm-412:px-8 sm-412:justify-center sm-412:items-center xs-360:flex-col xs-360:px-2 xs-360:justify-center xs-360:items-center sm-414:flex sm-414:flex-col sm-414:justify-center sm-414:items-center sm-428:flex-col sm-428:px-5 sm-428:justify-center sm-428:items-center">
                    <div className="hero-left w-10/12">
                        <h1 className='font-bold text-4xl mb-3 sm-412:text-3xl'>Microsoft Learn Student Ambassadors, Ghana</h1>
                        <h2 className='font-semibold text-gray-700 text-2xl mb-3'>Feedback Chatbot</h2>
                        <p className='text-gray-600 font-medium text-justify'>"Join MLSA to become a tech leader with Microsoft technologies. Make an impact on communities through innovation and teaching. Join a powerful community of tech enthusiasts committed to making a difference."
                        </p>

                        <div className="mt-8">
                            <a href="https://studentambassadors.microsoft.com" target="_blank"
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-5 rounded-lg'
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="info__text text-gray-600 font-medium text-justify mt-16">
                            Hi there! I'm the Microsoft Learn Student Ambassador feedback chatbot for Ghana.
                            We value your opinion and would appreciate your feedback on our events. 
                            Your responses will help us improve future events and better serve the MLSA community in Ghana. Thank you for your participation!
                        </div>

                    </div>

                    <div className="hero-right w-10/12 sm-412:pb-20 xs-360:pb-20 sm-428:pb-20">

                        <div className="bot flex justify-center">
                            <MyIframeComponent className=''/>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
    )

}