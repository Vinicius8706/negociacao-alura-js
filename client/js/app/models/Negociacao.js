class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade
    this._valor = valor;
    Object.freeze(this); //congela a instancia e nao consegue alterar os dados
  }

  get volume() {
    return this._quantidade * this.valor;
  }

  get quantidade(){
    return this._quantidade;
  }
  get data(){
    return new Date(this._data.getTime())
  }

  get valor(){
    return this._valor;
  }
}