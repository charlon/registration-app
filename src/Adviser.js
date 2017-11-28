import React from 'react'

const Adviser = () => (
    <div role="main">

      <div className="jumbotron">
        <div className="container">
        <h1 className="display-3">Hello, Adviser!</h1>
            <p className="lead">Helping you.. help students. Heal the world... make it a better place!</p>
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

            {/*https://randomuser.me/photos*/}

            <h3>Recently Viewed</h3>
            <ul className="list-unstyled mypath-student-list">
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/women/47.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Abbott, Elizabeth</h5>
                  Pre-Engineering
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/men/44.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Anderson, Aaron</h5>
                  Pre-Engineering
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/women/54.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Burns, Patty</h5>
                  Pre-Engineering
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/women/89.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Carlson, Janet</h5>
                  Pre-Engineering
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/men/41.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Dickson, Darrell</h5>
                  Pre-Engineering
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/men/31.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Davis, Anthony</h5>
                  Pre-Engineering
                </div>
              </li>
            </ul>

          </div>
          <div className="col-md-4">
            <h2>Connections</h2>
            <p>Find Courses and Register! Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>

            <p><a className="btn btn-outline-secondary" href="/analyzer" role="button">Register for Winter Quarter 2018 &raquo;</a></p>
            
            <h3>Recent Connections</h3>
            <ul className="list-unstyled mypath-student-list">
              <li className="media">
                <img className="mr-3 rounded-circle" src="https://randomuser.me/api/portraits/women/47.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">Abbott, Elizabeth</h5>
                  Pre-Engineering
                </div>
              </li>
             </ul>

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
