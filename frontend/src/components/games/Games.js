import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';

const products = [
	{
		id: 1,
		name: 'Earthen Bottle',
		href: '#',
		price: '$48',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: 3,
		name: 'Focus Paper Refill',
		href: '#',
		price: '$89',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 4,
		name: 'Machined Mechanical Pencil',
		href: '#',
		price: '$35',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	// More products...
]

export const Games = () => {

	const [videoGames, setVideoGames] = useState([]);

	useEffect(() => {
		const getVideoGames = async () => {

			try {
				const allVideoGames = await axios.get("/videogames");
				setVideoGames(allVideoGames.data);
			} catch (err) {
				console.log(err);
			}
		}


		getVideoGames();

	}, []);

	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{videoGames.map((game) => (
						<Link key={game._id} to={`/gamedetail/${game._id}`} className="group">
							<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
								<img
									src={game.img}
									alt={game.name}
									className="w-full h-full object-center object-cover group-hover:opacity-75"
								/>
							</div>
							<h3 className=" mt-1 text-lg font-medium text-gray-900">{game.name}</h3>
							<p className=" text-sm text-gray-700">{game.category}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
