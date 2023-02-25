import Index from "../../views/attributes/Index.vue";

import AccessControl from "../middlewares/AccessControl.js";

export default [
    {
        path: "/attributes",
        name: "Attributes",
        meta: {
            title: 'Thuộc tính',
            page: 'Attributes',
            middleware:[
                AccessControl
            ]
        },
        component: Index
    }
]