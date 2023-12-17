import Link from "next/link";
import styles from "./styles.module.css";

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostCardGrid() {
    return (
        <div className={styles.postCardGridWrapper}>
            <h2>With QueryString Routing, and a reload wont use the modal</h2>
            <div className={styles.postCardGrid}>
                {data.map((id, index) => (
                    <Link className={styles.postCard} key={index} href={`/post/${id}`}>
                        {id}
                    </Link>
                ))}
            </div>

            <h2>With Dynamic Routing, and reloads will keep the modal</h2>
            <div className={styles.postCardGrid}>
                {data.map((id, index) => (
                    <Link className={styles.postCard} key={index} href="/article/[articleid]" as={`/article/${id}`}>
                        {id}
                    </Link>
                ))}
            </div>
        </div>
    );
}
