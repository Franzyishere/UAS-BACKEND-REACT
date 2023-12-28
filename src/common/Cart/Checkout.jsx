import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DaftarTransaksi = () => {
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    nama: '',
    no_tlp: '',
    alamat: '',
    metode_pembayaran: '',
    created_at: '',
  });

  const [transactions, setTransactions] = useState([]);
  

  useEffect(() => {
    // Ambil data transaksi dari backend saat komponen dimuat
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/transaksi');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/transaksi');
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
      // Handle error fetching transactions
    }
  };

  const handleDelete = async (id_transaksi) => {
    try {
      const response = await axios.delete(`http://localhost:8080/delete-transaksi/${id_transaksi}`);
      console.log(response.data);

      if (response.data.status === 200) {
        alert('Transaksi Berhasil di Hapus');
        // Fetch updated transactions after deletion
        fetchTransactions();
      } else {
        alert('Gagal Menghapus Transaksi: ' + response.data.messages.success);
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting transaction');
    }
  };

  const handleUpdate = async (id_transaksi) => {
    try {
      const response = await axios.put(`http://localhost:8080/update-transaksi/${id_transaksi}`, formData);
      console.log(response.data);

      if (response.data.status === 200) {
        alert('Transaksi Berhasil di Perbarui');
        // Redirect atau lakukan tindakan setelah pembaruan
      } else {
        alert('Gagal Memperbarui Transaksi: ' + response.data.messages.success);
      }
    } catch (error) {
      console.error(error);
      alert('Error updating transaction');
    }
  };

  return (
    <div>
      <h2>Daftar Transaksi</h2>
      <table className="table-container">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>No Tlp</th>
            <th>Alamat</th>
            <th>Metode Pembayaran</th>
            <th>Tanggal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id_transaksi}>
              <td>{index + 1}</td>
              <td>{transaction.nama}</td>
              <td>{transaction.no_tlp}</td>
              <td>{transaction.alamat}</td>
              <td>{transaction.metode_pembayaran}</td>
              <td>{transaction.created_at}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id_transaksi)}>Delete</button> <p></p>
                <button onClick={() => handleUpdate(transaction.id_transaksi)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarTransaksi;
