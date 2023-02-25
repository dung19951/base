import AccessControl from "../middlewares/AccessControl.js";
import Index from "../../views/staff-positions/Index.vue";

export default [
    {
        path: '/staff-positions',
        name: 'StaffPositions',
        meta: {
            title: 'Vai trò - Chức vụ',
            page: 'StaffPositions',
            middleware: [
                AccessControl
            ]
        },
        component: Index
    }
]