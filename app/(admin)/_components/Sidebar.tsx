'use client';

import { SideBarMenuItems } from '@/constants';
import SidebarMenuItem from './SidebarMenuItem';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="fixed h-full border-r-2 md:w-64 shadow-md p-5">
			<div>
				{SideBarMenuItems.map((item, index) => (
					<SidebarMenuItem
						key={index}
						link={item.link}
						label={item.label}
						Icon={item.icon}
						pathname={pathname!}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;