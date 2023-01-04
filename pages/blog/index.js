import Link from "next/link";
import { useRouter } from "next/router";
import { getPosts } from "../../utils/wordpress";

export default function Blog({ posts }) {
  const router = useRouter()
  console.log(posts);

  

  const posList = posts.map((post) => {
    return (
      <div>
        <li key={post.id}>{post.title.rendered}</li>
        <Link href={`/blog/${post.id}`}>Read more</Link>
      </div>
    )
  })

  return (
    <div>
      <h3>this is posts page</h3>
      {posList}
    </div>
  )
}

export const getStaticProps = async context => {
  const posts = await getPosts()
  return {
    props: {
      posts
    },
  };
};
