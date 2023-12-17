"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Modal from "react-modal";
import Article from "../../../components/Article";

Modal.setAppElement("body");

type ArticlePageProps = {
    params: { articleid: string };
};

const ArticlePage = ({ params: { articleid } }: ArticlePageProps) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        router.prefetch("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Modal
                isOpen={true} // The modal should always be shown on page load, it is the 'page'
                onRequestClose={() => router.push("/")}
                contentLabel="Post modal"
            >
                <Article id={articleid} pathname={pathname} />
            </Modal>
        </>
    );
};

export default ArticlePage;
