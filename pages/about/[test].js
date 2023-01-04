import { useRouter } from "next/router"



export default function Test(){
    const router = useRouter()
    console.log(router.pathname);
    console.log(router.query);


    return(
        <div>
            <h1>this is dynamic test file</h1>
        </div>
    )
}