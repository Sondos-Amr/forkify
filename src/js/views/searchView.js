class SearchView {
  #parentInputSearch = document.querySelector('.search');
  getQuery() {
    return this.#parentInputSearch.querySelector('.search__field').value;
  }
  addHandlerSearch(handeler) {
    this.#parentInputSearch.addEventListener('submit', function (e) {
      e.preventDefault();
      handeler();
    });
  }
}
export default new SearchView();
