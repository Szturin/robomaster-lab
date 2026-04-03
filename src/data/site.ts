export const SITE_LINKS = {
	github: 'https://github.com/Szturin/robomaster-lab',
	bilibili: 'https://space.bilibili.com/651717103',
	feishuWiki: 'https://ecnxe597phb3.feishu.cn/wiki/Ku6PwOIlLiC7FnklO5MccZUZnig',
	feishuInvite: 'https://ecnxe597phb3.feishu.cn/invite/member/TYzmSefnMiM',
	robomaster: 'https://www.robomaster.com/zh-CN',
	astro: 'https://astro.build',
	searchAction: 'https://www.google.com/search',
} as const;

export const SITE_META = {
	organizationName: '集美大学科来战队 RoboMaster Lab',
	defaultTitle: 'RoboMaster Lab',
	defaultDescription: '集美大学科来战队 RoboMaster Lab 展示战队风采、技术文档、成员培养与招新协作信息。',
	searchQuery: 'site:szturin.github.io/robomaster-lab',
} as const;

export const FOOTER_SECTIONS = [
	{
		title: '文档',
		links: [
			{ name: '首页', href: '/robomaster-lab/' },
			{ name: '关于我们', href: '/robomaster-lab/about' },
			{ name: '成员培养', href: '/robomaster-lab/teams' },
			{ name: '技术文档', href: '/robomaster-lab/docs' },
		],
	},
	{
		title: '社区',
		links: [
			{ name: 'GitHub 仓库', href: SITE_LINKS.github, external: true },
			{ name: '飞书文档', href: SITE_LINKS.feishuWiki, external: true },
			{ name: '加入飞书群', href: SITE_LINKS.feishuInvite, external: true },
		],
	},
	{
		title: '媒体',
		links: [{ name: 'B站主页', href: SITE_LINKS.bilibili, external: true }],
	},
	{
		title: '相关链接',
		links: [{ name: '赛事官网', href: SITE_LINKS.robomaster, external: true }],
	},
] as const;
