"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import Post from "../../../../components/Post";
import type { Params } from "@/types.d";
import Modal from "react-modal";

Modal.setAppElement("body");

const PostPage = () => {
    const { postid } = useParams<Params>();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Modal isOpen={!!postid} onRequestClose={() => router.back()} contentLabel="Post modal">
            asdf
            <Post id={postid} pathname={pathname} />
        </Modal>
    );
};

export default PostPage;
