class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
     
    :host {
      display: block;
      padding: 16px;
      width: 100%;
      background-color: #A3A8D0;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    
    /*Selector :host merupakan selector yang digunakan untuk menunjuk
     element :host yang menerapkan Shadow DOM. Pada host kita tidak 
     dapat mengatur padding sehingga kita perlu memindahkannya pada elemen <h2>.*/

    h2 {
      padding: 16px;
      text-align: center;
      text-transform: uppercase;
      }
    </style>
      <h2>Food Information</h2>`;
  }
}

customElements.define("app-bar", AppBar);