import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="container  mt-10 md:mx-auto bg-white">
        <h1 className="text-center pt-4 text-2xl font-bold ">Blog Posts</h1>
        <ul className="text-center px-6">
          {posts.map((post, index) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <p className="hover:text-[#F13B3B]">
                  <span> {index + 1} </span>
                  {post.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
