import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DaftarTransaksi = () => {
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
              <td>{transaction.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarTransaksi;
