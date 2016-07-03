window.jQuery = require('jquery');
require('bootstrap-webpack');

import "./style.css";

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    const list = [1, 2, 3, 4, 5, 6, 7].map(n => {
      return (
        <li className="list-group-item" key={n}>
          {new Date().toString()}
          <span className="badge">{n}</span>
        </li>
      );
    });
    return (
      <ul className="list-group">
        {list}
      </ul>
    )
  }
}

ReactDOM.render(<MyComponent />, document.body);
