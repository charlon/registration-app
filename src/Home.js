import React from 'react'

const Home = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
            <h1 className="display-3">Hello, Student!</h1>
            <p className="lead">Your path to a degree starts here.</p>
            <hr className="my-4" />
            <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/men/31.jpg" alt="Generic placeholder image" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Plan</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/plan" role="button">Manage Plan &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Registration</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/registration" role="button">Register for Winter Quarter 2018 &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Audit</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-outline-secondary" href="/audit" role="button">Degree Audit &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>

)

export default Home
