import QueryProvider from "@/layouts/QueryProvider";
import Posts from "./post";

export default function PostsLayout() {
    return <>
        <QueryProvider>
            <Posts/>
        </QueryProvider>
    </>
}


