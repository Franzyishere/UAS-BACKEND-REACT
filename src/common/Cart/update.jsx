import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DaftarTransaksi = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    id_transaksi: '',
    nama: '',
    no_tlp: '',
    alamat: '',
    metode_pembayaran: '',
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);

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

  const handleUpdate = (transaction) => {
    // Set data transaksi ke dalam form untuk pembaruan
    setFormData({
      id_transaksi: transaction.id_transaksi,
      nama: transaction.nama,
      no_tlp: transaction.no_tlp,
      alamat: transaction.alamat,
      metode_pembayaran: transaction.metode_pembayaran,
    });

    // Set mode pembaruan menjadi aktif
    setIsUpdateMode(true);
  };

  const handleCancelUpdate = () => {
    // Reset form dan nonaktifkan mode pembaruan
    setFormData({
      id_transaksi: '',
      nama: '',
      no_tlp: '',
      alamat: '',
      metode_pembayaran: '',
    });
    setIsUpdateMode(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdateMode) {
        // Lakukan logika pembaruan sesuai kebutuhan
        const response = await axios.put(`http://localhost:8080/update-transaksi/${formData.id_transaksi}`, formData);
        console.log(response.data);

        if (response.data.status === 200) {
          alert('Transaksi Berhasil di Update');
          // Reset form, nonaktifkan mode pembaruan, dan ambil data terkini
          handleCancelUpdate();
          fetchTransactions();
        } else {
          alert('Gagal Mengupdate Transaksi: ' + response.data.messages.success);
        }
      } else {
        // Lakukan logika penambahan transaksi sesuai kebutuhan
        const response = await axios.post('http://localhost:8080/insert-transaksi', formData);
        console.log(response.data);

        if (response.data.status === 200) {
          alert('Transaksi Berhasil ditambahkan');
          // Reset form dan ambil data terkini
          setFormData({
            id_transaksi: '',
            nama: '',
            no_tlp: '',
            alamat: '',
            metode_pembayaran: '',
          });
          fetchTransactions();
        } else {
          alert('Gagal Menambahkan Transaksi: ' + response.data.messages.success);
        }
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
        // Ambil data terkini setelah penghapusan
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
      <h2>Daftar Transaksi</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" name="nama" value={formData.nama} onChange={handleFormChange} />
        </label>
        <label>
          No Tlp:
          <input type="text" name="no_tlp" value={formData.no_tlp} onChange={handleFormChange} />
        </label>
        <label>
          Alamat:
          <input type="text" name="alamat" value={formData.alamat} onChange={handleFormChange} />
        </label>
        <label>
          Metode Pembayaran:
          <input type="text" name="metode_pembayaran" value={formData.metode_pembayaran} onChange={handleFormChange} />
        </label>
        <button type="submit">{isUpdateMode ? 'Update' : 'Submit'}</button>
        {isUpdateMode && (
          <button type="button" onClick={handleCancelUpdate}>
            Cancel Update
          </button>
        )}
      </form>
      {/* Tabel Transaksi */}
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
                <button onClick={() => handleUpdate(transaction)}>Update</button> <p></p>
                <button onClick={() => handleDelete(transaction.id_transaksi)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarTransaksi;
