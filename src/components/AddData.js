import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AddData = () => {

  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState("");
  const [nilai, setNilai] = useState("");

  const [judulError, setJudulError] = useState("");
  const [tahunError, setTahunError] = useState("");
  const [nilaiError, setNilaiError] = useState("");

  const navigate = useNavigate();

  const saveData = async(e) => {

    e.preventDefault();

    if (judul === '' || tahun === '' || nilai === ''){
      if (judul === ''){
        setJudulError("Judul wajib diisi.");
      }

      if (tahun === ''){
        setTahunError("Tahun wajib diisi.");
      }

      if (nilai === ''){
        setNilaiError("Nilai wajib diisi.");
      }
      return;
    }

    const data = { judul, tahun, nilai };

    await fetch('http://localhost:8080/movies',{
      'headers' : {
        'Content-type' : 'application/json'
      },
      'method' : 'POST',
      'body' : JSON.stringify(data)
    });

    navigate('/ViewData');

  }

  return (
    <div>
      <div className='has-text-centered is-size-4'>Ini Add Data</div>
      <form onSubmit={ saveData }>
        <div className="field mt-5">
          <label className="label has-text-left">Judul Film</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukan Nama FIlm" value={ judul } onChange={ (e) => setJudul(e.target.value) } />
          </div>
          <p className="help has-text-left">Contoh : The Avengers</p>
          <p id="judul-validation" class="help is-danger">{ judulError }</p>
        </div>
        <div className="field mt-4">
          <label className="label has-text-left">Tahun Rilis</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukan Tahun Rilis" value={ tahun } onChange={ (e) => setTahun(e.target.value) }/>
          </div>
          <p className="help has-text-left">Contoh : 2012</p>
          <p id="tahun-validation" class="help is-danger">{ tahunError }</p>
        </div>
        <div className="field mt-4">
          <label className="label has-text-left">Penilaian Film</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukan Penilaian Film" value={ nilai } onChange={ (e) => setNilai(e.target.value) }/>
          </div>
          <p className="help has-text-left">Contoh : 8.0</p>
          <p id="penilaian-validation" class="help is-danger">{ nilaiError }</p>
        </div>
        <div class="buttons mt-5">
          <button class="button is-link">Submit Data</button>
          <button class="button is-secondary" type="button"><Link to={ '/ViewData' }>Cancel</Link></button>
        </div>
      </form>
    </div>
  )
}

export default AddData