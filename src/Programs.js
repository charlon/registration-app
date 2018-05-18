import React from 'react'

const Templates = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Degree Programs</h1>
            <p className="lead">Find a program to get a degree in!</p>
            <div class="input-group input-group-lg">
            <input type="text" class="form-control" placeholder="Try 'Math'" aria-label="Username" aria-describedby="sizing-addon1" />
            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Popular Programs</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/" role="button">Explore Programs &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>safda</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-outline-secondary" href="#" role="button">Explore Degree Templates &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>asdfafsd</h2>
            <p>Connect your Plan with an Adviser and get useful information. Notes and Recommendations. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-outline-secondary" href="/connections" role="button">Connect with your Adviser &raquo;</a></p>
          </div>
        </div>


      </div>

    </div>
)


export default Templates;
