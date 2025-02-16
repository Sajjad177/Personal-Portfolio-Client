import AddBlog from "@/components/dashboard/blogManagement/AddBlog";
import ViewBlog from "@/components/dashboard/blogManagement/ViewBlog";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: "Sajjad's Portfolio | Blogs",
  description: "Welcome to Sajjad's Portfolio",
}



const BlogsPage = () => {
  return (
    <div className="font-space">
      <h1 className="text-3xl font-semibold text-center mb-6">Blogs</h1>
      <ProtectedRoute allowedRoles={["admin"]}>
        <AddBlog />
        <ViewBlog />
      </ProtectedRoute>
    </div>
  );
};

export default BlogsPage;
