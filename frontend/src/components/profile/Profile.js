import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom'
import { GamesEdit } from '../games/GamesEdit';



export const Profile = () => {

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





  const deleteGame = async (id) => {
    try {
      await axios.delete(`/videogames/delete/${id}`);
      const allVideoGames = await axios.get("/videogames");
      setVideoGames(allVideoGames.data);
    } catch (err) {
      console.log(err);
    }
    console.log(id);
  }






  return (<div>
    <div className="bg-white p-8 mt-5 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">VideoGames</h2>
          {/* <span className="text-xs"></span> */}
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:ml-40 ml-10 space-x-8">
            <NavLink to='/gamenew' className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New VideoGame</NavLink>
            {/* <ModalNewGame setVideoGames={setVideoGames} /> */}
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name of VideoGame
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Calification
                  </th>

                  <th
                    className="flex justify-center  px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {videoGames.map((game) => (

                  <tr key={game._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img className="w-full h-full rounded-full"
                            src={game.img}
                            alt="" />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {game.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {game.category}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {game.calification}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className='flex justify-center'>
                        <Link to={`/gameedit/${game._id}`} className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Edit</Link>
                        <button className=" bg-red-600 ml-3 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" onClick={() => deleteGame(game._id)} >Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
            <div
              className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button
                  className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>);
};
