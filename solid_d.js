// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then((r) => r.json());
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "data from localStorage";
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(data) {
    return this.client.clientGet(data);
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData("rand"));
