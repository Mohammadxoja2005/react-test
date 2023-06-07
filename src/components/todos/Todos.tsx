import { FC, useEffect, useState } from 'react'
// styles
import styles from "./index.module.scss";
// mobx
import { observer } from 'mobx-react-lite';
import todos from '../../store/todos';

const Todos: FC = observer(() => {
    const [isFetching, setIsFetching] = useState<boolean>(true);

    useEffect(() => {
        if (isFetching) {
            todos.fetchTodosFn()
                .finally(() => {
                    setIsFetching(false)
                })
        }
    }, [isFetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollFn)

        return () => {
            document.removeEventListener('scroll', scrollFn);
        }
    })

    const scrollFn = (e: Event): void => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrollOffset = 300;

        if (scrollHeight - scrollTop - clientHeight < scrollOffset
            && todos.fetchedTodos.length < todos.todosTotalCount) {
            setIsFetching(true);
        }
    }

    return (
        <div className={styles.todos}>
            <div className={styles.todos_container}>
                {
                    todos.fetchedTodos.map((todo) => {
                        return (
                            <div key={todo.id} className={styles.todos_list}>
                                <p className={styles.todos_list_name}>{todo.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
})

export default Todos