import React from 'react'

const pStyle = {
  width: '80%',
};

const Home = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
            <h1 className="display-3">Hello, Student!</h1>
            <p className="lead">Your path to a degree starts here.</p>
            <hr className="my-4" />
            <div className="row">
              <div className="col-md-4">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/men/31.jpg" alt="Generic placeholder image" />
              </div>
              <div className="col-md-8">

                <div class="card mb-2">
                  <div class="card-body">
                    <h5 class="card-title">Your Intended Major</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Business</h6>
                    <div className="progress mb-2">
                     <div className="progress-bar bg-success" role="progressbar" style={pStyle} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Progress towards degree</div>
                   </div>
                   <p><a href="/" role="button">Explore other majors</a></p>
                  </div>
                </div>

                <div class="card mb-2">
                  <div class="card-body">
                    <h5 class="card-title">Audit Analysis</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Business</h6>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Pivot Analysis</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Business</h6>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Plan</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/" role="button">Manage Plan &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Majors</h2>
            <p>Find Majors! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/" role="button">Explore Majors</a></p>
          </div>
          <div className="col-md-4">
            <h2>Audit</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-outline-secondary" href="/" role="button">Degree Audit &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>

)

export default Home
