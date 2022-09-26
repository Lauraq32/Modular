import { createStore } from "vuex";
import testModule from "@/modules/daybook/store/module-template";


const store = createStore({
    modules:{
        testModule
    }
})

export default store