import React from 'react'

const Home = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Plan</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="#" role="button">Manage Plan &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Register</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/register" role="button">Winter Quarter 2018 &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Track</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" href="#" role="button">Audit Degree (DARS) &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>

)

export default Home
