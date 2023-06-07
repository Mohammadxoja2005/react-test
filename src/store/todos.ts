import { makeAutoObservable } from "mobx";
// axios
import axios from 'axios';

class Todos {
    fetchedTodos: Array<{ id: number, title: string }> = [];
    isLoading: boolean = false;
    page: number = 0;
    prevScrollPos: number = 0;
    todosTotalCount: number = 0;

    constructor() {
        makeAutoObservable(this)
    }

    fetchTodosFn = async () => {
        this.isLoading = true;
        this.prevScrollPos = window.pageYOffset;

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${this.page}`);
            this.fetchedTodos = [...this.fetchedTodos, ...response.data];
            this.todosTotalCount = response.headers['x-total-count'];

        } catch (error) {
            console.error("Failed to fetch todos:", error);
        } finally {
            this.isLoading = false;
            this.page++;
            setTimeout(() => {
                window.scrollTo({
                    top: this.prevScrollPos,
                });
            }, 0);
        }
    };

}

export default new Todos()