// import React, { createContext, useContext, useState, useEffect } from "react";

// //correct code
// const AuthContext = createContext(null);

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const login = (userData) => {
//     setUser(userData);
//   };
//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === null) {
//     throw new Error("Login First For Accessing....");
//   }
//   return context;
// };
