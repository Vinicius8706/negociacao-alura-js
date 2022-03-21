class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);// mantem a associacao com o document
    this._inputData = $("#data")
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor"); // melhora a perfomance evitar percorrer o DOM inumeras vezes
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();
    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )

    this._listaNegociacoes.adiciona(negociacao)
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);

  }

  _limpaFormulario() {
    this._inputData.value = ""
    this._inputQuantidade.value = ""
    this._inputValor.value = ""

    this._inputQuantidade.focus();
  }
}