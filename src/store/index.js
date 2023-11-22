import { createStore } from "vuex";
import { ListModule } from "./ListModule";

export default createStore ({
    state: {
        isAuth: false,
    },
    modules: {
        list: ListModule,
    }
})