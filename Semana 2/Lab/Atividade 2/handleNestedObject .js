function handleNestedObject(obj, updates) {
  // Cria uma cópia superficial do objeto original
  let newObj = { ...obj };

  // Itera sobre as chaves das atualizações
  for (let key in updates) {
    // Se o valor da chave for um objeto, chama a função recursivamente
    if (typeof updates[key] === "object" && !Array.isArray(updates[key])) {
      newObj[key] = handleNestedObject(newObj[key], updates[key]);
    } else {
      // Caso contrário, aplica a atualização diretamente
      newObj[key] = updates[key];
    }
  }

  return newObj;
}

let userProfile = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
  hobbies: ["Reading", "Hiking"],
  social: {
    twitter: "@johndoe",
    facebook: "johndoe123",
  },
};

let bookLibrary = {
  libraryName: "Central Library",
  location: {
    city: "Old Town",
    address: {
      street: "456 Book St",
      zip: "67890",
    },
  },
  books: [
    {
      title: "JavaScript Essentials",
      author: "John Smith",
      year: 2020,
    },
    {
      title: "Learning Python",
      author: "Jane Doe",
      year: 2018,
    },
  ],
  isOpen: true,
};

// Atualizando a cidade e adicionando um novo livro
const updatedLibrary = handleNestedObject(bookLibrary, {
  location: {
    city: "New Town",
  },
  books: [
    ...bookLibrary.books,
    {
      title: "Mastering React",
      author: "Chris Johnson",
      year: 2021,
    },
  ],
});

// Atualizando uma propriedade aninhada e adicionando uma nova propriedade
const updatedProfile = handleNestedObject(userProfile, {
  address: {
    city: "New City",
  },
  social: {
    facebook: "updatedFacebook",
  },
});

console.log(updatedLibrary);
console.log(updatedProfile);
