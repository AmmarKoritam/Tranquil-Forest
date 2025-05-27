import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing); // useCapture = true

      return () => removeEventListener("click", handleClick, listenCapturing); // useCapture = true
    },
    [handler, listenCapturing]
  );

  return ref;
}
