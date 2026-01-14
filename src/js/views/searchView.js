class SearcView {
  #parentInputSearch = document.querySelector('.search');
  getQuery() {
    return this.#parentInputSearch.querySelector('.search__btn').value;
  }
}
export default new SearcView();
