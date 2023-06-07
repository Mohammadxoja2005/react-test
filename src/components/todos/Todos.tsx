import { FC } from 'react'
import styles from "./index.module.scss";

const Todos: FC = () => {
    return (
        <div className={styles.todos}>
            <div className={styles.todos_container}>
                <div className={styles.todos_list}>
                    <p className={styles.todos_list_name} >name</p>
                </div>
            </div>
        </div>
    )
}

export default Todos