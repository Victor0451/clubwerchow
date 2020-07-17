import React from "react";

const Opiniones = () => {
  return (
    <div id="clients">
      <div className="jumbotron">
        <div className="col-12 text-center">
          <h3 className="heading">Clients</h3>
          <div className="heading-underline"></div>
        </div>

        <div className="row">
          <div className="col-md-6 clients">
            <div className="row">
              <div className="col-md-4">
                <img src="/img/client1.png" alt="" />
              </div>
              <div className="col-md-8">
                <blockquote>
                  <i className="fas fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  quo numquam, aut quia cumque fuga commodi corporis mollitia
                  voluptates maxime.
                  <hr className="clients-hr" />
                  <cite>&#8212; Eric, Small Business Owner</cite>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-md-6 clients">
            <div className="row">
              <div className="col-md-4">
                <img src="/img/client2.png" alt="" />
              </div>
              <div className="col-md-8">
                <blockquote>
                  <i className="fas fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  quo numquam, aut quia cumque fuga commodi corporis mollitia
                  voluptates maxime.
                  <hr className="clients-hr" />
                  <cite>&#8212; Rachel, Professional Photographer</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 narrow text-center">
        <p className="lead">
          Want to learn more about developing Bootstrap Themes
        </p>
        <a href="" className="btn btn-secondary btn-md">
          Boosttrap Course
        </a>
      </div>
    </div>
  );
};

export default Opiniones;
