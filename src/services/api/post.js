import axios from "axios";

export async function createBoard(url, itemName) {
  const response = await axios.post(
    url,
    {
      name: itemName,
      defaultLabels: true,
      defaultLists: true,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export async function createList(url, name, list) {
  const response = await axios.post(
    url,
    {
      name: name,
      idBoard: list.idBoard,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export async function createCard(url, name, list) {
  const response = await axios.post(
    url,
    {
      name: name,
      idList: list.id,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export async function createChecklist(name, url) {
  const response = await axios.post(url, null, {
    params: {
      name: name,
    },
  });

  return response.data;
}

export async function createChecklistItem(name, url) {
  const response = await axios.post(url, null, {
    params: {
      name: name,
    },
  });

  return response.data;
}
