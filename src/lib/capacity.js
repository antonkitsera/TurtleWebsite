// https://www.codementor.io/agustinchiappeberrini/lazy-evaluation-and-javascript-a5m7g8gs3
const memo = creator => {
  let res;
  let processed = false;
  return function() {
    if (processed) return res;
    res = creator.apply(this, arguments);
    processed = true;
    return res;
  };
};

// https://stackoverflow.com/a/31090240/1327651
const isNode = new Function(
  "try {return this===global;}catch(e){return false;}"
);
const isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
);

// from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage

const storageAvailable = type => {
  try {
    const storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
};

const capacity = {
  isSessionStorageAvailable: memo(() => {
    return storageAvailable("sessionStorage");
  }),
  isLocalStorageAvailable: memo(() => {
    return storageAvailable("localStorage");
  }),
  isBrowser: memo(() => {
    return isBrowser();
  }),
  isNode: memo(() => {
    return isNode();
  })
};

export default capacity;
