import { makeAutoObservable } from "mobx";
// axios
import axios from 'axios';

class Todos {
    fetchedTodos: Array<{ id: number, title: string }> = [];
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    fetchTodosFn = async () => {
        this.isLoading = true;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
            this.fetchedTodos = response.data;
        } catch (error) {
            console.error("Failed to fetch todos:", error);
        } finally {
            this.isLoading = false;
        }
    };

}

export default new Todos()