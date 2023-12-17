import styles from "./styles.module.css";
import type { PostProps } from "@/types.d";

const Post = ({ id, pathname }: PostProps) => {
    return (
        <div className={styles.post}>
            I am the post {id}; my pathname is: {pathname}
        </div>
    );
};

export default Post;
