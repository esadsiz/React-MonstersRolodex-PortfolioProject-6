import { Component } from "react";
// class formatinda yazdigimiz tüm yeni componentlerin,
// React'in bizim için oluşturduğu bazı işlevlere erişmesine izin verir.

import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      canavarlarListesi: [],
      inputAlani: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((cekilenVeri) => cekilenVeri.json())
      .then((cekilenVerininElemanlari) =>
        this.setState(() => {
          return { canavarlarListesi: cekilenVerininElemanlari };
        })
      );
  }

  inputAlanindakiDegisim = (event) => {
    const inputAlani = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { inputAlani };
      // state'deki inputAlani'ni güncelle.
    });
  };

  render() {
    const { inputAlani, canavarlarListesi } = this.state;
    const { inputAlanindakiDegisim } = this;

    const filtrelenmisKopya = canavarlarListesi.filter(
      (canavarlarListesininHerBirElemani) => {
        return canavarlarListesininHerBirElemani.name
          .toLocaleLowerCase()
          .includes(inputAlani);
        // canavarlarListesi'ni al, kopyala, kopyanin icindeki canavarlarListesininHerBirElemani'nin name'i girilenInput'u iceriyorsa; canavarlarListesininHerBirElemani ya da canavarlarListesininHerBirElemani'larini filtrelenmisKopya adinda bir array'a at.
      }
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <h4>
          ('wurde unter Verwendung der klassenbasierten Komponente erstellt)
        </h4>
        <SearchBox propsInputAlanindakiDegisim={inputAlanindakiDegisim} />
        {/*filtrelenmisKopya.map((filtrelenmisKopyadakiHerBirEleman) => {
          return (
            <div key={filtrelenmisKopyadakiHerBirEleman.id}>
              <h1>{filtrelenmisKopyadakiHerBirEleman.name}</h1>
            </div>
          );
          //key; hangi öğelerin değiştiğini, eklendiğini ya da silindiğini belirleme noktasında React’e yardımcı olur.
        })*/}
        <CardList
          propsFiltrelenmisKopya={filtrelenmisKopya}
          // randomBirBaskaIsim, öteki tarafa indexe sahip bir array formatinda gider.
          // öteki tarafa her seyi atabiliriz; fonksiyonlar, diziler, stringler ...
          // nasil ki state her güncellendiginde komponent render eder, props her degistiginde de render eder.
        />
      </div>
    );
  }
}

export default App;
