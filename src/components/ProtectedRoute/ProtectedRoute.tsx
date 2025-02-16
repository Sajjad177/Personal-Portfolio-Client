"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hook";
import {
  useCurrentToken,
  selectCurrentUser,
} from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Loading from "../shared/Loading";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles = ["admin"],
}) => {
  const token = useAppSelector(useCurrentToken);
  const currentUser = useAppSelector(selectCurrentUser);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.replace("/login");
    } else if (
      allowedRoles.length > 0 &&
      !allowedRoles.includes(currentUser?.role!)
    ) {
      router.replace("/");
    } else {
      setLoading(false);
    }
  }, [token, currentUser, router, allowedRoles]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return <>{children}</>;
};

export default ProtectedRoute;
