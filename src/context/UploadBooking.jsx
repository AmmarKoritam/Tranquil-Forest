/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const UploadBookingContext = createContext();

function UploadBookingProvider({ children }) {
  const [isUploadBooking, setIsUploadBooking] = useState(false);

  function toggleUploadBooking() {
    setIsUploadBooking((isDark) => !isDark);
  }

  return (
    <UploadBookingContext.Provider
      value={{ isUploadBooking, toggleUploadBooking }}
    >
      {children}
    </UploadBookingContext.Provider>
  );
}

function useUploadBooking() {
  const context = useContext(UploadBookingContext);

  if (context === undefined)
    throw new Error(
      "UploadBookingContext was used outside of UploadBookingProvider"
    );

  return context;
}

export { UploadBookingProvider, useUploadBooking };
