import React from 'react'

const Adviser = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Hello, Adviser!</h1>
            <p className="lead">Helping you.. help students. Eventually helping the world!</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-outline-primary btn-lg" href="#" role="button">Get Started</a>
            </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Students</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/students" role="button">Search Students &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Analyzer</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/analyzer" role="button">Register for Winter Quarter 2018 &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Pivot</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-outline-secondary" href="/pivot" role="button">Access Pivot &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>

)

export default Adviser
