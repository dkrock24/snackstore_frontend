import React from  'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const  Product = () => {

   return (

    <div class="container">
        
        <div className="row">

            <div class="col-lg-3">

              <h1 class="my-4">Search.</h1>
              <div class="list-group">
              <form method="post" action="/product">
                
                <input type="text" name="b" className="form-control" placeholder="Search Product" />
                
                <input type="submit" name="" className="btn btn-info form-control" />
              </form>
              </div>
            </div>

            <div class="col-lg-9">

                <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                </div>

                

             
            </div>
        </div>

    </div>
        
      
    );
  
}

export default Product;