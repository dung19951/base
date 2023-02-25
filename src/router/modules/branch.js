import Index from "../../views/branches/Index.vue";
import AccessControl from "../middlewares/AccessControl.js";

export default [
    {
        path: "/branches",
        name: "Branches",
        meta: {
            title: 'Cơ sở kinh doanh',
            page: 'Branches',
            middleware:[
                AccessControl
            ]
        },
        component: Index
    }
]