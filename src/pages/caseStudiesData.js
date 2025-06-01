// src/data/caseStudiesData.js
const caseStudies = [{
        id: 1,
        title: "Pharma Capabilities",
        subtitle: "Accelerating Innovation in Pharma with AI/ML",
        tagline: "AI/ML-Powered Software Innovation Driving Digital Transformation in Life Sciences & Healthcare",
        overview: {
            description: "We are an AI/ML-driven technology company with a dedicated vertical focused on Pharma and Life Sciences. With cross-functional teams comprising data scientists, engineers, and domain experts, we deliver custom software solutions and intelligent automation to transform R&D, operations, and compliance in life sciences."
        },
        highlights: {
            keyCapabilities: [
                "Predictive Analytics for Drug Efficacy & Clinical Trials",
                "NLP for Medical Literature Mining & Pharmacovigilance",
                "Computer Vision for Cell Imaging & Analysis",
                "Digital Twins for Clinical & Laboratory Simulations",
                "AI-Powered Recommendation Systems for Personalized Treatments",
                "Chatbots & Virtual Assistants for Patient Support & Medical Reps"
            ],
            solutionsDelivered: [
                "AI-Based Clinical Trial Optimizer",
                "NLP-Driven Adverse Event Detection System",
                "Prescription Analytics Dashboard for Field Insights",
                "ChatGPT-style Assistant for SOP/Compliance FAQs",
                "Inventory Management System with Real-Time AI Demand Forecasting"
            ]
        },
        complianceAndSecurity: {
            certifications: ["HIPAA", "GDPR", "21 CFR Part 11"],
            features: [
                "End-to-End Data Encryption",
                "Role-Based Access Control",
                "Audit Trails and Governance Frameworks"
            ]
        },
        technologyStack: {
            aiMl: ["Python", "TensorFlow", "PyTorch", "Hugging Face", "AutoML"],
            backend: ["Node.js", "Django", "Spring Boot"],
            frontend: ["React", "Angular", "Flutter"],
            cloud: ["AWS", "Azure", "Google Cloud", "Oracle Cloud Infrastructure"],
            dataAndDevOps: ["Apache Spark", "Kafka", "Databricks", "Docker", "Kubernetes"]
        },
        partnershipBenefits: [
            "Strong blend of domain knowledge and technical expertise",
            "End-to-end execution: from Data Engineering to ML Model Deployment",
            "Flexible engagement models: PoC → Pilot → Scale",
            "Quick turnaround with dedicated cross-functional teams"
        ]
    },
    {
        id: 2,
        title: "Green Energy Transition Platform",
        subtitle: "Simplifying Clean Energy Adoption for Businesses & Consumers",
        tagline: "A real-time, data-driven platform to compare suppliers, invest in green projects, and manage ESG goals effortlessly",
        overview: {
            description: "The Green Energy Portal is a transparent, full-stack marketplace that connects consumers and businesses with renewable energy providers. It enables seamless clean energy adoption by offering real-time data, supplier comparisons, personalized recommendations, and ESG tracking. Built using technologies like React, Django, and TensorFlow, the platform supports investments in surplus energy, tracks usage through an interactive dashboard, and contributes toward global net-zero goals."
        },
        highlights: {
            keyCapabilities: [
                "Real-time renewable energy marketplace with supplier comparison",
                "ESG reporting and green project investment modules",
                "Personalized recommendations based on energy consumption patterns",
                "Dashboard for tracking usage, savings, and environmental impact",
                "Supports both consumers and businesses in energy transition"
            ],
            solutionsDelivered: [
                "Unified dashboard for energy consumption and savings tracking",
                "Real-time analytics for supplier offerings and market trends",
                "Investment module for surplus solar/wind power",
                "Smart recommendations using AI/ML for clean energy decisions"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: [
                "JWT-based secure authentication",
                "Role-based access control for admins, suppliers, and consumers",
                "Dockerized deployment with CI/CD pipelines using GitHub Actions",
                "NGINX reverse proxy with HTTPS and load balancing"
            ]
        },
        technologyStack: {
            frontend: ["React.js", "Ant Design", "Framer Motion", "Chart.js", "Axios"],
            backend: ["Django", "Django REST Framework", "WebSockets", "JWT"],
            ai_ml: ["Scikit-learn", "TensorFlow", "PyTorch"],
            devops: ["Docker", "NGINX", "GitHub Actions", "AWS"]
        },
        partnershipBenefits: [
            "Full-stack, scalable solution for clean energy adoption",
            "Supports real-time market data and interactive dashboards",
            "AI-powered energy optimization for cost and sustainability",
            "Modular architecture for ESG reporting and investment tracking",
            "Optimized for user experience, performance, and cross-device access"
        ]
    },



    {
        id: 3,
        title: "Custom ERP Solutions for Businesses",
        subtitle: "Tailored ERP Systems to Streamline, Scale, and Secure Your Operations",
        tagline: "End-to-end ERP development customized to your industry, workflow, and growth plans",

        overview: {
            description: "We develop scalable and secure custom ERP solutions tailored to the unique workflows of each business. Our ERP systems are built to automate operations, support growth, and ensure seamless integration with existing tools and processes. With deployment flexibility (cloud or on-premise), modular architecture, and domain-specific customizations, businesses gain complete control over data, compliance, and performance."
        },

        highlights: {
            keyCapabilities: [
                "Business Process Automation to streamline operations",
                "Modular design with the ability to scale and add features",
                "Industry-specific customization for precise workflow alignment",
                "Seamless integration with legacy and third-party systems",
                "Cloud or on-premise deployment based on business needs"
            ],
            solutionsDelivered: [
                "Custom ERP for inventory, sales, HR, and finance modules",
                "Workflow automation to reduce manual tasks and errors",
                "Integrated reporting and analytics dashboards",
                "Role-based access and secure data controls"
            ]
        },

        complianceAndSecurity: {
            certifications: [],
            features: [
                "Advanced user role & permission management",
                "Data encryption at rest and in transit",
                "Secure APIs and token-based access controls",
                "Compliance-ready architecture for sector-specific regulations"
            ]
        },

        technologyStack: {
            frontend: ["React.js", "Angular", "Bootstrap"],
            backend: ["Node.js", "Django", "Spring Boot"],
            database: ["PostgreSQL", "MySQL", "MongoDB"],
            devops: ["Docker", "NGINX", "AWS", "CI/CD Pipelines"]
        },

        partnershipBenefits: [
            "Tailored ERP aligned with your business processes",
            "Modular, scalable architecture for long-term adaptability",
            "Rapid development and integration with legacy tools",
            "Enhanced data control and security compliance",
            "Dedicated support for deployment and training"
        ]
    },

    {
        id: 4,
        title: "FMCG (Fast-Moving Consumer Goods) - PrushalTech Enablement",
        subtitle: "Driving Market Agility and Operational Efficiency for FMCG Companies",
        tagline: "Addressing key FMCG challenges with innovative tech-driven solutions",

        overview: {
            description: "FMCG companies face intense market competition, reliance on costly market research, working capital constraints, and supply chain inefficiencies. PrushalTech Enablement empowers these businesses with tailored digital solutions to enhance customer insights, streamline operations, and optimize financial and supply chain management, enabling them to stay competitive and grow sustainably."
        },

        highlights: {
            keyCapabilities: [
                "Dependency on expensive third-party market research for customer insights",
                "Hyper-competition leading to reduced sales and market share",
                "Working capital limitations restricting business expansion",
                "Supply chain inefficiencies impacting product availability and profitability"
            ],
            solutionsDelivered: [
                "Integrated customer analytics platform for real-time insights",
                "Automated supply chain management systems to improve efficiency",
                "Financial planning and optimization tools to maximize working capital",
                "Competitive market intelligence dashboards for agile decision-making"
            ]
        },

        complianceAndSecurity: {
            certifications: [],
            features: []
        },

        technologyStack: {
            frontend: ["React.js", "Angular"],
            backend: ["Node.js", "Django"],
            database: ["Power BI", "Tableau", "SQL Databases"], // changed 'data' to 'database'
            devops: ["Docker", "AWS", "Kubernetes"]
        },

        partnershipBenefits: [
            "Cost-effective market research through internal analytics",
            "Improved operational agility to counter competition",
            "Optimized working capital management",
            "Enhanced supply chain visibility and control"
        ]
    },

    {
        id: 5,
        title: "Data & Analytics Offering Suite",
        subtitle: "Empowering Smarter Decisions with Comprehensive Analytics Solutions",
        tagline: "Leveraging data science and advanced analytics for business excellence",

        overview: {
            description: "Our Data & Analytics suite brings together a team of over 100 associates including 20+ data scientists, serving 50+ customers. We deliver end-to-end analytics capabilities across the spectrum—from transactional reporting to predictive and prescriptive analytics—helping organizations transform data into actionable insights."
        },

        keyStats: {
            associates: 100,
            dataScientists: 20,
            customers: 50
        },

        highlights: {
            keyCapabilities: [
                "Transactional Reporting",
                "Operations Analytics",
                "Customer Analytics",
                "Risk and Fraud Analytics",
                "Predictive Analytics",
                "Dashboard Consulting and BI Modernization",
                "Pre-Built Industry Dashboards",
                "Enterprise Reporting and Visualization",
                "Self-Service CXO Cockpit / Digital Neural System"
            ],
            solutionsDelivered: [
                "Data Architecture and Integration",
                "Data Quality and Governance",
                "Big Data Solutions and Data Lakes",
                "Standard and Ad-Hoc Reporting",
                "Alerts and Dashboard Query/Drilldown",
                "Statistical Analysis and Forecasting",
                "Optimization through Predictive and Prescriptive Analytics"
            ]
        },

        complianceAndSecurity: {
            certifications: [],
            features: []
        },

        technologyStack: {
            analyticsTools: ["Tableau", "Power BI", "SAS", "Python", "R"],
            dataPlatforms: ["Hadoop", "Spark", "Kafka"],
            cloud: ["AWS", "Azure", "GCP"],
            database: ["SQL", "NoSQL"] // renamed 'databases' to 'database'
        },

        partnershipBenefits: [
            "Access to a large pool of analytics experts",
            "Comprehensive analytics capabilities tailored to business needs",
            "Scalable and modern BI tools for decision support",
            "Improved data governance and quality management"
        ]
    },

    {
        id: 6,
        title: "BI & Reporting Framework & Solution",
        subtitle: "Comprehensive Business Intelligence and Reporting Platform",
        tagline: "Empowering data-driven decisions with scalable, pre-built and customizable BI solutions",
        overview: {
            description: "A robust BI and reporting platform designed to deliver scalable, pre-built, and customizable business intelligence solutions that enable data-driven decision-making across various sectors including BFSI, Enterprise, and Government."
        },
        highlights: {
            keyCapabilities: [
                "Pre-built: Unified BI Layer for Core Banking and Insurance",
                "Single Version of Truth: Information centric architecture enables single version of the truth",
                "Pre-defined KPIs: Numerous pre-defined KPI’s & Metrics for Best-in-class BI/DW framework",
                "Pre-configured: Pre-configured reports as well as flexibility to design custom reports to meet strategic, operational or regulatory needs",
                "Role Based Access: Reports/dashboards with role-based access control",
                "Technology Agnostic: Technology agnostic platform & Highly scalable architecture"
            ],
            solutionsDelivered: []
        },
        complianceAndSecurity: {
            certifications: [],
            features: []
        },
        technologyStack: {},
        partnershipBenefits: [],
        factsAndFigures: {
            reports: "500+",
            visualizations: "100+",
            kpis: "250+",
            projects: "50+"
        },
        useCases: {
            BFSI: [
                "Insurance",
                "Lending",
                "Retail Banking",
                "Asset Management"
            ],
            Enterprise: [
                "Retail & Trading",
                "Telecom",
                "Utilities"
            ],
            Government: [
                "Scheme Framework",
                "CMO Dashboard"
            ]
        }
    },

    {
        id: 7,
        title: "Customer Value Management Solution For Banking",
        subtitle: "Data-Driven Insights to Enhance Customer Segmentation and Profitability",
        tagline: "Unlock Customer Insights and Drive Strategic Decisions with Advanced Analytics",
        overview: {
            description: "Customer Value Management Analytics provides deep insights into customers’ buying and usage patterns, demographic distribution, and profitability. It enables organizations to segment customers effectively, understand behavior, design loyalty programs, optimize pricing, minimize waste, and invest smartly in campaigns targeted at retail banking customers."
        },
        highlights: {
            keyCapabilities: [
                "Integrated Customer View combining demographics, products, transactions, and channel preferences",
                "Multi-lens Customer Segmentation including spend behavior, channel usage, product holding, and transaction frequency",
                "Segment Profiling for actionable insights and targeted marketing",
                "Advanced Analytics such as churn prediction, propensity to buy, sentiment analysis, and product recommendations"
            ],
            solutionsDelivered: [
                "Comprehensive Customer Data Integration",
                "Behavioral and Demographic Segmentation",
                "Value Creation through Predictive Analytics",
                "Customizable Analytics Platforms supporting CRACLE, Power BI, Tableau, Qlik, and bespoke solutions"
            ]
        },
        complianceAndSecurity: {
            certifications: [], // no info provided, can be added later if needed
            features: [] // no info provided, can be added later if needed
        },
        technologyStack: {
            aiMl: [],
            backend: [],
            frontend: [],
            cloud: [],
            dataAndDevOps: []
                // No specific tech stack details were provided; can be updated if you have that info
        },
        partnershipBenefits: [
            "In-depth customer insights driving informed business decisions",
            "Improved customer segmentation for targeted marketing and loyalty programs",
            "Data-driven approach to optimize pricing and reduce waste",
            "Enhanced campaign effectiveness through predictive analytics"
        ]
    },


    {
        id: 8,
        title: "Value to Time & Cost Optimization Approach",
        subtitle: "Accelerating BI & Data Warehouse Implementation with DATA+",
        tagline: "Reduce Time and Cost Through Pre-Built, Reusable BI Solutions and Best Practices",
        overview: {
            description: "This approach optimizes operational excellence and cost by leveraging the DATA+ platform. It transforms the traditional months-or-years BI and data warehouse implementation process into a streamlined 12-week timeline using centralized metadata, pre-built dashboards, and logical data models."
        },
        highlights: {
            keyCapabilities: [
                "Pre-built Logical Data Model and BI Dashboards",
                "Centralized and Reusable Metadata",
                "Best Practices for BI and Data Warehousing",
                "Predefined KPIs & Metrics for Quick Setup",
                "Open Bus Architecture and Technology Agnostic Platform"
            ],
            solutionsDelivered: [
                "Annual Maintenance and Support",
                "Business & IT User Training with Change Management",
                "Comprehensive KPI Understanding and Dashboard Design",
                "Efficient DW Design Conceptualization and Data Modeling",
                "ETL Design, Mapping, and Unit Testing of Feeds"
            ]
        },
        complianceAndSecurity: {
            certifications: [], // No info provided
            features: []
        },
        technologyStack: {
            aiMl: [],
            backend: [],
            frontend: [],
            cloud: [],
            dataAndDevOps: []
                // Specific technologies not mentioned in image
        },
        partnershipBenefits: [
            "Significant reduction in BI/DW implementation time from months/years to 12 weeks",
            "Cost savings via reusable metadata and pre-built components",
            "Centralized global support team",
            "Resource pool concept for flexible project scaling",
            "Ad hoc analysis capabilities for end users"
        ]
    },

    {
        id: 9,
        title: "Fraud Analytics & Tracking Solution for Public Health Insurance Scheme",
        subtitle: "Detecting and Preventing Fraudulent Claims in Public Health Insurance",
        tagline: "AI-powered solution to detect fraudulent claims, providing real-time insights and improving efficiency for public health insurance schemes.",
        overview: {
            description: "Developed an AI-driven solution to identify and track fraudulent claim settlements in real-time. The system processes unstructured data, detects inconsistencies, and alerts top management, improving overall efficiency and reducing fraud."
        },
        highlights: {
            keyCapabilities: [
                "Unified platform for detecting fraudulent claims",
                "Real-time view of all performance metrics",
                "Fraud Classification Decision Tree",
                "Descriptive + Predictive Analytics",
                "Prediction with High Accuracy"
            ],
            solutionsDelivered: [
                "Detection of various types of triggers for fraudulent claims",
                "Hospital risk profiling using machine learning approach",
                "Application of deep learning models on image and documents submitted for claim settlement"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: []
        },
        technologyStack: {
            AIMl: ["Python"],
            backend: [],
            frontend: [],
            cloud: [],
            dataAndDevOps: ["SAS Visualization"]
        },
        partnershipBenefits: [
            "More than 14000 Hospitals Empanelled",
            "Issuing over 170 Million Cards to the beneficiaries"
        ]
    },

    {
        id: 2,
        title: "Social Welfare Scheme IT Solution",
        subtitle: "Integrated IT Solution for Youth Empowerment",
        tagline: "Empowering Governance through Centralized Data Intelligence and AI-Powered Dashboards",
        overview: {
            description: "Developed an integrated IT solution to centralize data from multiple social welfare schemes focused on youth empowerment. The project involved creating a Central Data Repository and building dashboards that enabled government and PMU officials to perform in-depth analysis of various schemes. These interactive dashboards facilitated quick decision-making, complementing conventional reporting tools."
        },
        highlights: {
            keyCapabilities: [
                "Centralized Data Repository across 3 major welfare schemes",
                "Interactive Dashboards for Scheme Performance Monitoring",
                "Automated Generation of 150+ Management Reports",
                "Deep Learning Models for Fraudulent Claim Detection",
                "Real-time Visualization of Scheme Data Analytics"
            ],
            solutionsDelivered: [
                "AI Models to detect and flag fraudulent claim settlements",
                "Comprehensive Dashboarding Solution for PMU usage",
                "Centralized Data Platform integrating over 2 TB of source data",
                "Real-time Analysis and Monitoring Tools for Govt. officials"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: [
                "Centralized secure data access",
                "Role-based dashboard access for different stakeholders"
            ]
        },
        technologyStack: {
            aiMl: ["Python", "TensorFlow", "Deep Learning Frameworks"],
            backend: ["Node.js", "Django"],
            frontend: ["React"],
            cloud: ["Azure"],
            dataAndDevOps: ["Power BI", "SQL Server", "ETL Pipelines"]
        },
        partnershipBenefits: [
            "Empowered PMU officials to measure scheme performance effectively",
            "Enabled data-driven decision-making using deep analytics",
            "Delivered benefits to over 2.8 million aspiring students",
            "Provided loans at nominal interest to deserving students"
        ]
    },

    {
        id: 3,
        title: "Enterprise Data Management for Federal Credit Union",
        subtitle: "Cloud-Based Centralized Data Platform for Financial Services",
        tagline: "Transforming Core Banking Systems through a Unified Data Warehouse and Automated Data Flows",
        overview: {
            description: "Delivered a secure and scalable enterprise data management solution for a fast-growing federal credit union. The objective was to consolidate disparate data systems into a unified cloud-based platform that supports real-time access to core banking data, improves reporting, and enhances customer experience."
        },
        highlights: {
            keyCapabilities: [
                "Cloud-based centralized data warehouse",
                "End-to-End automated data pipelines for reporting",
                "Integration of 10+ source systems with real-time ingestion",
                "Historical data insights for comparative analysis",
                "Information-centric architecture for a single source of truth"
            ],
            solutionsDelivered: [
                "Oracle Autonomous Data Warehouse implementation",
                "Real-time ETL and data ingestion from multiple core banking systems",
                "Visualization and reporting via Tableau",
                "Object storage-based data staging and processing",
                "Optimized data flow supporting historical and comparative analytics"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: [
                "Secured and scalable cloud infrastructure",
                "Data integrity and centralized access governance"
            ]
        },
        technologyStack: {
            aiMl: [],
            backend: ["Oracle Autonomous Data Warehouse"],
            frontend: ["Tableau"],
            cloud: ["Oracle Cloud"],
            dataAndDevOps: ["ETL Pipelines", "Data Integration Platform Cloud", "Object Storage"]
        },
        partnershipBenefits: [
            "Improved customer experience via unified data access",
            "Availability of real-time core banking data",
            "Secured and scalable enterprise data infrastructure",
            "Single source of truth for all reporting and analytics"
        ]
    },

    {
        id: 4,
        title: "Enterprise Data Management Solution for Utility Locating Company",
        subtitle: "Azure-Based Centralized Data Lake and Warehouse for Financial & Operational Insights",
        tagline: "Connecting Disparate Systems into a Unified Data Platform with End-to-End Data Pipelines",
        overview: {
            description: "Built a centralized data platform for a utility locating company by integrating various source systems into a cloud-native Azure data architecture. The solution provided real-time insights into financial and operational KPIs, improved reporting accuracy, and streamlined enterprise data flows."
        },
        highlights: {
            keyCapabilities: [
                "Centralized Data Lake and Data Warehouse on Azure",
                "End-to-End data ingestion using Azure Data Factory",
                "Operational and financial dashboard reporting via Power BI",
                "Integration of T-Core, Lost SYS, and MS Dynamics systems",
                "Single version of truth to improve enterprise reporting"
            ],
            solutionsDelivered: [
                "Azure Data Lake Gen2 for data storage",
                "Azure Data Factory for ELT and transformation pipelines",
                "OLAP-based Analysis Service for structured insights",
                "Power BI for visualization and executive dashboards",
                "Active Directory for security and governance"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: [
                "Role-based access control",
                "Data masking and audit trail",
                "Centralized administration and monitoring"
            ]
        },
        technologyStack: {
            aiMl: [],
            backend: ["Azure Data Factory", "Azure Analysis Services"],
            frontend: ["Power BI"],
            cloud: ["Azure Data Lake Gen2", "Azure Cloud"],
            dataAndDevOps: ["ETL Pipelines", "ELT", "OLAP", "Active Directory", "Audit Trail"]
        },
        partnershipBenefits: [
            "Improved visibility into financial and operational KPIs",
            "Timely and accurate enterprise-level reporting",
            "Actionable insights via interactive dashboards",
            "Secure, scalable, and integrated data architecture"
        ]
    },

    {
        id: 5,
        title: "Data & Analytics Project for Asset Management Company",
        subtitle: "Centralized Reporting and MIS Platform to Enhance Decision-Making",
        tagline: "Automating Legacy Reporting Processes for One of India's Largest Asset Management Firms",
        overview: {
            description: "Delivered a data and analytics solution for a major asset management company, streamlining its manual Excel-based reporting processes and building a centralized historical data repository using Oracle Business Intelligence. The solution significantly reduced delays and increased efficiency in half-yearly and annual reporting."
        },
        highlights: {
            keyCapabilities: [
                "Consolidated MIS and visualization system for organization-wide data",
                "Standardized data input and ETL pipeline",
                "Centralized historical data repository",
                "Automated annual and semi-annual reporting",
                "Integrated platform for all types of financial data"
            ],
            solutionsDelivered: [
                "Designed a centralized and integrated reporting platform",
                "Connected core Mfund application and various source templates",
                "ETL pipeline to transform and load data into Data Marts",
                "Enabled real-time access to structured and unstructured data",
                "Visualization through Oracle Business Intelligence tools"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: [
                "Audited and unaudited reports to meet regulatory needs",
                "Central platform governance for secure access",
                "Data-driven insights to empower business managers"
            ]
        },
        technologyStack: {
            aiMl: [],
            backend: [],
            frontend: ["Oracle Business Intelligence"],
            cloud: [],
            dataAndDevOps: ["ETL Pipelines", "Data Marts", "MIS Integration"]
        },
        partnershipBenefits: [
            "Significantly reduced time and cost for report generation",
            "Improved performance monitoring and response agility",
            "Increased data accuracy and audit readiness",
            "Scalable platform for evolving reporting needs"
        ]
    },

    {
        id: 6,
        title: "Data+ – Cockpit",
        subtitle: "AI-Driven Decision Intelligence Platform for Enhanced Governance",
        tagline: "Revolutionize corporate governance with real-time monitoring, predictive analytics, and intelligent decision support.",
        overview: {
            description: "Data+ – Cockpit is a decision intelligence tool built to solve enterprise-wide visibility and governance challenges. It transforms scattered data into actionable insights using AI-powered inference engines, predictive simulations, and real-time monitoring, empowering leadership to manage dynamically and strategically."
        },
        highlights: {
            keyCapabilities: [
                "Intelligent Inference Engine for accurate predictions with descriptive AI reports",
                "Real-time data monitoring and interactive analytics",
                "Seamless integration with external data sources",
                "Advanced ticketing and actionable decision insights",
                "Visualization and dynamic reporting dashboards"
            ],
            solutionsDelivered: [
                "Transformed data operations into a dynamic decision-making cockpit",
                "Enabled predictive insights and tailored recommendations",
                "Deployed real-time issue anticipation and AI-driven support",
                "Improved strategic planning through simulation and trend analysis"
            ]
        },
        complianceAndSecurity: {
            certifications: [],
            features: [
                "Enhanced risk monitoring with incident-based AI recommendations",
                "Real-time directional insights for rapid decision-making",
                "Centralized intelligence system for streamlined governance"
            ]
        },
        technologyStack: {
            aiMl: ["AI Inference Engine", "Predictive & Prescriptive Analytics"],
            backend: [],
            frontend: ["React JS"],
            cloud: ["On-Prem", "SaaS"],
            dataAndDevOps: ["Postgres", "Neo4j"]
        },
        partnershipBenefits: [
            "Streamlined and proactive decision-making",
            "Improved collaboration and strategic agility",
            "Tailored, real-time recommendations via AI",
            "Scalable across industries and business functions",
            "Multi-source data integration for 360° visibility"
        ]
    }







];

export default caseStudies;