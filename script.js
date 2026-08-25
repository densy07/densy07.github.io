(() => {
  "use strict";

  const searchInput = document.querySelector("#site-search");
  const clearButton = document.querySelector("#search-clear");
  const resultCount = document.querySelector("#result-count");
  const emptyState = document.querySelector("#empty-state");
  const cards = [...document.querySelectorAll("[data-site-card]")];

  if (!searchInput || !clearButton || !resultCount || !emptyState) {
    return;
  }

  const normalize = (value) => value.trim().toLocaleLowerCase("en-US");

  const updateDirectory = () => {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      const searchableText = normalize(card.dataset.search ?? "");
      const isMatch = searchableText.includes(query);

      card.hidden = !isMatch;
      visibleCount += Number(isMatch);
    });

    resultCount.textContent = query
      ? `${visibleCount} / ${cards.length} 个站点`
      : `${cards.length} 个站点`;
    clearButton.hidden = query.length === 0;
    emptyState.hidden = visibleCount !== 0;
  };

  const clearSearch = () => {
    searchInput.value = "";
    updateDirectory();
    searchInput.focus();
  };

  searchInput.addEventListener("input", updateDirectory);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && searchInput.value) {
      clearSearch();
    }
  });
  clearButton.addEventListener("click", clearSearch);
  updateDirectory();
})();
