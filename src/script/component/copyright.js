class Copyright extends HTMLElement {

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
      box-sizing: border-box;
      }
    :host {
        display: block;
        width: 100%;
        background-color: #A3A8D0;
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        bottom: 0px;
     }  
      p {
        padding: 16px;
        text-align: center;
        font-weight: bold;
        bottom: 0px;
      }
    </style>
      <p>&copy;2020, by Dwi Setyo Wiratomo</p>`;
  }
}

customElements.define("copyright", Copyright);