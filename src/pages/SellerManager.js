import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../config"; 

const SellerManager = () => {

  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/sellers"); 
        setSellers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeStatus = async (id, status) => {
    const response = await axios.put(`/seller/status`, {
        id: id,
        status: status,
        });
    console.log(response);
        window.location.reload();
  };


  return (
    <Container>
      <h1>Seller Approval</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Business name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller._id}>
              <td>{seller.email}</td>
                <td>{seller.phone}</td>
              <td>{seller.businessName}</td>
              <td>{seller.status}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => changeStatus(seller._id, "Accepted")}
                >
                  Accept
                </Button>
                <Button
                  variant="info"
                  onClick={() => changeStatus(seller._id, "Rejected")}
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SellerManager;
