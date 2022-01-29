import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';


export const Login = ({setCurrentUser}) => {


	const navigate = useNavigate();
	const myStorage = window.localStorage;
	const usernameRef = useRef();
	const passwordRef = useRef();

	const hanldeSubmit = async (e)=>{
		e.preventDefault();

		const user ={
			username: usernameRef.current.value,
			password: passwordRef.current.value
		}

		try {
			const res = await axios.post("/user/login", user)
			myStorage.setItem("user", res.data.username)
			setCurrentUser(res.data.username)
			navigate('/profile', {
				replace: true
			});

			console.log(myStorage.getItem("user"));

		} catch (err) {
			console.log(err);
		}

		console.log(user);
	}


	return (

		<>

			<div className="h-screen flex  ">
				<div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
					<div>
						<img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/200/ffffff/external-gaming-artificial-intelligence-wanicon-lineal-color-wanicon.png" />
						<h1 className="text-white font-bold text-4xl font-sans">Jackson Play</h1>
						<p className="text-white mt-1">The most popular plataform of gaming</p>
						<NavLink to='/about'>
							<button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
						</NavLink>
					</div>
				</div>
				<div className="flex w-1/2 justify-center items-center bg-white">
					<form className="bg-white" onSubmit={hanldeSubmit}>
						<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
						<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-gaming-gaming-dreamstale-lineal-dreamstale.png" />
							<input className="pl-2 outline-none border-none" type="text"  placeholder="Username" ref={usernameRef}/>
						</div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<img src="https://img.icons8.com/ios/32/000000/assassins-creed-logo.png" />
							<input className="pl-2 outline-none border-none" type="password" placeholder="Password" ref={passwordRef}/>
						</div>
						<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:bg-indigo-800">Login</button>
						{/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
					</form>
				</div>
			</div>

		</>
	)
}
