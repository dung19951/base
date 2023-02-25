import Index from "../../views/products/Index.vue";

import AccessControl from "../middlewares/AccessControl.js";

export default [
    {
        path: "/products",
        name: "Products",
        meta: {
            title: 'Sản phẩm',
            page: 'Products',
            middleware:[
                AccessControl
            ]
        },
        component: Index
    }
]