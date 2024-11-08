export const config = {
  baseBoardsUrl:
    import.meta.env.VITE_BASE_BOARDS_API_URL ||
    "https://api.trello.com/1/members/me/boards?",

  baseListsUrl:
    import.meta.env.VITE_BASE_LISTS_API_URL ||
    "https://api.trello.com/1/boards",

  baseCardsUrl:
    import.meta.env.VITE_BASE_CARDS_API_URL || "https://api.trello.com/1/lists",

  baseChecklistsUrl:
    import.meta.env.VITE_BASE_CHECKLISTS_API_URL ||
    "https://api.trello.com/1/cards",

  baseChecklistItemUrl:
    import.meta.env.VITE_BASE_CHECKLIST_ITEM_API_URL ||
    "https://api.trello.com/1/checklists",

  key: import.meta.env.VITE_API_KEY,
  token: import.meta.env.VITE_API_TOKEN,
};
