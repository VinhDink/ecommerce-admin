import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../config";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [_id, setId] = useState("");
  const [createName, setCreateName] = useState("");
  const [att, createAtt] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/category");
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hello");
    await axios.put(`/category`, {
      name: name,
      _id: _id,
      attCate: att,
    });
    closeUpdateModal();
    window.location.reload();
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("category",
        {
          name: createName,
          attCate: att,
        });

      if (response.status === 200) {
        // Handle success
        console.log("Category created successfully!");
      } else {
        // Handle error
        console.error("Failed to create product.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    createAtt("");
    closeCreateModal();
    window.location.reload();
  };

  const openUpdateModal = (name, id) => {
    setId(id);
    setName(name);
    setShowModal(true);
    console.log(name.name);
  };

  const closeUpdateModal = () => {
    setName(name);
    setShowModal(false);
  };

  const openCreateModal = (name, id) => {
    setShowCreate(true);
  };

  const closeCreateModal = () => {
    setShowCreate(false);
  };

  const deleteCate = async(id) => {
    await axios.post(`/delete-category`, {
        _id: id,
    });
    window.location.reload();
  }

  return (
    <Container>
      <div class="d-flex justify-content-between mb-5 mt-3">
        <h1>Category Management</h1>
        <Button variant="primary" onClick={openCreateModal}>
          Add Category
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => openUpdateModal(category, category._id)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteCate(category._id)}
                >
                    Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={closeUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <form className="pm__modal-form" onSubmit={handleSubmit}>
          <Modal.Body>
            <input value={_id} hidden />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Product name"
              className="pm__form-input"
              value={name.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeUpdateModal}>
              Close
            </Button>
            <button class="btn btn-primary">Save Changes</button>
          </Modal.Footer>
        </form>
      </Modal>
      <Modal show={showCreate} onHide={closeCreateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <form className="pm__modal-form" onSubmit={handleCreate}>
          <Modal.Body>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="createName"
              name="createName"
              placeholder="Category name"
              className="pm__form-input"
              value={createName.name}
              onChange={(e) => setCreateName(e.target.value)}
            />
            <br/>
            <label htmlFor="name">Attribute</label>
            <input
              type="text"
              id="att"
              name="att"
              placeholder="Attribute"
              className="pm__form-input"
              value={att}
              onChange={(e) => createAtt(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeCreateModal}>
              Close
            </Button>
            <button class="btn btn-primary">Save Changes</button>
          </Modal.Footer>
        </form>
      </Modal>
    </Container>
  );
};

export default CategoryManager;
