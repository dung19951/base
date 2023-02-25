import AccessControl from "../middlewares/AccessControl.js";
import Index from "../../views/users/Index.vue";

export default [
    {
        path: '/users',
        name: 'Users',
        meta: {
            title: 'Tài khoản',
            page: 'Users',
            middleware: [
                AccessControl
            ]
        },
        component: Index
    }
]