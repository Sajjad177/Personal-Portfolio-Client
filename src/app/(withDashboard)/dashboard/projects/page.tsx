import AddProject from "@/components/dashboard/projectManagement/AddProject";
import ViewProject from "@/components/dashboard/projectManagement/ViewProject";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: "Sajjad's Portfolio | Projects",
  description: "Welcome to Sajjad's Portfolio",
};

const ProjectsPages = () => {
  return (
    <div className="font-space">
      <h1 className="text-3xl font-semibold text-center mb-6">Projects</h1>
      <ProtectedRoute allowedRoles={["admin"]}>
        <AddProject />
        <ViewProject />
      </ProtectedRoute>
    </div>
  );
};

export default ProjectsPages;
