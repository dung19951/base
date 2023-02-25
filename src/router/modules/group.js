import Index from "../../views/groups/Index.vue";

import AccessControl from "../middlewares/AccessControl.js";

export default [
    {
        path: "/groups",
        name: "Groups",
        meta: {
            title: 'Phân loại',
            page: 'Groups',
            middleware:[
                AccessControl
            ]
        },
        component: Index
    }
]