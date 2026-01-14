class SearchView {
  _parentInputSearch = document.querySelector('.search');
  getQuery() {
    const query = this._parentInputSearch.querySelector('.search__field').value;
    this._clearInputSearch();
    return query;
  }
  addHandlerSearch(handeler) {
    this._parentInputSearch.addEventListener('submit', function (e) {
      e.preventDefault();
      handeler();
    });
  }
  _clearInputSearch() {
    this._parentInputSearch.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
