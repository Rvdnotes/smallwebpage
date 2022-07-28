import React from "react";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';

function App() {
  return (
    <div>
      <h1 className="text-center text-danger text-capitalize">Welcome to my channel</h1> <br/>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" >
              <img src={image1} className="card-img-top" alt="..."  />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary"> */}
                  Go somewhere
                {/* </a> */}
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card" >
              <img src={image2} className="card-img-top" alt="..." style={{height: "415px"}}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary"> */}
                  Go somewhere
                {/* </a> */}
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card" >
              <img src={image3} className="card-img-top" alt="..."  />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary"> */}
                  Go somewhere
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
