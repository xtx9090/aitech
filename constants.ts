
import { Post, SiteStats } from './types';

export const SITE_NAME = "智芯视界 (IntelliCore Horizon)";
export const SITE_SUBTITLE = "感知自动驾驶，定义硅基出行";
export const AUTHOR_NAME = "矩阵观测员 (Matrix Observer)";
export const AUTHOR_BIO = "深耕自动驾驶算法架构、车载 SoC 设计与群体智能。致力于实现 L5 级完全无人驾驶的数学完备性。";

export const CATEGORIES = [
  "自动驾驶算法 (AD Algorithms)",
  "车载硬件架构 (Auto Hardware)",
  "车路协同 V2X (Cooperative Sys)",
  "安全与伦理 (Safety & Ethics)",
  "通用人工智能 (General AI)"
];

export const POSTS: Post[] = [
  {
    id: 27,
    title: "光子计算芯片：突破硅基算力墙的量子跃迁",
    date: "2025-11-20",
    updateDate: "2025-11-20",
    categories: ["车载硬件架构"],
    author: "Photonics Arch",
    views: 18900,
    comments: 42,
    content: "当电子流遭遇热力学极限，光子成为了承载海量矩阵运算的新宠。解析光计算如何以 1/100 的功耗实现 100 倍的张量计算性能。",
    fullContent: `## 光子计算：从电子流到光速跃迁\n\n传统的冯·诺依曼架构正在遭遇“存储墙”与“能效墙”的双重封锁。光子计算芯片利用光学干涉与衍射特性，在光通过路径的同时完成乘加运算。\n\n### 关键突破\n1. **非相干光计算引擎**：降低了对高相干性激光器的依赖。\n2. **可编程光子阵列 (FPGA for Light)**：实现了实时重构拓扑结构。\n\n> "计算的终点不是更多的晶体管，而是更高效的能量转换。"\n\n车载环境下，光子芯片不仅能提供秒级的感知响应，还能在极寒或极端辐射环境下保持超高稳定性。`,
    cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 26,
    title: "星地融合 6G 架构：自动驾驶的最后一块通讯拼图",
    date: "2025-11-15",
    updateDate: "2025-11-15",
    categories: ["车路协同 V2X"],
    author: "Network Architect",
    views: 24500,
    comments: 67,
    content: "解析低轨卫星星座与地面 6G 基站如何构建无缝覆盖。在偏远荒漠或高山峡谷，L5 级车辆依然能实现云端超大规模路径规划。",
    fullContent: `## 6G：超越地平线的连接\n\n5G 解决了城市中心的低时延，但 6G 引入的星地融合方案（NTN）则是为了解决全球范围内的“信号荒漠”。\n\n### 技术栈演进\n- **毫米波与太赫兹**：提供单车 100Gbps 的回传带宽。\n- **动态波束成形**：实时追踪高速移动的自动驾驶集群。\n\n这将彻底终结单车智能在无网区域的“盲目”状态。`,
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 25,
    title: "液态神经网络（Liquid Neural Networks）：从自然界汲取的自适应动力学",
    date: "2025-11-10",
    updateDate: "2025-11-10",
    categories: ["自动驾驶算法"],
    author: "Neuromorphic Dev",
    views: 38200,
    comments: 94,
    content: "相比传统的静态权重，液态神经网络能根据实时输入流动态调整方程。在自动驾驶遭遇雨雾雪等极端长尾场景时，展现出惊人的鲁棒性。",
    fullContent: `## 液态神经网络：让算法拥有“生物弹性”\n\n由 MIT 团队开发的 Liquid Neural Networks (LNNs) 正在重塑感知架构。不同于传统卷积网络在训练后权重固定，LNNs 的核心是一组连续时间常微分方程。\n\n### 为何选择“液态”？\n- **极端适应性**：在处理未见过的输入序列时，其表现远超 Transformer。\n- **极度轻量化**：仅需数百个神经元即可完成原本万亿参数模型的复杂控制任务。`,
    cover: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 24,
    title: "2025 AI 技术全景观察：从“生成”到“认知”的伟大迁徙",
    date: "2025-10-25",
    updateDate: "2025-10-25",
    categories: ["通用人工智能"],
    author: "Matrix Observer",
    views: 52400,
    comments: 156,
    content: "解析 2025 年人工智能正式进入“深水区”后的范式转移：从“概率生成”向“深度认知”的跨越，以及 System 2 慢思考能力的觉醒。",
    fullContent: `引言：狂欢之后的深水区\n如果说 2023 年是生成式 AI 的“寒武纪大爆发”，无数应用如雨后春笋般涌现；那么 2025 年则标志着人工智能正式进入了“深水区”。过去两年，我们惊叹于 AI 写诗作画的能力，但这仅仅是表层的繁荣。如今，随着 Scaling Laws（缩放定律）遭遇新的瓶颈与突破，AI 技术正在经历一场从“概率生成”向“深度认知”的范式转移。我们不再仅仅关注 AI 能“生成”什么，而开始关注它能“推理”什么，以及它能代表人类“执行”什么。\n\n## 一、 System 2 的觉醒：推理能力的质变\n长期以来，基于 Transformer 架构的大语言模型（LLM）被视为“快思考”系统（System 1）。它们基于直觉 and 概率，快速预测下一个 Token，虽然流利但容易产生幻觉。然而，OpenAI 的 o1 系列与 DeepMind 的 Gemini 新一代模型的出现，彻底打破了这一局限。\n\n这就是所谓的“System 2”时刻——AI 开始具备慢思考能力。\n\n这一技术突破的核心在于**“推理时计算”（Inference-time Compute）**。传统的模型将算力主要消耗在训练阶段，而新一代模型学会了在回答问题前，利用额外的推理时间进行思维链（Chain of Thought）的自我推演、验证 and 纠错。这种机制使得 AI 在奥林匹克数学竞赛、复杂代码重构以及博士级科学问答中的准确率呈指数级上升。AI 不再是只会“胡编乱造”的聊天机器人，而是成为了能够处理长程逻辑任务的严谨思考者。\n\n## 二、 智能体（Agentic AI）：数字员工的诞生\n随着推理能力的增强，AI 的应用形态正在从“Copilot（副驾驶）”向“Agent（智能体）”进化。\n\nCopilot 模式下，人是主导，AI 是工具；而在 Agent 模式下，AI 获得了自主权。2025 年的顶尖 Agent 框架已经具备了**“感知-规划-行动-反思”**的完整闭环。它们不仅能理解自然语言指令，还能熟练操作操作系统（OS-level），像人类一样点击鼠标、浏览网页、调用 API、读写文件。\n\n在软件开发领域，像 Devin 和 Claude Code 这样的“AI 软件工程师”已经能够独立接管 GitHub Issue，从复现 Bug、编写代码到通过测试，全流程自主完成。在企业服务领域，Agent 正在重塑 B2B 软件的交互逻辑——原本复杂的 SaaS 界面正在消失，取而代之的是一个个能够自主协调供应链、处理财务报表、安排日程的“数字员工”。这标志着 AI 从“内容生成产业”迈向了更广阔的“服务执行产业”。\n\n## 三、 具身智能：AI 拥有了物理身体\n大模型的大脑，终于开始适配机器人的身体。2025 年被视为**具身智能（Embodied AI）**的落地元年。\n\n过去，机器人控制依赖于硬编码和特定任务的训练，通用性极差。而现在，视觉-语言-动作（VLA）模型的成熟，让机器人能够理解模糊的自然语言指令。例如，当你对机器人说“我饿了”，它不再需要指令代码，而是能结合视觉感知，识别出桌上的苹果，规划抓取路径，并递给你。\n\nSora 和 Veo 等世界模拟器（World Simulators）在这一进程中扮演了关键角色。它们生成的逼真物理视频数据，解决了机器人训练中现实数据匮乏的难题。通过 Sim2Real（仿真到现实）技术，机器人在虚拟世界中经历了数亿次的试错，一旦“下载”到实体机身中，便立刻拥有了处理复杂物理交互的能力。\n\n## 四、 AI for Science：甚至超越人类的认知\n在公众视野之外，AI 正在基础科学领域引发一场无声的革命。\n\nAlphaFold 3 的发布，让我们不仅能预测蛋白质结构，还能模拟 DNA、RNA 以及配体的相互作用，这将药物研发的周期从数年压缩至数月。在材料科学领域，GNoME 等模型预测了数百万种这种新型晶体结构，AI 正在指导实验室合成更高效的电池材料和超导材料。\n\n这里的核心逻辑是：AI 能够处理人类大脑无法处理的高维数据。在气象预测、核聚变控制、基因编辑等领域，AI 已经不再是辅助工具，而是成为了发现新科学规律的主要驱动力。\n\n## 五、 算力与能源的博弈：硅基智能的物理代价\n随着模型参数迈向万亿级别，以及推理计算的普及，AI 对基础设施的需求达到了前所未有的高度。\n\n芯片层面，GPU 架构正在向专用的 ASIC 和 LPU（语言处理单元）分化。Groq 等公司通过确定性计算架构，试图解决大模型推理的延迟问题。而 NVIDIA 则继续通过 NVLink 将成千上万张显卡互联，构建庞大的超级计算机集群。\n\n然而，最大的瓶颈正在从芯片转向能源。AI 数据中心的能耗呈指数级增长，迫使科技巨头（Microsoft, Google, Amazon）直接投资核聚变和模块化核反应堆（SMR）。2025 年，AI 的竞争本质上已经演变为一场关于“每瓦特电力能产生多少智能”的能源效率竞赛。\n\n结语：与神共舞\n站在 2025 年的节点回望，我们清晰地看到，AI 技术已经跨越了“图灵测试”的门槛，正在向着 AGI（通用人工智能）的圣杯狂奔。\n\n我们面临的挑战不再是技术的可行性，而是技术的方向性. 当 AI 具备了深度的推理能力 and 自主的行动能力，如何确保它的目标与人类的福祉对齐（Alignment），如何解决随之而来的就业结构性转移，以及如何管理这种强大的力量，将是未来十年人类社会最大的课题。\n\n我们不再是旁观者，我们正在亲历人类历史上最深刻的技术变革。`,
    cover: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 23,
    title: "碳纳米管 FET 与 1nm 以下制程的终极博弈",
    date: "2025-11-02",
    updateDate: "2025-11-02",
    categories: ["车载硬件架构"],
    author: "Silicon Specialist",
    views: 45000,
    comments: 89,
    content: "随着摩尔定律逼近物理极限，硅基半导体正迎来它的黄昏。解析碳纳米管场效应晶体管 (CNFET) 如何在车载高温高压环境下重塑算力版图。",
    fullContent: `## 碳纳米管 FET：打破硅的物理枷锁\n\n传统的硅基 FinFET 在进入 2nm 制程后，漏电效应和量子穿隧效应已成为无法逾越的障碍。CNFET 的出现为后摩尔时代指明了方向。\n\n### 为什么是 CNFET？\n1. **超高迁移率**：电子在碳纳米管中的传输几乎是无损的。\n2. **原子级厚度**：可以实现极致的静电控制。\n3. **低功耗**：同等性能下功耗降低约 70%。\n\n> "如果说硅是工业时代的钢铁，那么碳纳米管就是智能时代的超导神经。"\n\n目前，车规级 CNFET 仍面临产率与热膨胀系数匹配的挑战，但原型试验表明，其处理 L5 级点云数据的效率提升了 400%。`,
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 22,
    title: "群体智能：从鸟群算法到完全无人驾驶车队",
    date: "2025-10-28",
    updateDate: "2025-10-28",
    categories: ["自动驾驶算法"],
    author: "Swarm Analyst",
    views: 12800,
    comments: 56,
    content: "单车智能的局限性在于无法处理‘不可见’的冲突。探讨基于 V2X 的分布式群体智能如何让城市交通流像流体一样丝滑。",
    fullContent: `## 群体智能：超越单车的认知界限\n\n当前的自动驾驶主要依赖单车的视觉与雷达，但这就像是在迷雾中航行。群体智能 (Swarm Intelligence) 试图建立一个城市级的协同大脑。\n\n### 核心逻辑\n- **数据共享**：A 车看到的死角，实时同步给 B 车。\n- **分布式决策**：没有中央服务器，通过局部博弈实现全局最优流。`,
    cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 21,
    title: "深度特写：聊天机器人的消亡与“慢思考”AI的崛起",
    date: "2025-10-15",
    updateDate: "2025-10-15",
    categories: ["通用人工智能"],
    author: "Future Tech Observer",
    views: 32000,
    comments: 124,
    content: "从‘预测’到‘推理’，从‘聊天’到‘代理’。解析 2025 年下半年 AI 领域的核心范式转移：推理时计算与大型行动模型 (LAM) 的爆发。",
    fullContent: `## 深度特写：从预测到推理的范式转移\n\n在 2025 年，我们见证了人工智能从 System 1 (快思考) 向 System 2 (慢思考) 的跨越。这意味着模型不再仅仅是概率性地预测下一个词，而是开始在内部进行逻辑建模。`,
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
  }
];

export const STATS: SiteStats = {
  postCount: 27,
  runtime: 225,
  wordCount: "35.8 W",
  totalViews: 862400
};
