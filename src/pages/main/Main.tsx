import { FC } from 'react'
import styles from "./index.module.scss";
// components
import Todos from '../../components/todos/Todos';

const Main: FC = () => {

    return (
        <>
            <Todos />
        </>
    )
}

export default Main