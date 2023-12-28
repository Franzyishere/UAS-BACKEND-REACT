// Transaksi.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FormReservasi.css";

const Transaksi = () => {
  const [formData, setFormData] = useState({
    nama: '',
    no_tlp: '',
    alamat: '',
    metode_pembayaran: '',
    created_at: '',
  });

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Panggil fungsi untuk mendapatkan daftar transaksi saat komponen dimuat
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/insert-transaksi', formData);
      console.log(response.data);

      if (response.data.status === 200) {
        alert('Proses Transaksi Berhasil');
        // Reset form after successful submission
        setFormData({
          nama: '',
          no_tlp: '',
          alamat: '',
          metode_pembayaran: '',
          created_at: '',
        });

        // Fetch updated transactions after submission
        fetchTransactions();
      } else {
        alert('Error processing transaction: ' + response.data.messages.success);
      }
    } catch (error) {
      console.error(error);
      alert('Error processing transaction');
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} />
        </label>
        <label>
          No Tlp:
          <input type="text" name="no_tlp" value={formData.no_tlp} onChange={handleChange} />
        </label>
        <label>
          Alamat:
          <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} />
        </label>
        <label>
          Metode Pembayaran:
          <input type="text" name="metode_pembayaran" value={formData.metode_pembayaran} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Transaction List */}
      {/* <table>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id_transaksi}>
              <td>{index + 1}</td>
              <td>{transaction.nama}</td>
              <td>{transaction.no_tlp}</td>
              <td>{transaction.alamat}</td>
              <td>{transaction.metode_pembayaran}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id_transaksi)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Transaksi;
