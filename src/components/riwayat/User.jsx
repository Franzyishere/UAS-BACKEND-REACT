import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../riwayat/riwayat.css';
import { Modal, Form, Button } from 'react-bootstrap';

function Home() {
  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ABC1E2',
  };

  const navLinkStyle = {
    color: '#000000',
    fontSize: '25px',
    lineHeight: '70px',
    textDecoration: 'none',
    padding: '0 20px',
  };

  const footerStyle = {
    backgroundColor: '#ABC1E2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px',
  };

  const footerTextStyle = {
    fontSize: '18px',
    color: '#FFFFFF',
  };

  // Create media query for smaller screens
  const mediaQuery = `@media (max-width: 768px) {
    img {
      max-width: 80%; // Adjust the maximum width as needed
    }
  }`;

  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idToUpdate, setIdToUpdate] = useState('');
  const [riwayatUpdate, setRiwayatUpdate] = useState('');
  const [tanggalUpdate, setTanggalUpdate] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userData = await axios.get('http://localhost:8080/user');
    setUser(userData.data);
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus pengguna?');
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/Delete/user/${id}`);
      getUser();
    }
  };

  const showModal = (data) => {
    setIdToUpdate(data.id_user);
    setRiwayatUpdate(data.riwayat); // Ganti dengan nama properti yang sesuai dari objek data
    setTanggalUpdate(data.tanggal); // Ganti dengan nama properti yang sesuai dari objek data
    setShow(true);
};


  const handleModal = () => setShow(!show);

  const updateUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!idToUpdate) {
        // Handle the case where idToUpdate is undefined
        throw new Error('User ID is undefined');
      }

      const putData = await axios.put(`http://localhost:8080/EditUser/user/${idToUpdate}`, {
        riwayat: riwayatUpdate,
        tanggal: tanggalUpdate,
      });

      alert(putData.data.messages);
      handleModal();
      window.location.reload();
    } catch (error) {
      setError('Data Gagal diubah');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={containerStyle}>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateUser}>
            <Form.Group className="mb-3" controlId="formRiwayat">
              <Form.Label>Riwayat</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setRiwayatUpdate(e.target.value)}
                value={riwayatUpdate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTanggal">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setTanggalUpdate(e.target.value)}
                value={tanggalUpdate}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="px-4" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </Button>
            {error && <p className="text-danger">{error}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal} disabled={loading}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <caption className="table-caption">Riwayat Pembelian</caption>
        <Link to={'/riwayat/AddUser'} className='custom-button'> Tambah Data </Link>
        <table className="table-container">
          <thead>
            <tr>
              <th>No</th>
              <th>Riwayat</th>
              <th>Tanggal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userData, index) => (
              <tr key={userData.id}>
                <td>{index + 1}</td>
                <td>{userData.riwayat}</td>
                <td>{userData.tanggal}</td>
                <td>
                  <button onClick={() => showModal(userData)} className='custom-button'>
                    Edit
                  </button>
                  <button onClick={() => deleteUser(userData.id_user)} className='custom-button'>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} Orbie.
        </p>
      </div>

      <style>{mediaQuery}</style>
    </div>
  );
}

export default Home;
