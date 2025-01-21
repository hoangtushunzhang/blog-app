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
        icon: Calculator,
		bgColor: 'bg-myPrimaryBlue',
		color: 'myPrimaryBlue',
    },
    {
        parentValue: 'accounting',
        value: 'management accounting',
        label: 'Kế toán quản trị',
        icon: Calculator,
		bgColor: 'bg-myPrimaryBlue',
		color: 'myPrimaryBlue',
    },
    {
        parentValue: 'accounting',
        value: 'vietnam accounting',
        label: 'Kế toán Việt Nam',
        icon: Calculator,
		bgColor: 'bg-myPrimaryBlue',
		color: 'myPrimaryBlue',
    },
    {
        parentValue: 'accounting',
        value: 'international accounting',
        label: 'Kế toán quốc tế',
        icon: Calculator,
		bgColor: 'bg-myPrimaryBlue',
		color: 'myPrimaryBlue',
    },
]

export const FinanceTagsItems = [
    {
        parentValue: 'finance',
        value: 'micro finance',
        label: 'Tài chính vi mô',
        icon: BadgeDollarSign,
		bgColor: 'bg-myPrimaryGreen',
		color: 'myPrimaryGreen',
    },
    {
        parentValue: 'finance',
        value: 'macro finance',
        label: 'Tài chính vĩ mô',
        icon: BadgeDollarSign,
		bgColor: 'bg-myPrimaryGreen',
		color: 'myPrimaryGreen',
    },
    {
        parentValue: 'finance',
        value: 'vietnam finance',
        label: 'Tài chính Việt Nam',
        icon: BadgeDollarSign,
		bgColor: 'bg-myPrimaryGreen',
		color: 'myPrimaryGreen',
    },
    {
        parentValue: 'finance',
        value: 'international finance',
        label: 'Tài chính quốc tế',
        icon: BadgeDollarSign,
		bgColor: 'bg-myPrimaryGreen',
		color: 'myPrimaryGreen',
    },
]

export const ITTagsItems = [
    {
        parentValue: 'it',
        value: 'frontend',
        label: 'Frontend',
        icon: GlobeLock,
		bgColor: 'bg-myPrimaryYellow',
		color: 'myPrimaryYellow',
    },
    {
        parentValue: 'it',
        value: 'backend',
        label: 'Backend',
        icon: GlobeLock,
		bgColor: 'bg-myPrimaryYellow',
		color: 'myPrimaryYellow',
    },
    {
        parentValue: 'it',
        value: 'fullstack',
        label: 'Fullstack',
        icon: GlobeLock,
		bgColor: 'bg-myPrimaryYellow',
		color: 'myPrimaryYellow',
    },
    {
        parentValue: 'it',
        value: 'devops',
        label: 'DevOps',
        icon: GlobeLock,
		bgColor: 'bg-myPrimaryYellow',
		color: 'myPrimaryYellow',
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