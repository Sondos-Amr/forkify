class SearchView {
  #parentInputSearch = document.querySelector('.search');
  getQuery() {
    const query = this.#parentInputSearch.querySelector('.search__field').value;
    this.#clearInputSearch();
    return query;
  }
  addHandlerSearch(handeler) {
    this.#parentInputSearch.addEventListener('submit', function (e) {
      e.preventDefault();
      handeler();
    });
  }
  #clearInputSearch() {
    this.#parentInputSearch.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
