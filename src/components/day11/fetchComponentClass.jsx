import React from "react";
import { Component } from "react";
import axios from "axios";
import "./day11.css";

class FetchComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      loader: true,
      data: [],
    };
  }

  componentDidMount() {
    console.info("Component did mount");
    // this.fetchWithAsyncAwait();
    this.fetchWithAxiosAndAsyncAwait();
  }

  fetchWithAxiosAndAsyncAwait = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos/",
      });
      console.log("Response", response)
      const { data } = response;
      console.log(response.data);
      this.setState({
        loader: false,
        data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  fetchWithPromise = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        response.json().then((jsonResponse) => {
          console.log("JSON Response", jsonResponse);
          this.setState({
            loader: false,
            data: jsonResponse,
          });
        });
      })
      .catch((e) => console.error(e));
  };

  fetchWithAsyncAwait = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      console.log("Response", response);
      const jsonResponse = await response.json();
      console.log("JSON Response", jsonResponse);
      this.setState({
        loader: false,
        data: jsonResponse,
      });
    } catch (e) {
      console.error(e);
    }
  };

  componentDidUpdate() {
    console.info("Component did update");
  }

  componentWillUnmount() {
    console.info("Component will unount");
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    const { loader, data } = this.state;
    return (
      <div>
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Document Id</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj) => {
                const { id, userId, title, completed } = obj;
                return (
                  <tr>
                    <td>{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{completed ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default FetchComponentClass;
