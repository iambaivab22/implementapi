import React from "react";

const Product = (props) => {
  const mainde = props.mainde;

  const details = props.details;
  return (
    <>
      {mainde ? (
        <h1>loading</h1>
      ) : (
        details.map((items) => {
          return (
            <>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 bg-dark">
                <div className="bg-light datacol  d-flex justify-content-center align-items-center flex-column">
                  <div>
                    {" "}
                    <h4 className="userid">{`Userid: ${items.userId}`}</h4>
                  </div>

                  <div>
                    {" "}
                    <p className="title">{`Title:${items.title}`}</p>
                  </div>
                  <div>
                    <p className="completed">{`completed: ${items.completed}`}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Product;
