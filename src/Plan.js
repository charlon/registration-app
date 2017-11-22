import React from 'react'

const Plan = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Plan</h1>
            <p className="lead">Use a template or develop your own plan to graduation.</p>
            <hr className="my-4" />

            <h2>Winter Quarter 2018</h2>
            <p>You currently do not have anything planned. </p>
            <a className="btn btn-primary btn-lg" href="/courses" role="button">Add Courses</a>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Programs</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/" role="button">Explore Programs &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Degree Templates</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" href="#" role="button">Explore Degree Templates &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Advising</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/courses" role="button">Connect with Adviser &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>
)


export default Plan;
