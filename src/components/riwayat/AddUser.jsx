import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Tidak perlu import Link jika tidak digunakan
import axios from 'axios';
import './Add.css';

const AddUser = () => { // Ubah nama komponen menjadi AddUser
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  };

  const contentContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
  };

  const contentStyle = {
    textAlign: "center",
    padding: "150px",
    maxWidth: "50%",
  };

  const buttonStyle = {
    fontSize: "15px",
    padding: "5px 10px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
  };

  const [riwayat, setRiwayat] = useState('');
  const [tanggal, setTanggal] = useState('');
  const navigate = useNavigate();

  const handlesSubmit = async (e) => {
    if (riwayat === "" || tanggal === "") {
      alert('Lengkapi inputan Anda, Silahkan Coba Lagi!');
    } else {
      try {
        e.preventDefault();
        const response = await axios.post(
          'http://localhost:8080/AddUser/user',
          {
            riwayat: riwayat,
            tanggal: tanggal
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
  
        alert('Berhasil Ditambahkan!');
        navigate('/');
      } catch (error) {
        console.error('Error adding user:', error.response);
        alert('Terjadi Kesalahan, Silahkan Coba Lagi!');
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <form style={contentStyle} onSubmit={handlesSubmit}>
          <fieldset>
            <legend className="table-caption">FORM INPUT DATA</legend>
            <div className="field">
              <label htmlFor="riwayat" className="label">
                Riwayat
              </label>
              <input
                type="text"
                id="riwayat"
                className="input"
                value={riwayat}
                onChange={(e) => setRiwayat(e.target.value)}
                placeholder="Riwayat"
              />
            </div>
            <div className="field">
              <label htmlFor="tanggal" className="label">
                Tanggal
              </label>
              <input
                type="date"
                id="tanggal"
                className="input"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                placeholder="Tanggal"
              />
            </div>
            <div>
              <button type="submit" style={buttonStyle}>
                Tambahkan Data
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddUser; // Ubah export menjadi AddUser
