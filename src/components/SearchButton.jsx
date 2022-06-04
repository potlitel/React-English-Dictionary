export function SearchButton({ search, isLoading }) {
  return (
    <div class="td" id="s-cover">
      <button onClick={search} disabled={isLoading}>
        <div id="s-circle"></div>
        <span></span>
      </button>
    </div>
  );
}
