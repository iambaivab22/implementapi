import React, { useEffect, useState } from "react";
import "./Data.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./Completed.css";

const Ongoing = () => {
  const [details, setdetails] = useState([]);
  const [mainde, setmainde] = useState(true);
  const [search, setsearch] = useState();
  const [maindata, setmaindata] = useState([]);
  useEffect(() => {
    async function datatanne() {
      try {
        console.log("merobaivab");
        let merodata = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        let result = await merodata.json();

        setdetails(result);
        setmainde(false);
      } catch (err) {
        console.log("the error is ${err}");
      }
    }
    datatanne();
  }, []);

  useEffect(() => {}, [details]);

  useEffect(() => {
    console.log(search);
    const filtereddata = details.filter((item) => {
      return item.title.includes(search);
    });
    setdetails(filtereddata);
  }, [search]);

  const searchhandler = (event) => {
    setsearch(event.target.value);
  };

  // useEffect(() => {
  //   console.log(details);
  // }, [details]);

  useEffect(() => {
    const falsedata = details.filter((item) => item.completed === false);
    console.log(falsedata);
    setmaindata(falsedata);
  }, [details]);

  return (
    <>
      <div className="my-6">
        <input
          type="text"
          placeholder="search title"
          name="title"
          onChange={searchhandler}
        ></input>
      </div>

      <div className="linkss">
        <Link to="/" className="btn btn-primary eachlinks">
          Completed Task
        </Link>
        <Link to="ongoingtask" className="btn btn-succeess eachlinks">
          Ongoing Task
        </Link>
      </div>

      <div className="container">
        <div className="row my-5">
          {/* {mainde ? (
        <h1>loading</h1>
      ) : (
        details.map((items) => {
          return (
            <>
            
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 bg-dark">
              <div className="bg-light datacol  d-flex justify-content-center align-items-center flex-column">
             <div> <h4 className="userid">{`Userid: ${items.userId}`}</h4></div>
              
             <div> <p className="title">{`Title:${items.title}`}</p></div>
              <div><p className="completed">{`completed: ${items.completed}`}</p></div>
              </div>
              </div>
             
            </>
          );
        })
      )} */}

          <Product details={maindata} mainde={mainde}></Product>
        </div>
      </div>
    </>
  );
};

export default Ongoing;
