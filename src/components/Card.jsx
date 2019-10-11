import React from 'react';
import './Card.scss';

/**
 * The card that makes all other cards look lame
 *
 * @version 0.0.1
 * @author [Justin Gow](https://github.com/jaegow)
 */
function Card() {
  return (
    <div className="card">

      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder thing for a thing" />
        </figure>
      </div>

      <header className="card-header">
        <p className="card-header-title">Component</p>
      </header>

      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>

      <footer className="card-footer">
        <a href="#" className="card-footer-item">Save</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
      </footer>

    </div>
  );
}

export default Card;
