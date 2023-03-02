import React from "react";

export default function useLocalStorageState(key, defaultValue) {
  const [state, setState] = React.useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (err) {
      value = defaultValue;
    }
    return value;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
}
