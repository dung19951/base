import Index from "../../views/contacts/Index.vue";
import AccessControl from "../middlewares/AccessControl.js";

export default [
    {
        path: "/contacts",
        name: "Contacts",
        meta: {
            title: 'Liên hệ',
            page: 'Contacts',
            middleware:[
                AccessControl
            ]
        },
        component: Index
    }
]