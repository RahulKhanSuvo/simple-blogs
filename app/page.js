import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div>
        <h1 className="text-center text-2xl font-bold my-6">Blog Posts</h1>
        <ul className="space-y-4 text-center px-6">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <p className="text-blue-500">{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
