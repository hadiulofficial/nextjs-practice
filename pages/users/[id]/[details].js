import { useRouter } from "next/router"


export default function Details() {
    const router = useRouter()
    console.log(router.query);
    return(
        <div>
            <h2>user id</h2>
        </div>
    )
}