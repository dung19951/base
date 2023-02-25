import Index from "../../views/departments/Index.vue"
import AccessControl from "../middlewares/AccessControl.js"

export default [
    {
        path: "/departments",
        name: "Departments",
        meta: {
            title: 'Bộ phận',
            page: 'Departments',
            middleware:[
                AccessControl
            ]
        },
        component: Index
    }
]