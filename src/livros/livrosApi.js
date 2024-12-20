const urlApi =
  "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books";
export async function findAll() {
  const requestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12121847",
    },
  };
  const httpResponse = await fetch(urlApi, requestInit);
  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    throw new Error(
      "Não foi possível obter os livros. Favor entrar em contato com o suporte."
    );
  }
}
export async function findById(id) {
  const requestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12121847",
    },
  };
  const response = await fetch(
    `https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books/${id}`,
    requestInit
  );
  if (!response.ok) {
    throw new Error("Livro não encontrado");
  }
  return await response.json();
}
