export const setSearchHistory = (
  inputValue: string,
  history: string[],
  setHistory: (value: string[]) => void
) => {
  const historyEntry = inputValue.trim();

  if (history.includes(historyEntry)) {
    return null;
  }

  setHistory([historyEntry, ...history]);

  if (history.length > 3) {
    const oldHistory = history.slice(0, -1);
    setHistory([historyEntry, ...oldHistory]);
  }
};
