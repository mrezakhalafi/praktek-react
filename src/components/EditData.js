import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditData = () => {

  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState("");
  const [nilai, setNilai] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const showData = async() => {

    const response = await fetch(`http://localhost:8080/movies/${id}`);
    const existingData = await response.json();

    setJudul(existingData.judul);
    setTahun(existingData.tahun);
    setNilai(existingData.nilai);

  }

  const saveData = async(e) => {

    e.preventDefault();

    const data = { judul, tahun, nilai };

    await fetch(`http://localhost:8080/movies/${id}`,{
      'headers' : {
        'Content-type' : 'application/json'
      },
      'method' : 'PUT',
      'body' : JSON.stringify(data)
    });

    navigate('/ViewData');

  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <div className='has-text-centered is-size-4'>Ini Edit Data</div>
      <form onSubmit={ saveData }>
        <div className="field mt-5">
          <label className="label has-text-left">Judul Film</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukan Nama FIlm" value={ judul } onChange={ (e) => setJudul(e.target.value) } />
          </div>
          <p className="help has-text-left">Contoh : The Avengers</p>
        </div>
        <div className="field mt-4">
          <label className="label has-text-left">Tahun Rilis</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukan Tahun Rilis" value={ tahun } onChange={ (e) => setTahun(e.target.value) }/>
          </div>
          <p className="help has-text-left">Contoh : 2012</p>
        </div>
        <div className="field mt-4">
          <label className="label has-text-left">Penilaian Film</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukan Penilaian Film" value={ nilai } onChange={ (e) => setNilai(e.target.value) }/>
          </div>
          <p className="help has-text-left">Contoh : 8.0</p>
        </div>
        <div className="buttons mt-5">
          <button className="button is-link">Edit Data</button>
          <button className="button is-secondary" type="button"><Link to={ '/ViewData' }>Cancel</Link></button>
        </div>
      </form>
    </div>
  )
}

export default EditData