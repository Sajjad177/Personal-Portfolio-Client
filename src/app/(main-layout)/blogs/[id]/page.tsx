import BlogDataDetails from "@/components/Blogs/BlogDataDetails";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blogTitle = `Blog-${params.id}`;

  return {
    title: `Sajjad's Portfolio | ${blogTitle}`,
    description: `Details of ${blogTitle}`,
  };
}

const BlogDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <BlogDataDetails id={params.id} />
    </div>
  );
};

export default BlogDetails;
