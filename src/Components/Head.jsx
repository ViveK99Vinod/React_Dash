import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Head() {
  return (
    <div className="text-right container">
      <div className="row">
        <div className="col-8">
          <h4>XYZ Enterprises</h4>
        </div>
        <div className="col-4">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {/* Add your button content here */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Head;
