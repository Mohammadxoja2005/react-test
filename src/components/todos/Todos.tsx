import { FC, useEffect } from 'react'
// styles
import styles from "./index.module.scss";
// mobx
import { observer } from 'mobx-react-lite';
import todos from '../../store/todos';

const Todos: FC = observer(() => {

    useEffect(() => {
        todos.fetchTodosFn()
    }, [])


    return (
        <div className={styles.todos}>
            <div className={styles.todos_container}>
                {!todos.isLoading
                    ?
                    <div className={styles.todos_list}>
                        <p className={styles.todos_list_name}>{'name'}</p>
                    </div>
                    : <div>Loading...</div>}
            </div>
        </div>
    )
})

export default Todos