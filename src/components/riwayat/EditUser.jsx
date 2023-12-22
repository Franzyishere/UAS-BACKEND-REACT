import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Update = ({ id, riwayat: initialRiwayat, tanggal: initialTanggal, onUpdate, onDelete }) => {
    const [riwayat, setRiwayat] = useState(initialRiwayat);
    const [tanggal, setTanggal] = useState(initialTanggal);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Use useEffect to update local state when the id prop changes
    useEffect(() => {
        setRiwayat(initialRiwayat);
        setTanggal(initialTanggal);
    }, [id, initialRiwayat, initialTanggal]);

    const updateUser = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            // Ensure id is defined
            if (id === undefined) {
                throw new Error("ID is undefined");
            }

            const putData = await axios.put(
                `http://localhost:8080/Update/user/${id}`,
                {
                    riwayat: riwayat,
                    tanggal: tanggal
                }
            );
            alert(putData.data.messages);
            onUpdate(id, riwayat, tanggal); // Pass updated data to parent component
            closeModal();
        } catch (error) {
            setError("Data Gagal diubah");
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async () => {
        setLoading(true);

        try {
            // Ensure id is defined
            if (id === undefined) {
                throw new Error("ID is undefined");
            }

            const deleteData = await axios.delete(`http://localhost:8080/Delete/user/${id}`);
            alert(deleteData.data.messages);
            onDelete(id); // Pass deleted data to parent component
            closeModal();
        } catch (error) {
            setError("Data Gagal dihapus");
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setShow(false);
        setError(null);
    };

    return (
        <div>
            <Modal show={show} onHide={closeModal}>
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
                                onChange={(e) => setRiwayat(e.target.value)}
                                value={riwayat}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTanggal">
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => setTanggal(e.target.value)}
                                value={tanggal}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="px-4" disabled={loading}>
                            {loading ? 'Updating...' : 'Update'}
                        </Button>
                        <Button variant="danger" className="mx-2" onClick={deleteUser} disabled={loading}>
                            {loading ? 'Deleting...' : 'Delete'}
                        </Button>
                        {error && <p className="text-danger">{error}</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal} disabled={loading}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Update;
