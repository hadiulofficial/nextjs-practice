import Link from "next/link"
import { getPosts } from "../../utils/wordpress";



export default function Post({posts}){
    

    return(
        <div>
            <h2>single post</h2>
            <p>

            </p>
            <Link href="/blog/">Back</Link>
        </div>
    )
}

export const getServerProps = async context => {
    const posts = await getPosts()
    return {
      props: {
        posts
      },
    };
  };
  