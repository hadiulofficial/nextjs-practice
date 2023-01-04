import Link from "next/link"



export default function Home() {
  return (
    <div>
      <h2>this is home page </h2>
      <ul>l
        <li>
          <Link replace href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}


