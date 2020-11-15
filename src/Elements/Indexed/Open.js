export const Open = (database, table) => {
  return new Promise((resolve) => {
    let config = window.indexedDB.open(database, 1);
    config.onupgradeneeded = (e) => {
      const db = e.target.result;
      db.createObjectStore(table, { keyPath: "id" });
    };
    config.onsuccess = (e) => {
      const db = e.target.result;
      const manage = db.transaction("nodes", "readwrite");
      const table = manage.objectStore("nodes");
      db.onerror = (e) => console.log(e.target.errorCode);
      resolve({ db: db, manage: manage, table: table });
    };
  });
};
