import AddBlog from "@/components/dashboard/blogManagement/AddBlog";
import ViewBlog from "@/components/dashboard/blogManagement/ViewBlog";

const BlogsPage = () => {
  return (
    <div className="font-space">
      <h1 className="text-3xl font-semibold text-center mb-6">Blogs</h1>
      <AddBlog />
      <ViewBlog />
    </div>
  );
};

export default BlogsPage;
