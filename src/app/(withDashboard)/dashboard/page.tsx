import ViewInDashboard from "@/components/dashboard/ViewInDashboard";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: "Sajjad's Portfolio | Dashboard",
  description: "Welcome to Sajjad's Portfolio",
};

const DashboardPage = () => {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <ViewInDashboard />
    </ProtectedRoute>
  );
};

export default DashboardPage;
