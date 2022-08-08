export const setSearchHistory = (
  inputValue: string,
  history: string[],
  setHistory: (value: string[]) => void
) => {
  const historyEntry = inputValue.trim();

  if (historyEntry === '') {
    return null;
  }

  setHistory([historyEntry, ...history]);

  if (history.length > 3) {
    const oldHistory = history.slice(0, -1);
    setHistory([historyEntry, ...oldHistory]);
  }

  if (history.includes(historyEntry)) {
    const oldHistory = history.filter((oldHistoryEntry) => oldHistoryEntry !== historyEntry);
    setHistory([historyEntry, ...oldHistory]);
  }
};
