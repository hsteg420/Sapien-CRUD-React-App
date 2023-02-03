import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  // async and await waits till a request is completed
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <br />
        <h3>Client Details</h3>
      </div>
      <br />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="table-dark">
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  className="btn btn-primary mr-2 "
                  style={{ marginRight: "10px" }}
                >
                  <Link
                    to={`/users/${user.id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    View
                  </Link>
                </Button>

                <Button
                  className="btn btn-success mr-2"
                  style={{ marginRight: "10px" }}
                >
                  <Link
                    to={`/users/edit/${user.id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </Button>

                <Button
                  className="btn btn-danger mr-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
