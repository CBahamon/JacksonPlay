import React from 'react'
import { NavLink } from 'react-router-dom'

import img1 from '../img/wave-top.png'
import img2 from '../img/wave-mid.png'
import img3 from '../img/wave-bot.png'
import imgHome from '../img/home.png'

import './home.css'

export const Home = () => {

	return (
		<>
			
			<div className="waveWrapper waveAnimation">
				<div className="waveWrapperInner bgTop">
					<div className="wave waveTop" style={{ backgroundImage: 'url(' + img1 + ')' }}></div>
				</div>
				<div className="waveWrapperInner bgMiddle">
					<div className="wave waveMiddle" style={{ backgroundImage: 'url(' + img2 + ')' }}></div>
				</div>
				<div className="waveWrapperInner bgBottom">
					<div className="wave waveBottom" sstyle={{ backgroundImage: 'url(' + img3 + ')' }}></div>
				</div>
			</div>


			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='z-10 grid grid-cols-2 items-stretch justify-start justify-items-stretch self-stretch'>

					<div className='grid grid-rows-2 items-end justify-center'>
						<p className='text-4xl font-bold text-white '>Bienvenidos a Jackson Play la mejor biblioteca de Juegos</p>
						<div className='self-start mt-4'>
							<p className='text-xl text-white '>No espere mas, Inicia ahora y te regalamos un mes en Jackson Plus</p>
							
							<NavLink className={({ isActive }) => 'bg-white mt-4 leading-none py-4 px-10 rounded-full transition duration-500 text-black shadow-3xl  inline-flex items-center justify-center self-center hover:bg-transparent hover:border hover:border-white hover:text-white' + (isActive ? 'active' : '')} to="/login">
								<span className="font-semibold text-base tracking-widest ">Start</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 text-lg transition duration-300 transform hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</NavLink>
							
							<NavLink className={({ isActive }) => 'ml-16 mt-4 leading-none py-4 px-10 rounded-full transition duration-500 text-gray-50 border border-white shadow-3xl inline-flex items-center justify-center self-center hover:bg-white hover:text-black' + (isActive ? 'active' : '')} to="/about">
								<span className="font-semibold text-base tracking-widest ">Info</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 text-lg transition duration-300 transform hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</NavLink>
							
						</div>

					</div>

					<div className=''>
						<img src={imgHome} className='' />
					</div>
				</div>
			</div>

		</>
	)
}
