import { BadgeDollarSign, Calculator, FilePlusIcon, GlobeLock, LayoutDashboard, LoaderIcon, SettingsIcon, StickyNoteIcon } from "lucide-react"

export const NavMenuItems = [
    {
        value: 'home', label: 'Home', href: '/'
    },
    {
        value: 'blog', label: 'Blog', href: '/blog'
    },
    {
        value: 'about', label: 'About', href: '/about'
    },
    {
        value: 'contact', label: 'Contact', href: '/contact'
    },

]

export const CategoryItems = [
    {
        value: 'accounting',
        label: 'Kế toán',
        href: '/category/accounting',
        icon: Calculator,
        bgColor: 'bg-myPrimaryBlue',
        color: 'myPrimaryBlue'
    },
    {
        value: 'finance',
        label: 'Tài chính',
        href: '/category/finance',
        icon: BadgeDollarSign,
        bgColor: 'bg-myPrimaryGreen',
        color: 'myPrimaryGreen'
    },
    {
        value: 'it',
        label: 'Công nghệ thông tin',
        href: '/category/it',
        icon: GlobeLock,
        bgColor: 'bg-myPrimaryYellow',
        color: 'myPrimaryYellow'
    }
]

export const SideBarMenuItems = [
    {
        label: 'Ban quản trị', link: '/dashboard', icon: LayoutDashboard,
    },
    {
        label: 'Bài viết xuất bản', link: '/dashboard/publish-posts', icon: StickyNoteIcon
    },
    {
        label: 'Bài viết nháp', link: '/dashboard/draft-posts', icon: LoaderIcon
    },
    {
        label: 'Tạo bài viết', link: '/dashboard/create-posts', icon: FilePlusIcon
    },
    {
        label: 'Hồ sơ Admin', link: '/dashboard/profile', icon: SettingsIcon
    }
]

export const AccountTagsItems = [
    {
        parentValue: 'accounting',
        value: 'finance accounting',
        label: 'Kế toán tài chính',
    },
    {
        parentValue: 'accounting',
        value: 'management accounting',
        label: 'Kế toán quản trị',
    },
    {
        parentValue: 'accounting',
        value: 'vietnam accounting',
        label: 'Kế toán Việt Nam',
    },
    {
        parentValue: 'accounting',
        value: 'international accounting',
        label: 'Kế toán quốc tế',
    },
]

export const FinanceTagsItems = [
    {
        parentValue: 'finance',
        value: 'micro finance',
        label: 'Tài chính vi mô',
    },
    {
        parentValue: 'finance',
        value: 'macro finance',
        label: 'Tài chính vĩ mô',
    },
    {
        parentValue: 'finance',
        value: 'vietnam finance',
        label: 'Tài chính Việt Nam',
    },
    {
        parentValue: 'finance',
        value: 'international finance',
        label: 'Tài chính quốc tế',
    },
]

export const ITTagsItems = [
    {
        parentValue: 'it',
        value: 'frontend',
        label: 'Frontend',
    },
    {
        parentValue: 'it',
        value: 'backend',
        label: 'Backend',
    },
    {
        parentValue: 'it',
        value: 'fullstack',
        label: 'Fullstack',
    },
    {
        parentValue: 'it',
        value: 'devops',
        label: 'DevOps',
    },
]

export const TagsItems = [
    ...AccountTagsItems,
    ...FinanceTagsItems,
    ...ITTagsItems,
];

export const StatusItems = [
    {
        value: 'draft', label: 'Bản nháp',
    },
    {
        value: 'publish', label: 'Xuất bản',
    },
]