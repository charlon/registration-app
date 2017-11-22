import React from 'react'

const Register = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Register</h1>
            <p className="lead">Get the courses you need.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/courses" role="button">Winter Quarter 2018 Courses</a>
            </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Acknowledgements</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/" role="button">Manage Acknowledgements &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Notices</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="/courses" role="button">View Notices &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Registration Bucket</h2>
            <ul>
                <li>MATH 120</li>
                <li>MATH 120</li>
                <li>MATH 120</li>
            </ul>
            <p>Total credits: 15</p>
            <p><a className="btn btn-secondary" href="#" role="button">Winter Quarter 2018 &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>
)


export default Register;
