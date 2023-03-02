import { useCallback, useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

export const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

export const ParameterPagination = (value) => {
  function line() {
    this.column = [];
  }
  var j = 0;
  var table = [];
  var temp = new line();
  table.push(temp);

  value.map((List) => {
    if (table[j].column.length < 6) {
      table[j].column.push(List);
    } else {
      var temp2 = new line();
      table.push(temp2);
      j = j + 1;
      table[j].column.push(List);
    }
    return 0;
  });

  return table;
};

export const isValidUrl = (string) => {
  var res = string.match(
    /­(http(s)?:\\.)?(www\)­?[-a-zA-Z0-9@:%._#­=]{2,256}\[a-z]{2,6}­\([-a-zA-Z0-9@:%_~­#?&//=]*)/g
  );
  return res;
};
