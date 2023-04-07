import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ViewData = () => {

  const [movieList, setMovieList] = useState([]);

  const getMovies = async() => {

    const response = await fetch('http://localhost:8080/movies');
    const data = await response.json();

    console.log(data);

    setMovieList(data);

  }

  const deleteMovie = async(id) => {

    await fetch(`http://localhost:8080/movies/${id}`,{
      'headers' : {
        'Content-type' : 'application/json'
      },
      'method' : 'DELETE'
    });

    getMovies();

  }

  useEffect( () => {
    getMovies();
  }, []);

  return (
    <div>
      <div className='has-text-centered is-size-4'>View Data Film</div>
      <table className="table is-fullwidth mt-5">
        <thead>
          <tr>
            <th className='has-text-centered'>No.</th>
            <th className='has-text-centered'>Nama Film</th>
            <th className='has-text-centered'>Tahun Rilis</th>
            <th className='has-text-centered'>Penilaian</th>
            <th className='has-text-centered'></th>
          </tr>
        </thead>
        <tbody>
        {
          movieList.map((movies, index) => (

            <tr key={ movies.id }>
              <td className='has-text-centered'>{ index+1 }</td>
              <td className='has-text-centered'>{ movies.judul }</td>
              <td className='has-text-centered'>{ movies.tahun }</td>
              <td className='has-text-centered'>{ movies.nilai }</td>
              <td className='has-text-centered'>
                <button className="button is-small mx-1 is-info"><Link className="has-text-white" to={ `/EditData/${movies.id}` }>Edit</Link></button>
                <button onClick={ () => deleteMovie(movies.id) } className="button is-small mx-1 is-danger">Delete</button>
              </td>
            </tr>

          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ViewData