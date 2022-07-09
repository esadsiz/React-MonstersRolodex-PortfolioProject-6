import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    console.log(this.props);
    const { id, name, email } = this.props.propsBuObjeninTamami;
    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
