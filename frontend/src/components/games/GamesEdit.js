import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const GamesEdit = () => {

	const { gameId } = useParams();


	const navigate = useNavigate();
	const nameGameRef = useRef();
	const descriptionRef = useRef();
	const categoryRef = useRef();
	const imgRef = useRef();
	const calificationRef = useRef();

	const [oneVideo, setOneVideo] = useState([]);

	useEffect(() => {
		const getOneVideoGame = async () => {

			try {
				const oneVideoGame = await axios.get(`/videogames/${gameId}`);
				setOneVideo(oneVideoGame.data)
			} catch (err) {
				console.log(err);
			}
		}
		getOneVideoGame();

	}, []);

	const handleEditGame = async (e) => {

		e.preventDefault();


		const dataEdit = {
			name: nameGameRef.current.value,
			description: descriptionRef.current.value,
			category: categoryRef.current.value,
			img: imgRef.current.value,
			calification: calificationRef.current.value,
		};

		try {
			await axios.put(`/videogames/update/${gameId}`, dataEdit);
			navigate('/profile', {
				replace: true
			});

		} catch (err) {
			console.log(err);
		}

	}


	return (<div>

		<div className="flex mt-4 h-full  inset-0  justify-center items-center" id="overlay">

			<div className="flex justify-center h-screen items-center antialiased w-7/12">
				<div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
					<div
						className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
					>
						<p className="font-semibold text-gray-800">Insert to VideoGame</p>
						<svg
							className="w-6 h-6 cursor-pointer"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							id="close-modal"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</div>

					<form onSubmit={handleEditGame} className="flex flex-col px-6 py-5 bg-gray-50">



						<div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
							<div className="w-full mt-3">
								<p className="mb-2 font-semibold text-gray-700">Name of Game</p>
								<input type="text" required
									className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
									placeholder="Name of Game"
									ref={nameGameRef}
									value={oneVideo.name}
								/>
							</div>

						</div>
						<hr />

						<div className="w-full mt-3">
							<p className="mb-2 font-semibold text-gray-700">Description</p>
							<textarea type="text" required
								className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
								placeholder="Description"
								ref={descriptionRef}
								value={oneVideo.description}
							/>
						</div>
						<div className="w-full mt-3">
							<p className="mb-2 font-semibold text-gray-700">Category</p>
							<input type="text" required
								className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
								placeholder="Name of Category"
								ref={categoryRef}
								value={oneVideo.category}
							/>
						</div>


						<div className="flex flex-col sm:flex-row items-center mt-5 mb-5 sm:space-x-5">
							<div className="w-full sm:w-1/2">
								<p className="mb-2 font-semibold text-gray-700">Calification</p>
								<select
									id="country"
									name="country"
									autoComplete="country-name"
									className="mt-1 block w-full py-2 px-3 border border-none bg-transparent rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									ref={calificationRef}
									// value={oneVideo.calification}
								>
									<option value="1" >1</option>
									<option value="2" >2</option>
									<option value="3" >3</option>
									<option value="4" >4</option>
									<option value="5" >5</option>
								</select>
							</div>
							<div className="w-full sm:w-1/2 mt-2 sm:mt-0">
								<p className="mb-2 font-semibold text-gray-700">Url Image</p>
								<input type="text" required
									className=" appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
									placeholder="Url Image"
									ref={imgRef}
									value={oneVideo.img}
								/>
							</div>
						</div>





						{/* <input
					className="inline-flex"
					type="checkbox"
					id="check2"
					name="check2"
					
				/>
				<label className="inline-flex font-semibold text-blue-500" for="check2">
					Add a specific agent</label
				><br /> */}



						<div className="flex flex-row items-center justify-end p-2  border-t border-gray-200 rounded-bl-lg rounded-br-lg">
							<button type='submit' className="px-4 py-2 text-white font-semibold bg-indigo-600 hover:bg-indigo-800 rounded">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>);
};
