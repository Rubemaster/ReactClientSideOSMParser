export const Put = (db, object) => {
  const load = db.table.put(object);
  return new Promise((resolve) => {
    load.onsuccess = (e) => {
      resolve({ status: "success" });
    };
    load.onerror = (e) => {
      resolve({ status: "fail", error_message: e.target.errorCode });
    };
  });
};
