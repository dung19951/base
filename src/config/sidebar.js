export default {
    SIDEBAR: [
        {
            name: 'Sales',
            text: 'Kinh doanh',
            icon: 'bi bi-shop',
            child: [
                {
                    text: 'Liên hệ',
                    name: 'Contacts',
                },
                {
                    text: 'Hợp đồng',
                    name: 'Contracts',
                },
            ]
        },
        {
            name: 'Products',
            text: 'Sản phẩm',
            icon: 'bi bi-shop',
            child: [
                {
                    text: 'Sản phẩm',
                    name: 'Products'
                },
                {
                    text: 'Phân loại',
                    name: 'Groups'
                },
                {
                    text: 'Thuộc tính',
                    name: 'Attributes'
                }
            ],
        },
        {
            name: 'Events',
            text: 'Sự kiện',
            icon: 'bi bi-book',
            child: [
                {
                    text: 'Demos',
                    name: 'Demos',
                },
                {
                    text: 'Tests',
                    name: 'PlacementTests',
                },
                {
                    text: 'Workshops',
                    name: 'Workshops',
                },
                {
                    text: 'WorkshopSections',
                    name: 'WorkshopSections',
                }
            ]
        },
        {
            name: 'Training',
            text: 'Đào tạo',
            icon: 'bi bi-book',
            child: [
                {
                    text: 'Sản phẩm',
                    name: 'Products',
                },
                {
                    text: 'Level học viên',
                    name: 'PlacementLevels',
                },
                {
                    text: 'Level lớp học',
                    name: 'StudyLevels',
                },
                {
                    text: 'Yêu cầu xử lý',
                    name: 'ContractChangeRequests',
                }
            ]
        },
        {
            name: 'Marketing',
            text: 'Marketing',
            icon: 'bi bi-book',
            child: [
                {
                    text: 'Form Marketing',
                    name: 'MarketingRequestForms',
                },
                {
                    text: 'Nhóm nguồn liên hệ',
                    name: 'DataSourceGroups',
                },
                {
                    text: 'Kênh nguồn liên hệ',
                    name: 'DataSources',
                },
                {
                    text: 'Insight khách hàng',
                    name: 'CustomerInsights',
                },
            ]
        },
        {
            name: 'Setting',
            text: 'Cài đặt',
            icon: 'bi bi-gear',
            child: [
                {
                    text: 'Cơ sở kinh doanh',
                    name: 'Branches'
                },
                {
                    text: 'Bộ phận',
                    name: 'Departments',
                },
                {
                    text: 'Vai trò - Chức vụ',
                    name: 'StaffPositions',
                },
                {
                    text: 'Tài khoản ngân hàng',
                    name: 'BankAccounts',
                },
                {
                    text: 'Thời gian',
                    name: 'TimeRanges',
                },
                {
                    text: 'Điểm điểm học',
                    name: 'TrainingLocations',
                },
                {
                    text: 'Phòng học',
                    name: 'Classrooms',
                },
            ]
        },
        {
            name: 'Accountant',
            text: 'Kế toán',
            icon: 'bi bi-bank',
            child: [
                {
                    text: 'Quản lý hóa đơn',
                    name: 'Bills',
                }
            ]
        }, {
            text: 'Chỉ tiêu kinh doanh',
            name: 'SaleTargets',
            icon: 'bi bi-record-circle'
        }, {
            name: 'Users',
            text: 'Tài khoản',
            icon: 'bi bi-person-circle',
            child: [
                {
                    text: 'Quản lý giáo viên',
                    name: 'Teachers',
                },
                {
                    text: 'Quản lý tài khoản',
                    name: 'Users',
                },
                {
                    text: 'Quản lý đội nhóm',
                    name: 'Teams',
                },
                {
                    text: 'Quản lý kiểu nhóm',
                    name: 'TeamTypes',
                },
            ]
        },{
            name: 'Test',
            text: 'Just Test',
            icon: 'bi bi-book',
        }
    ]
}