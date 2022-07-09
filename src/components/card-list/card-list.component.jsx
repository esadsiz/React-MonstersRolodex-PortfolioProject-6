import { Component } from "react";
// class formatinda yazdigimiz tüm yeni componentlerin,
// React'in bizim için oluşturduğu bazı işlevlere erişmesine izin verir.
import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props.id);
    return (
      <div className="card-list">
        {this.props.propsFiltrelenmisKopya.map((buArrayinHerBirElemani) => {
          return (
            <Card
              key={buArrayinHerBirElemani.id}
              propsBuObjeninTamami={buArrayinHerBirElemani}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
