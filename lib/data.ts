export interface Slide {
  id: number;
  title: string;
  bullets: string[];
  script: string;
}

export interface Video {
  id: number;
  title: string;
  series: string;
  episode: number;
  description: string;
  demoSteps?: string[];
  youtubeAssets: {
    seoTitle: string;
    description: string;
    hashtags: string[];
    thumbnailText: string;
    chapters: string[];
  };
  slides: Slide[];
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Cloud Computing Explained for Beginners",
    series: "Azure Fundamentals",
    episode: 1,
    description: "Understand cloud computing from scratch — IaaS, PaaS, SaaS with real-world Azure examples.",
    demoSteps: [
      "Login to Azure Portal (portal.azure.com)",
      "Show Resource Groups — explain as logical containers",
      "Navigate to Virtual Machines — explain as IaaS example",
      "Navigate to App Services — explain as PaaS example",
      "Navigate to Microsoft 365 link — explain as SaaS example",
      "Show the Azure service categories on the portal home",
    ],
    youtubeAssets: {
      seoTitle: "Cloud Computing Explained for Beginners | IaaS PaaS SaaS with Azure 2026",
      description: `In this video, you'll learn what cloud computing is and the differences between IaaS, PaaS, and SaaS — all explained with real Azure examples.\n\n✅ What you'll learn:\n- What is cloud computing?\n- Benefits of the cloud\n- IaaS vs PaaS vs SaaS\n- Real Azure demo walkthrough\n\n🔔 Subscribe for the full Azure + AI Fundamentals series!\n\n⏱ Chapters:\n0:00 Introduction\n1:00 Problems before cloud\n3:00 What is cloud computing?\n6:00 IaaS explained\n9:00 PaaS explained\n12:00 SaaS explained\n15:00 Azure demo\n22:00 Summary`,
      hashtags: ["#Azure", "#CloudComputing", "#IaaS", "#PaaS", "#SaaS", "#MicrosoftAzure", "#AzureFundamentals", "#CloudForBeginners", "#LearnCloud", "#AzureTutorial"],
      thumbnailText: "Cloud Computing EXPLAINED | IaaS PaaS SaaS",
      chapters: [
        "0:00 Introduction",
        "1:00 Problems before cloud",
        "3:00 What is cloud computing?",
        "6:00 IaaS explained",
        "9:00 PaaS explained",
        "12:00 SaaS explained",
        "15:00 Azure demo",
        "22:00 Summary",
      ],
    },
    slides: [
      {
        id: 1,
        title: "Cloud Computing Explained",
        bullets: ["IaaS, PaaS & SaaS with Real Examples", "Azure Fundamentals Series — Episode 1"],
        script: "Welcome to the Azure Fundamentals series. If you're planning to learn Azure, AWS, DevOps, AI, or cloud computing, this is the perfect starting point. In this video, we'll understand what cloud computing is and learn the differences between IaaS, PaaS, and SaaS with real-world Azure examples. Make sure to subscribe so you don't miss the rest of this series.",
      },
      {
        id: 2,
        title: "The Problem Before Cloud",
        bullets: [
          "Buy & manage physical servers",
          "High upfront capital costs",
          "Slow to scale — weeks or months",
          "Dedicated team for maintenance",
          "Risk of over- or under-provisioning",
        ],
        script: "Before cloud computing, every company had to buy their own servers. Imagine you're launching a startup — before writing a single line of code, you'd need to spend thousands on hardware, set up a data center, hire staff to manage it, and wait weeks for delivery. And if your app went viral overnight? You couldn't scale fast enough. That was the painful reality before cloud.",
      },
      {
        id: 3,
        title: "What is Cloud Computing?",
        bullets: [
          "Access computing resources over the internet",
          "Pay only for what you use",
          "No upfront hardware investment",
          "Scale up or down instantly",
        ],
        script: "Cloud computing means accessing computing resources — servers, storage, databases, networking — over the internet, on demand. Think of it like electricity. You don't build a power plant to use electricity at home. You just plug in and pay for what you consume. Cloud computing works the same way. You rent resources from providers like Microsoft Azure, and pay only for what you actually use.",
      },
      {
        id: 4,
        title: "Cloud in Everyday Life",
        bullets: [
          "Gmail — emails stored in the cloud",
          "Netflix — content streamed from cloud servers",
          "Google Drive — files accessible from anywhere",
          "Microsoft 365 — apps delivered over the internet",
          "WhatsApp — messages & media on cloud infrastructure",
        ],
        script: "You're already using cloud computing every day. When you check Gmail, your emails aren't stored on your phone — they're on Google's cloud servers. When you stream Netflix, that video is coming from cloud infrastructure in data centers around the world. Google Drive, Microsoft 365, Spotify — all cloud-powered. The cloud is everywhere.",
      },
      {
        id: 5,
        title: "Benefits of Cloud Computing",
        bullets: [
          "Cost savings — no hardware, pay-as-you-go",
          "Global reach — deploy anywhere in minutes",
          "Scalability — handle any traffic spike",
          "Security — enterprise-grade built-in",
          "Reliability — 99.9%+ uptime SLAs",
          "Faster innovation — focus on product, not infrastructure",
        ],
        script: "The benefits are compelling. First, cost — instead of buying servers, you pay a monthly bill. Second, scalability — Azure can scale your app to handle millions of users in seconds. Third, global reach — Azure has datacenters in 60+ regions worldwide. And because Microsoft invests billions in security, you get enterprise-grade protection without building it yourself.",
      },
      {
        id: 6,
        title: "Cloud Service Models",
        bullets: [
          "IaaS — Infrastructure as a Service",
          "PaaS — Platform as a Service",
          "SaaS — Software as a Service",
          "Each model shifts responsibility to the cloud provider",
        ],
        script: "Cloud services come in three main models: IaaS, PaaS, and SaaS. Each one gives you more or less control over the underlying infrastructure. Think of it as a spectrum — on one end, you manage everything. On the other, the provider manages everything. Let's break each one down.",
      },
      {
        id: 7,
        title: "IaaS — Infrastructure as a Service",
        bullets: [
          "Rent virtual machines, storage, networking",
          "You manage: OS, runtime, apps, data",
          "Provider manages: physical hardware",
          "Azure example: Azure Virtual Machines",
          "Best for: Full control, custom configurations",
        ],
        script: "IaaS gives you the raw building blocks of cloud infrastructure. With Azure Virtual Machines, Microsoft manages the physical servers in their data centers — the racks, cables, power, cooling. But you control everything else: the operating system, the software you install, the applications you run. It's like renting an empty apartment — the building is maintained, but you furnish and manage the inside.",
      },
      {
        id: 8,
        title: "PaaS — Platform as a Service",
        bullets: [
          "Cloud manages infrastructure + OS + runtime",
          "You manage: application code & data only",
          "Azure example: Azure App Service",
          "Best for: Developers who want to focus on code",
          "No server patching or OS management",
        ],
        script: "PaaS removes the burden of managing servers and operating systems. With Azure App Service, you just deploy your code — Azure handles everything else: provisioning servers, patching, scaling, load balancing. It's like a managed apartment — fully furnished, cleaning included. You just show up and live in it. Developers love PaaS because they can ship faster without worrying about infrastructure.",
      },
      {
        id: 9,
        title: "SaaS — Software as a Service",
        bullets: [
          "Complete application delivered over the internet",
          "No installation, no maintenance",
          "Subscription-based model",
          "Azure example: Microsoft 365",
          "Best for: End users & businesses",
        ],
        script: "SaaS is the furthest end of the spectrum — a complete software product you access through a browser or app. Microsoft 365 is a perfect SaaS example. You don't install Word or Excel on a server. You subscribe, log in, and start working. Microsoft handles everything — the servers, security, updates, backups. You just use the software. That's SaaS.",
      },
      {
        id: 10,
        title: "Shared Responsibility Model",
        bullets: [
          "On-Premises: You manage everything",
          "IaaS: Provider manages hardware only",
          "PaaS: Provider manages hardware + OS + runtime",
          "SaaS: Provider manages almost everything",
          "As you move right → less your responsibility",
        ],
        script: "This slide is crucial. As you move from on-premises to IaaS to PaaS to SaaS, the cloud provider takes on more and more responsibility. With on-premises, your team manages the entire stack. With SaaS, you only manage your data and who has access. Understanding this model is key — it comes up in Azure certifications, interviews, and real-world architecture decisions.",
      },
      {
        id: 11,
        title: "Microsoft Azure Overview",
        bullets: [
          "Microsoft's cloud platform — launched 2010",
          "200+ services across compute, storage, AI, networking",
          "60+ regions worldwide",
          "Used by 95% of Fortune 500 companies",
          "Leading platform for hybrid cloud",
        ],
        script: "Microsoft Azure is one of the top three cloud providers in the world, alongside AWS and Google Cloud. It offers over 200 services — from basic virtual machines to cutting-edge AI and machine learning tools. It runs in 60+ regions globally, meaning your application can be close to your users wherever they are. It's the platform we'll use throughout this entire series.",
      },
      {
        id: 12,
        title: "Live Azure Demo",
        bullets: [
          "Azure Portal — portal.azure.com",
          "Explore Virtual Machines (IaaS)",
          "Explore App Service (PaaS)",
          "Explore Microsoft 365 (SaaS reference)",
        ],
        script: "Now let's stop looking at slides and actually see Azure. I'm going to open the Azure portal and show you exactly where IaaS, PaaS, and SaaS services live. This is your first time seeing the portal — don't worry if it looks overwhelming. By the end of this series, you'll navigate it confidently.",
      },
      {
        id: 13,
        title: "Summary & What's Next",
        bullets: [
          "✅ Cloud computing = on-demand resources over internet",
          "✅ IaaS — rent infrastructure, manage OS + apps",
          "✅ PaaS — rent platform, manage code only",
          "✅ SaaS — use complete software, manage nothing",
          "✅ Azure has 200+ services in all three categories",
          "Next: Azure Architecture Deep Dive →",
        ],
        script: "Let's recap. Cloud computing lets organizations access computing resources on demand, paying only for what they use. IaaS gives you infrastructure control. PaaS lets developers focus on code. SaaS delivers complete software. And Microsoft Azure provides all three. In the next video, we'll go deeper into Azure's architecture — regions, availability zones, resource groups, and how it all fits together. Drop your questions in the comments — see you in the next one.",
      },
    ],
  },
  {
    id: 2,
    title: "Azure Architecture Fundamentals",
    series: "Azure Fundamentals",
    episode: 2,
    description: "Explore Azure regions, availability zones, resource groups, and core architecture concepts.",
    youtubeAssets: {
      seoTitle: "Azure Architecture Explained | Regions, Availability Zones & Resource Groups 2026",
      description: "Deep dive into Azure's global infrastructure — regions, availability zones, and how to organize resources effectively.",
      hashtags: ["#Azure", "#AzureArchitecture", "#AzureRegions", "#ResourceGroups", "#AzureFundamentals"],
      thumbnailText: "Azure Architecture EXPLAINED",
      chapters: ["0:00 Intro", "2:00 Azure Regions", "6:00 Availability Zones", "10:00 Resource Groups", "15:00 Demo", "20:00 Summary"],
    },
    slides: [
      {
        id: 1,
        title: "Azure Architecture Fundamentals",
        bullets: ["Regions, Availability Zones & Resource Groups", "Azure Fundamentals Series — Episode 2"],
        script: "Welcome back to the Azure Fundamentals series. In this video we're going to explore how Azure is structured globally — its regions, availability zones, and how to logically organize your resources. This is foundational knowledge for every Azure certification and real-world deployment.",
      },
      {
        id: 2,
        title: "Azure Global Infrastructure",
        bullets: ["60+ regions worldwide", "Regions = clusters of datacenters", "Paired regions for disaster recovery", "Sovereign clouds for compliance"],
        script: "Azure operates in over 60 regions across the globe. A region is a geographic area containing one or more datacenters that are close together and connected via a low-latency network. When you deploy a resource, you choose which region to deploy it in. Closer to your users means lower latency and better performance.",
      },
      {
        id: 3,
        title: "Availability Zones",
        bullets: ["Physically separate datacenters within a region", "Independent power, cooling, networking", "Protects against datacenter failure", "3 zones per region minimum", "Azure example: East US — Zone 1, 2, 3"],
        script: "Within a region, Azure has availability zones — physically separate datacenters, each with their own power, cooling, and networking. If one datacenter goes down, your app keeps running in another zone. This is how enterprise applications achieve 99.99% uptime. When you deploy a VM, you can pin it to a specific zone for high availability.",
      },
      {
        id: 4,
        title: "Resource Groups",
        bullets: ["Logical container for Azure resources", "Group by project, environment, or team", "Apply policies and permissions at group level", "Resources can only be in ONE resource group", "Delete group = delete all resources inside"],
        script: "Resource groups are logical containers that hold related Azure resources. Think of them like folders on your computer. You might create a resource group called 'production-app' that holds your virtual machines, databases, and storage accounts for one application. Resource groups make it easy to manage, monitor, and control costs for a set of related resources.",
      },
      {
        id: 5,
        title: "Azure Subscriptions",
        bullets: ["Billing and access management boundary", "One tenant can have multiple subscriptions", "Common pattern: Dev / Staging / Production subscriptions", "Set spending limits per subscription"],
        script: "Above resource groups sits the subscription. A subscription is a billing and access boundary. Your company might have separate subscriptions for development, staging, and production environments — giving you cost isolation and separate access controls. All resources you create get billed to the subscription they belong to.",
      },
      {
        id: 6,
        title: "Live Azure Demo",
        bullets: ["Create a Resource Group", "Explore Azure Regions map", "View Availability Zone options on a VM"],
        script: "Let's jump into the Azure portal. I'll show you how to create a resource group, explore the region picker, and see availability zones in action when creating a virtual machine.",
      },
      {
        id: 7,
        title: "Summary & What's Next",
        bullets: ["✅ Regions = geographic clusters of datacenters", "✅ Availability Zones = isolated datacenters within a region", "✅ Resource Groups = logical containers for resources", "✅ Subscriptions = billing & access boundary", "Next: Azure Virtual Machines Deep Dive →"],
        script: "Great work. Now you understand how Azure is organized globally and how to structure your resources. Regions, availability zones, resource groups, and subscriptions are the building blocks of every Azure deployment. Next up, we'll take a deep dive into Azure Virtual Machines — creating, configuring, and connecting to your first VM.",
      },
    ],
  },
  {
    id: 3,
    title: "Azure Virtual Machines Deep Dive",
    series: "Azure Fundamentals",
    episode: 3,
    description: "Create, configure, and connect to Azure Virtual Machines. Understand VM sizes, disks, and networking.",
    youtubeAssets: {
      seoTitle: "Azure Virtual Machines Tutorial for Beginners 2026 | Create & Connect to Azure VM",
      description: "Step-by-step guide to creating and connecting to Azure Virtual Machines. Covers VM sizes, storage, networking, and best practices.",
      hashtags: ["#AzureVM", "#VirtualMachines", "#Azure", "#AzureTutorial", "#CloudComputing"],
      thumbnailText: "Azure Virtual Machines TUTORIAL",
      chapters: ["0:00 Intro", "2:00 What is a VM?", "5:00 VM Sizes", "8:00 Storage Options", "12:00 Networking", "16:00 Demo: Create VM", "25:00 Summary"],
    },
    slides: [
      {
        id: 1,
        title: "Azure Virtual Machines Deep Dive",
        bullets: ["Create, Configure & Connect to Azure VMs", "Azure Fundamentals Series — Episode 3"],
        script: "Welcome back. Today we're getting hands-on with Azure Virtual Machines. By the end of this video, you'll have created your own VM in Azure, connected to it, and understood how VMs fit into the bigger cloud picture.",
      },
      {
        id: 2,
        title: "What is a Virtual Machine?",
        bullets: ["Software emulation of a physical computer", "Runs its own OS — Windows or Linux", "You control: OS, apps, configuration", "Azure manages: physical hardware", "IaaS service — full control model"],
        script: "A virtual machine is a software-based computer running inside Azure's physical servers. It behaves exactly like a real computer — it has its own CPU, RAM, storage, and network interface — but it's virtualized. You choose the OS, install your software, and manage it just like a physical server. The difference is Azure handles all the physical hardware underneath.",
      },
      {
        id: 3,
        title: "VM Sizes & Series",
        bullets: ["General Purpose — B, D series (web servers, dev)", "Compute Optimized — F series (batch processing)", "Memory Optimized — E, M series (databases)", "Storage Optimized — L series (big data)", "GPU — N series (AI/ML, graphics)"],
        script: "Azure VMs come in dozens of sizes organized into series. B-series are burstable, cost-effective VMs great for development and testing. D-series are general purpose workhorses. E-series are memory-heavy for databases. And N-series come with GPUs — critical for AI and machine learning workloads, which we'll explore later in this series.",
      },
      {
        id: 4,
        title: "VM Storage Options",
        bullets: ["OS Disk — boot disk, always required", "Data Disk — attach multiple for extra storage", "Temp Disk — fast but data lost on reboot", "Managed Disks — Azure handles replication", "Disk tiers: Standard HDD → Standard SSD → Premium SSD → Ultra Disk"],
        script: "Every VM gets an OS disk — that's where Windows or Linux is installed. You can attach additional data disks for your application data. The key thing to understand is disk tiers: Standard HDD is cheapest and slowest, Premium SSD is fast and reliable, and Ultra Disk delivers extreme IOPS for demanding workloads like databases. Always use Managed Disks — Azure handles replication and backups automatically.",
      },
      {
        id: 5,
        title: "VM Networking",
        bullets: ["Virtual Network (VNet) — your private network in Azure", "Subnet — segment within a VNet", "Network Interface Card (NIC) — VM's network connection", "Public IP — access VM from internet", "Network Security Group — firewall rules"],
        script: "When you create a VM, it lives inside a Virtual Network — your own private network in Azure. You define subnets within that network, and your VM gets a Network Interface Card connecting it. A Network Security Group acts as a firewall, controlling inbound and outbound traffic. For most demos, we'll assign a public IP so we can connect from our laptops.",
      },
      {
        id: 6,
        title: "Live Azure Demo",
        bullets: ["Create a Windows VM in Azure", "Configure size, disk, and networking", "Connect via RDP", "Explore the VM management blade"],
        script: "Time for the demo. I'll walk you through creating a Windows Server VM from scratch in the Azure portal, configuring all the settings we just discussed, and connecting to it via Remote Desktop. Let's go.",
      },
      {
        id: 7,
        title: "Summary & What's Next",
        bullets: ["✅ VMs = IaaS — you control OS & apps", "✅ Choose the right VM size for your workload", "✅ Managed Disks for reliable storage", "✅ VNet + NSG for secure networking", "Next: Azure Storage Accounts →"],
        script: "You've now created and connected to your first Azure VM. You understand sizes, storage tiers, and networking fundamentals. Next video, we'll cover Azure Storage Accounts — Blob, File, Queue, and Table storage — and when to use each. See you there.",
      },
    ],
  },
];

export function getVideo(id: number): Video | undefined {
  return videos.find((v) => v.id === id);
}
