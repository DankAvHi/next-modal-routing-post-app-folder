"use client";

import { useParams, usePathname } from "next/navigation";
import Post from "../../../components/Post";
import type { Params } from "@/types.d";

const PostPage = () => {
    const { postid } = useParams<Params>();
    const pathname = usePathname();

    return <Post id={postid} pathname={pathname} />;
};

export default PostPage;
