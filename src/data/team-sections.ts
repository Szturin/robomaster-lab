export interface TeamSection {
	name: string;
	summary: string;
	trainingDescription: string;
	docsDescription: string;
}

export const TEAM_SECTIONS: TeamSection[] = [
	{
		name: '机械组',
		summary: '结构设计、机构实现与整机装配调试。',
		trainingDescription: '围绕结构设计、机构实现、整机装配与实车调试开展训练，帮助成员建立完整的机械工程实践能力。',
		docsDescription: '围绕结构设计、机构实现、装配调试等内容整理的资料入口。',
	},
	{
		name: '电控组',
		summary: '嵌入式开发、控制系统与通信实现。',
		trainingDescription: '聚焦嵌入式开发、控制系统、通信链路与运动控制，让成员掌握机器人核心控制能力。',
		docsDescription: '嵌入式开发、控制系统、通信链路与调参流程。',
	},
	{
		name: '视觉组',
		summary: 'Linux 开发、MiniPC 部署与深度学习模型训练。',
		trainingDescription: '负责 Linux 开发、MiniPC 部署与深度学习模型训练，培养感知算法与系统部署能力。',
		docsDescription: 'Linux 开发、MiniPC 部署、模型训练与推理链路相关资料。',
	},
	{
		name: '硬件组',
		summary: 'PCB 设计、接口电源与电气可靠性验证。',
		trainingDescription: '围绕 PCB 设计、接口电源、传感器接入与电气验证开展实践，打牢硬件实现基础。',
		docsDescription: 'PCB 设计、接口电源、传感器接入与电气验证资料入口。',
	},
	{
		name: '运营组',
		summary: '宣传招新、项目统筹与物资协调保障。',
		trainingDescription: '参与宣传招新、项目管理、物资统筹与对外联络，提升团队协作与赛事保障能力。',
		docsDescription: '宣传招新、项目统筹、物资协调与赛事复盘资料。',
	},
];
