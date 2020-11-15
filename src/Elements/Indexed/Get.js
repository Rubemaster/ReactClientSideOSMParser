export const Get = (db, id) =>
  new Promise((resolve) => {
    const load = db.table.get(id);
    load.onsuccess = () => resolve(load.result);
    load.onerror = (e) =>
      resolve({ status: "fail", error_message: e.target.errorCode });
  });
