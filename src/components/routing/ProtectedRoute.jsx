// import React, { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router";
// import { useAuth } from "./AuthProvider";

// export default function ProtectedRoute({ role }) {
//   const user = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user || (role && !user.role.includes(role))) {
//       navigate("/", { replace: true });
//     }
//   }, [navigate, user, role]);

//   return <Outlet />;
// }


import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function ProtectedRoute({ children }) {
  const user = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate('/signin', { replace: true });
    }
  }, [navigate, user]);
  return children;
}