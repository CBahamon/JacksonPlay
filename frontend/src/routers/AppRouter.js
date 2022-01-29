import React, { useState } from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GameDetail } from '../components/games/GameDetail';
import { Games } from '../components/games/Games';
import { GamesNew } from '../components/games/GamesNew';
import { GamesEdit } from '../components/games/GamesEdit';
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Profile } from '../components/profile/Profile';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {

	const myStorage = window.localStorage;
	const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
	return (
		<div>
			<BrowserRouter>
				<Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
					<Route path="/games" element={<Games />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/gamedetail/:gameId" element={<GameDetail />} />
					<Route path="/gamenew" element={<GamesNew />} />
					<Route path="/gameedit/:gameId" element={<GamesEdit />} />
				</Routes>

			</BrowserRouter>
		</div>
	)
}
