import { Component } from "react";
import "./search-box.style.css";
// class formatinda yazdigimiz tüm yeni componentlerin,
// React'in bizim için oluşturduğu bazı işlevlere erişmesine izin verir.

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Suche nach einem Monster"
          onChange={this.props.propsInputAlanindakiDegisim}
        />
      </div>
    );
  }
}

export default SearchBox;
