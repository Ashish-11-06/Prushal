// src/data/productData.js
import image1 from '../assets/product_images/Energy.gif';

import image2 from '../assets/product_images/healthSuite.gif';

import image3 from '../assets/product_images/Ticket.gif';

import image4 from '../assets/product_images/healthSuite.gif';

import image5 from '../assets/product_images/chatbot.gif';

import image6 from '../assets/product_images/ERP.gif';

import image7 from '../assets/product_images/marine.webp';

import image8 from '../assets/product_images/fintech.gif';

import image9 from '../assets/product_images/healthSuite.gif';

import image10 from '../assets/product_images/carbon.gif';

import image11 from '../assets/product_images/carbon.gif';

import image12 from '../assets/product_images/real.gif';

import image13 from '../assets/product_images/yoga.gif';

import image14 from '../assets/product_images/Energy.gif';

import image15 from '../assets/product_images/digital.gif';





const productData = [{
        id: 'green-energy-portal',
        title: 'Green Energy Portal',
        subtitle: 'An intelligent marketplace enabling real-time renewable energy trading, investments, and sustainability insights for conscious consumers and producers.',
        image: image1,
        demoUrl: 'https://ext.exgglobal.com/',
        docUrl: 'https://ext.exgglobal.com/',
        about: [
            "The Green Energy Portal is an innovative platform designed to seamlessly connect consumers with renewable energy producers, providing a transparent, efficient, and user-friendly marketplace for transitioning to clean energy. By enabling individuals and businesses to access surplus solar and wind power directly, it eliminates the complexities of traditional energy sourcing. The platform allows users to make purchases from renewable energy suppliers and provides opportunities to invest in green projects, further supporting the global shift towards sustainable energy practices.",

            "With its unified dashboard, the Green Energy Portal offers real-time tracking of energy consumption and generation, allowing users to monitor their environmental footprint in one central location. This data-driven approach empowers both consumers and businesses to make informed, smarter energy choices, directly contributing to their sustainability goals.",

            "The platform simplifies energy transactions by offering transparent pricing and easy-to-understand contracts, removing the barriers that typically exist in the energy market. Through real-time trading, consumers can take advantage of competitive pricing, ensuring they get the best value for their energy needs. Additionally, contract-based deals offer flexibility and security for long-term commitments, while the system supports personalized recommendations to tailor solutions to each user’s unique needs.",

            "At its core, the Green Energy Portal is not only a tool for purchasing energy, but also a sustainability-driven platform that encourages responsible consumption. By promoting green energy, the platform plays a crucial role in advancing the global net-zero goals. It helps reduce reliance on fossil fuels, mitigates carbon footprints, and supports businesses and individuals in achieving their sustainability objectives.",

            "With real-time insights into market trends, pricing, and energy performance, users are equipped with the knowledge needed to make informed choices. This fosters a smarter approach to energy procurement, ensuring that each decision contributes to a greener future. The platform also highlights cost-effective solutions by identifying opportunities to save money while embracing renewable energy sources, making the transition more affordable and accessible.",

            "By offering an easy-to-use interface for comparing energy suppliers, the platform simplifies the process of selecting the best options that align with both financial goals and sustainability commitments. Whether it’s choosing the most cost-effective energy supplier or exploring innovative green projects for investment, the Green Energy Portal makes sustainability straightforward and actionable."
        ],

        techStack: [
            { name: 'React.js & Ant Design', description: 'Used to build a responsive, intuitive, and interactive frontend experience with enterprise-grade UI components.' },
            { name: 'Django & Django REST Framework', description: 'Provides a secure, scalable backend with robust API handling to manage energy transactions and user data.' },
            { name: 'TensorFlow, PyTorch & Scikit-learn', description: 'Enable intelligent energy usage predictions, pattern recognition, and personalized recommendations through machine learning.' },
            { name: 'Docker, AWS & NGINX', description: 'Ensure scalable deployment, high availability, and secure containerized environments for production readiness.' },
            { name: 'WebSockets & JWT', description: 'WebSockets allow real-time energy trading while JWT ensures secure, stateless user authentication across the platform.' },
            { name: 'Chart.js & Axios', description: 'Chart.js enables clear visual analytics while Axios powers smooth API communication between the frontend and backend.' },
            { name: 'GitHub Actions', description: 'Automates testing and deployment pipelines to maintain continuous integration and delivery.' }
        ],
        testimonials: [
            { author: 'Rajesh Sharma', content: 'Green Energy Portal helped us seamlessly switch to clean energy while reducing costs through smart trading.' },
            { author: 'Ankita Verma', content: 'We finally have a unified dashboard to track our energy usage and make data-driven sustainability choices.' },
            { author: 'Prakash Mehta', content: 'The investment tools and ML-based insights are incredibly valuable for any institution transitioning to renewables.' },
            { author: 'Sonal Kapoor', content: 'From secure transactions to real-time monitoring, this platform covers everything we needed for energy transparency.' }
        ]
    },
    {
        id: 'cleanroomcart',
        title: 'Cleanroomcart',
        subtitle: 'A full-featured MERN-based eCommerce platform for cleanroom equipment with secure admin and user experiences.',
        image: image2,
        demoUrl: 'https://cleanroomcart.in/',
        docUrl: 'https://cleanroomcart.in/',
        about: [
            'Cleanroomcart is a scalable eCommerce platform tailored for the niche market of cleanroom equipment. Developed using the MERN stack, it supports both user-facing and admin functionalities with a strong focus on performance and usability. Customers can seamlessly browse, search, and order specialized products, while admins manage inventory, track orders, and analyze product data with ease. JWT-based authentication ensures secure access for both roles, and Redux helps maintain a consistent and predictable application state. With a modern UI built using Ant Design, Cleanroomcart delivers a smooth, responsive experience across devices. The project is a testament to our ability to craft robust, real-world digital commerce solutions that balance functionality, security, and design excellence.'
        ],
        techStack: [
            { name: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)', description: 'Provides a unified JavaScript-based development environment, ensuring seamless data flow and efficient handling of dynamic content across the full stack.' },
            { name: 'Ant Design', description: 'Used for creating a clean, responsive, and professional UI that enhances usability and visual appeal for both customers and admins.' },
            { name: 'JWT & Redux', description: 'JWT handles secure user authentication while Redux ensures robust and centralized state management across the app.' },
            { name: 'REST API', description: 'A custom-built RESTful API allows secure, scalable, and modular communication between the frontend and backend services.' }
        ],
        testimonials: [
            { author: 'Rajeev Sinha (Owner)', content: 'Cleanroomcart streamlined our operations and gave us a professional online storefront tailored to our specialized industry.' }
        ]
    },

    {
        id: 'support-ease',
        title: 'Support Ease',
        subtitle: 'A smart support ticketing and service management tool built for enterprises, featuring ticket tracking, SLA alerts, and automated quotations.',
        image: image3,
        demoUrl: '#',
        docUrl: '#',
        about: [
            'Support Ease is a dedicated technical support and ticket management solution developed for the TechTrix support team and its enterprise clientele. This powerful platform enables clients to seamlessly raise, track, and manage support tickets through an intuitive web interface. The system supports full lifecycle management of each ticket—from creation and prioritization to assignment, resolution, and closure—ensuring clear visibility and accountability at every stage.',
            'Built using React and Ant Design, the frontend delivers a responsive and user-friendly experience, while the Spring Boot and MySQL backend ensures robust, secure data handling and high performance under load. Clients can create tickets that are automatically categorized and prioritized, while support agents receive intelligent alerts for SLA breaches or high-priority items. Admins maintain a global view with dashboard analytics, filtering tools, and role-based access to streamline workflow management.',
            'Support Ease also includes a dynamic quotation module that generates service quotes based on selected features, urgency levels, and customer profiles—making it especially valuable for teams offering technical consultations or services. Integrated with Axios for smooth API interactions, the platform features real-time status updates, email notifications, toast alerts, and built-in loading indicators to maintain responsiveness and clarity throughout the user journey.',
            'Now trusted by over 50 enterprise clients, Support Ease not only standardizes the support process but enhances client satisfaction through transparency, timely responses, and detailed reporting. With SLA tracking, performance dashboards, and modular scalability, it is a critical tool for any tech support team looking to deliver best-in-class service management.'
        ],
        techStack: [
            { name: 'React & Ant Design', description: 'Used to build an intuitive, responsive frontend interface that simplifies support workflows for clients and agents alike with enterprise-grade UI components.' },
            { name: 'Spring Boot & MySQL', description: 'Powers the backend with strong data persistence, secure APIs, and enterprise-grade scalability to support complex business logic and large volumes of tickets.' },
            { name: 'REST API & Axios', description: 'RESTful architecture enables modular communication between frontend and backend, while Axios ensures smooth, reliable API calls with real-time feedback via notifications.' }
        ],
        testimonials: [
            { author: 'Meenal Bhatia', content: 'Support Ease transformed our chaotic ticket system into a smooth, efficient process—our team can’t imagine working without it now.' },
            { author: 'Aditya Rane', content: 'The SLA tracking and automated notifications have drastically improved our response times and client satisfaction.' },
            { author: 'Pooja Nair', content: 'The quote generator is a game-changer—it saves hours each week and keeps our service pricing consistent and professional.' },
            { author: 'Rahul Tripathi', content: 'From UI to performance, everything in Support Ease feels enterprise-ready. The onboarding was smooth and support was top notch.' },
            { author: 'Siddharth Kulkarni', content: 'Finally, a tool that bridges client expectations and internal efficiency. Support Ease is as powerful as it is easy to use.' }
        ]
    },

    {
        id: 'health-suite',
        title: 'Health Suite',
        subtitle: 'A comprehensive medical coding and patient assessment platform for healthcare professionals, featuring search, management, and detailed analysis tools.',
        image: image4,
        demoUrl: 'https://hsuite.prushal.com/login',
        docUrl: '#',
        about: [
            'Health Suite is a powerful medical coding platform designed to streamline the management and usage of medical codes for healthcare professionals. The system allows users to easily search for, add, and manage medical codes along with their descriptions and sub-descriptions. Healthcare professionals can rate the usefulness of codes by liking or disliking them, while also having the ability to edit and track the version history of code descriptions for accuracy and auditing purposes.',
            'The platform features advanced search functionality, complete with filters for code types, categories, and popularity, making it easier for users to find the exact codes they need in real time. Additionally, Health Suite introduces a unique patient assessment module that allows patients to take personality tests and receive in-depth analysis results. This feature not only enhances the experience for healthcare providers but also provides valuable insights for patient care and treatment planning.',
            'Built with React and Ant Design, Health Suite delivers an intuitive and responsive frontend, while the Django backend ensures efficient data management and query handling. The system logs all code changes, keeping a complete version history for auditing purposes, which is essential in the medical field where accuracy is critical. Role-based access control is integrated into the system, providing healthcare professionals with personalized access and functionality based on their roles.',
            'Moreover, Health Suite supports seamless data export capabilities for reporting purposes, making it easy for medical professionals and organizations to generate reports based on code usage, popularity, and other key metrics. Whether for individual practitioners, clinics, or larger healthcare organizations, Health Suite offers a centralized, efficient platform for managing medical codes and patient assessments.'
        ],
        techStack: [
            { name: 'React & Ant Design', description: 'Used for building a clean, modern, and user-friendly interface that facilitates easy navigation and interaction with medical codes and assessments.' },
            { name: 'Django & SQLite', description: 'The robust Django backend ensures efficient data processing and management, while SQLite provides a lightweight, reliable database solution for local and web-based applications.' },
            { name: 'Redux', description: 'Manages the state of the application, allowing for efficient handling of user preferences, likes/dislikes, and real-time updates across the platform.' },
            { name: 'REST API', description: 'RESTful APIs provide seamless communication between the frontend and backend, ensuring smooth data flow and interactions between the user interface and database.' }
        ],
        testimonials: [
            { author: 'Dr. Rajiv Mehra', content: 'Health Suite has transformed the way we manage and track medical codes, saving us time and improving accuracy in our daily operations.' },
            { author: 'Dr. Priya Sharma', content: 'The search functionality and version history tracking are fantastic—this platform ensures I always have the most accurate and up-to-date information.' },
            { author: 'Dr. Anil Deshmukh', content: 'The personality assessments have added a unique touch to the patient experience, helping us understand our patients better.' },
            { author: 'Dr. Ritu Kapoor', content: 'Health Suite’s role-based access control makes it incredibly easy for our team to work together while maintaining security and privacy.' },
            { author: 'Dr. Vikram Jain', content: 'The data export capabilities have been invaluable for reporting and analysis, simplifying our workflow and helping with compliance.' },
            { author: 'Dr. Seema Malik', content: 'I can’t imagine working without Health Suite anymore. It has significantly improved my practices efficiency and patient interaction.' }
        ]
    },

    {
        id: 'infi-chatbot-solutions',
        title: 'Infi - Chatbot Solutions',
        subtitle: 'A hybrid AI-powered chatbot platform combining rule-based systems with advanced LLM capabilities for seamless enterprise-level customer and internal support.',
        image: image5,
        demoUrl: 'http://3.110.240.189/',
        docUrl: '#',
        about: [
            'Infi - Chatbot Solutions is a sophisticated hybrid platform that combines traditional rule-based chatbot systems with advanced Large Language Model (LLM) capabilities like GPT-3.5/4. Designed specifically for enterprise use, this solution enables both text and voice-based interactions, providing users with a dynamic and personalized communication experience. The system is capable of handling structured workflows through its rule-based components while the LLM takes over for open-ended conversations, ensuring a fluid transition between defined and flexible responses.',
            'One of the standout features of Infi is its ability to offer sentiment analysis, which evaluates the tone of conversations to enhance customer interactions. The chatbot can maintain conversation history, allowing it to recall past interactions for context, making responses more relevant and improving overall user satisfaction. The integration with company-specific knowledge bases further personalizes the experience, enabling users to receive tailored answers to frequently asked questions, technical support queries, and more.',
            'The platform also includes seamless handoff capabilities, ensuring that if the chatbot reaches its limitations, it can smoothly transfer the conversation to a human agent without breaking the interaction. This feature is crucial for maintaining a high level of service, particularly in customer support, IT helpdesk, and internal knowledge management.',
            'Built with Django and SQLite on the backend, the system ensures reliable performance and easy scalability. WebSockets are used for real-time communication, allowing for a more responsive user experience. The platform also provides a comprehensive analytics dashboard that tracks conversation metrics, user satisfaction, and common query patterns, giving businesses valuable insights to improve chatbot interactions and overall service delivery.',
            'Infi is an ideal solution for organizations looking to automate customer support, IT helpdesk services, or internal knowledge management processes. With its hybrid approach, Infi delivers the best of both worlds, combining rule-based precision with the flexibility and intelligence of AI-driven conversations.'
        ],
        techStack: [
            { name: 'Django & SQLite', description: 'Django powers the backend for scalable, secure, and fast web applications, while SQLite offers a lightweight, easy-to-deploy database solution.' },
            { name: 'REST API', description: 'A robust REST API connects the frontend and backend seamlessly, ensuring smooth communication and flexibility in managing chatbot functionalities.' },
            { name: 'NLP & Transformer Models', description: 'Natural Language Processing (NLP) and Transformer models, like GPT-3.5/4, handle open-ended conversations, enabling the chatbot to understand and respond to a wide range of user queries.' },
            { name: 'WebSockets', description: 'WebSockets allow real-time communication, providing instant interaction between the user and the chatbot for both text and voice interfaces.' }
        ],
        testimonials: [
            { author: 'Anjali Mehta', content: 'Infi revolutionized our customer support operations. The integration of AI and rule-based systems has helped us provide fast, relevant responses 24/7.' },
            { author: 'Ravi Kumar', content: 'The ability to transfer from AI to a human agent without losing context has been a game-changer for us. Customers love the seamless experience.' },
            { author: 'Nitin Sharma', content: 'The sentiment analysis feature has allowed us to tailor our responses better and improve user satisfaction significantly.' },
            { author: 'Sonia Gupta', content: 'Infi’s detailed analytics dashboard has helped us optimize chatbot performance and improve our overall customer service strategy.' }
        ]
    },

    {
        id: 'simple-erp',
        title: 'Simple ERP',
        subtitle: 'A comprehensive ERP system for Kavya Enterprises, designed to streamline operations and manage water supply and dry cleaning services efficiently.',
        image: image6,
        demoUrl: 'https://thekavyaenterprises.com/login',
        docUrl: 'https://thekavyaenterprises.com/login',
        about: [
            'Simple ERP is a robust enterprise resource planning system developed specifically for Kavya Enterprises, designed to manage the operations of their water supply and dry cleaning businesses. The system streamlines order management, enabling real-time tracking and providing intuitive dashboards for both customers and vendors. Through its easy-to-navigate interface, users can place orders, monitor delivery statuses, and interact with various service components, all while receiving timely updates.',
            'The platform’s powerful backend, built with Django and REST APIs, ensures smooth data processing and easy scalability. React and Redux manage the frontend, providing a dynamic and responsive user experience. Admins have complete control, with the ability to assign tasks, update orders, and generate detailed analytics reports to measure operational performance, helping them make informed decisions.',
            'In addition to order management, the system supports features such as secure user authentication, invoice generation, and integration with payment gateways to facilitate seamless transactions. Multiple modules are designed to handle product management, customer requests, and employee tracking, ensuring all aspects of business operations are covered under one umbrella.',
            'One of the key benefits of Simple ERP is its ability to reduce manual errors, automate tasks, and improve overall efficiency, making day-to-day operations simpler and more accurate. Additionally, the platform offers support for multiple languages, including regional preferences, improving accessibility and usability for a broader user base.'
        ],
        techStack: [
            { name: 'Django', description: 'Django serves as the core backend framework, providing a secure and scalable environment for managing business logic, data processing, and RESTful APIs.' },
            { name: 'SQLite', description: 'SQLite is used for lightweight, efficient local storage, ensuring reliable performance without the need for complex database setups.' },
            { name: 'REST API', description: 'REST APIs allow seamless integration between the frontend and backend, ensuring smooth interaction between users and the system.' },
            { name: 'Bootstrap & HTML/CSS', description: 'Bootstrap provides a responsive and mobile-friendly UI, while HTML and CSS handle the structure and styling of the pages for a clean and professional appearance.' }
        ],
        testimonials: [
            { author: 'Ravi Kumar', content: 'Simple ERP has transformed the way we manage operations. It’s helped us automate processes, reduce errors, and boost overall efficiency.' }
        ]
    },

    {
        id: 'nbs-marine-solutions',
        title: 'NBS Marine Solutions',
        subtitle: 'A professional corporate website for NBS Marine Solutions, showcasing their expertise in marine engineering, air conditioning, refrigeration, and industrial services.',
        image: image7,
        demoUrl: 'https://marinesupplyparts.com/',
        docUrl: 'https://marinesupplyparts.com/',
        about: [
            'NBS Marine Solutions is a leading global provider of marine engineering, air conditioning, refrigeration, and industrial services, with a rich legacy spanning over 25 years. Specializing in marine motor winding, ship and rig spares, centralized AC systems, and industrial refrigeration solutions, the company has built a solid reputation for its technical expertise and commitment to safety and customer satisfaction.',
            'The NBS Marine Solutions website is designed to reflect the company’s professional image and technical capabilities. Built on WordPress with Elementor, the platform highlights the service categories, company history, and core values, with a primary focus on attracting clients in the marine, offshore, and heavy industrial sectors. The website serves as both an informative hub and a trust-building tool to convert visitors into potential leads.',
            'The responsive and user-friendly design ensures accessibility across devices, while SEO optimization and strategically placed contact forms enable smooth lead generation. Visitors can easily access information on the company’s diverse offerings, from marine motor winding to industrial refrigeration, all with a clean, professional layout that reflects NBS Marine Solutions’ industry leadership.',
            'With its sleek design and optimized content, the site reinforces the company’s position as a reliable partner in complex engineering domains, making it a key asset for business development and global outreach.'
        ],
        techStack: [
            { name: 'WordPress', description: 'The website is built on WordPress, providing a user-friendly content management system that allows easy updates, scalability, and flexibility.' },
            { name: 'Elementor', description: 'Elementor is used for easy drag-and-drop page design, allowing for a custom, responsive layout that adapts across all devices.' },
            { name: 'Responsive Design', description: 'The site is fully responsive, ensuring an optimal viewing experience across desktops, tablets, and mobile devices.' },
            { name: 'SEO Optimization', description: 'The site is SEO-optimized to improve search engine rankings and drive organic traffic, ensuring visibility for NBS Marine Solutions in competitive markets.' }
        ],
        testimonials: [
            { author: 'James Thompson', content: 'The new website perfectly reflects our brand and expertise. It’s a great tool for lead generation and showcasing our services to a global audience.' }
        ]
    },

    {
        id: 'dazzlepay-fintech-engagement',
        title: 'DazzlePay – Fintech Engagement Platform',
        subtitle: 'A sleek, modern web presence for DazzlePay, transforming how businesses engage with customers through seamless digital payment solutions.',
        image: image8,
        demoUrl: 'https://dazzlepay.co.in/',
        docUrl: 'https://dazzlepay.co.in/',
        about: [
            'DazzlePay is a forward-thinking fintech company that focuses on revolutionizing the way retailers, corporates, and banks engage with their customers through digital payment experiences. The platform positions DazzlePay as a leader in the digital transaction space, offering businesses seamless payment solutions that foster customer loyalty and enable real-time, secure transactions.',
            'The website is designed as an informative one-pager or multi-section site, clearly communicating DazzlePay’s mission to empower businesses with technology-driven tools for efficient payment processing and customer engagement. Its clean, modern layout features concise messaging that highlights the core offerings of the platform, with a focus on enabling a smarter, connected, and cashless future.',
            'The platform caters to both enterprise clients looking for innovative digital payment solutions and fintech investors seeking high-growth opportunities in the evolving payments space. As an early-stage brand, DazzlePay’s website provides a strong foundation for brand positioning and lead generation, conveying the company’s vision while driving initial visibility in the fintech industry.',
            'With its responsive design, the website ensures accessibility across various devices, making it easy for users to explore DazzlePay’s services and connect with the company directly, all within a seamless browsing experience.'
        ],
        techStack: [
            { name: 'HTML', description: 'HTML forms the backbone of the website, ensuring a clean and semantic structure for easy navigation and content accessibility.' },
            { name: 'CSS', description: 'CSS is used to style the site, providing a sleek and modern design that reflects DazzlePay’s innovative brand identity.' },
            { name: 'JavaScript', description: 'JavaScript is used for enhancing user interactivity, adding dynamic elements to the site for a more engaging experience.' },
            { name: 'Responsive Design', description: 'The website is fully responsive, ensuring a smooth and optimized browsing experience across desktops, tablets, and mobile devices.' }
        ],
        testimonials: [
            { author: 'Amit Desai', content: 'Our website captures DazzlePay’s vision perfectly — modern, sleek, and efficient. It’s been essential in positioning our brand as a leader in fintech solutions.' }
        ]
    },

    {
        id: 'neelansh-equipments-machines',
        title: 'Neelansh Equipments & Machines',
        subtitle: 'A professional corporate website showcasing Neelansh Equipments & Machines, a leader in stainless steel fabrication for the pharmaceutical, biotechnology, and commercial kitchen industries.',
        image: image9,
        demoUrl: 'https://neelanshequipment.com/',
        docUrl: 'https://neelanshequipment.com/',
        about: [
            'Neelansh Equipments & Machines is a renowned manufacturer, supplier, and exporter of high-quality stainless steel equipment and furniture, specializing in custom SS fabrication for industries such as pharmaceuticals, biotechnology, hospitals, and commercial kitchens. With decades of expertise, Neelansh delivers tailored solutions that meet the specific requirements of clients across diverse sectors, ensuring precision, durability, and exceptional performance in every product.',
            'The website was designed to reflect the company’s commitment to quality and technical excellence. Built on WordPress and designed with Elementor, it showcases an extensive portfolio of products and services that highlight Neelansh’s specialization in stainless steel fabrication. The platform emphasizes the company’s dedication to customer satisfaction by providing detailed information about their services and offering customized solutions to meet unique client needs.',
            'The user-friendly website provides easy navigation and a seamless browsing experience, with responsive design ensuring accessibility across all devices. SEO optimization enhances the company’s online presence, helping Neelansh Equipments & Machines reach a broader audience and attract potential clients who seek top-tier stainless steel solutions.',
            'With the inclusion of custom contact forms, clients can easily reach out to inquire about bespoke equipment or place orders. The website serves as a powerful marketing tool, reinforcing Neelansh’s position as a trusted partner in the stainless steel equipment industry, while also boosting its visibility in search engine results.'
        ],
        techStack: [
            { name: 'WordPress', description: 'The website is built on WordPress, offering a flexible, easy-to-manage platform that allows for ongoing updates and scalability.' },
            { name: 'Elementor', description: 'Elementor is used to design the site with a custom, user-friendly interface that adapts to any screen size, ensuring a seamless experience for visitors.' },
            { name: 'Responsive Design', description: 'The website is fully responsive, optimized for mobile, tablet, and desktop viewing, ensuring a smooth experience for users on any device.' },
            { name: 'SEO Optimization', description: 'SEO strategies are implemented to ensure the site ranks higher on search engines, increasing its visibility and helping attract more potential clients.' }
        ],
        testimonials: [
            { author: 'Rajeev Kumar', content: 'Our new website perfectly captures the essence of Neelansh Equipments & Machines — quality, precision, and reliability. It has been a key tool in growing our business, helping us connect with clients in need of custom stainless steel solutions.' }
        ]
    },
    {
        id: 'seemas-project',
        title: 'Seema’s Project',
        subtitle: 'A charitable initiative dedicated to rescuing, rehabilitating, and providing quality care for the children of sex workers in the Pune region.',
        image: image10,
        demoUrl: 'https://seemasproject.org/',
        docUrl: 'https://seemasproject.org/',
        about: [
            'Seema’s Project is a noble charitable initiative aimed at rescuing, rehabilitating, and providing a brighter future for children born to sex workers in the Pune region. The project works to break down barriers of gender, caste, race, and ethnicity, ensuring that all children, regardless of their background, receive the care, love, and opportunities they deserve.',
            'As part of our company’s commitment to social responsibility, we built this platform to provide Seema’s Project with an online presence that amplifies their mission. The website shares their vision of bringing hope, healing, and a better life to the children and mothers involved in this initiative, helping to create awareness and raise support from a broader community of donors, volunteers, and social activists.',
            'This platform serves as a story-telling tool, capturing the journey of these marginalized individuals and the positive change Seema’s Project is creating. By featuring impactful stories, case studies, and a clear call to action, the website encourages visitors to contribute and support the rescue and shelter efforts, aiming to impact over 200 children and adults by the end of 2022.',
            'Through this website, Seema’s Project can foster a community of compassionate individuals who are willing to get involved in the cause. It provides transparency about the organization’s progress, allows for easy donations, and invites volunteers to be a part of the movement. Ultimately, it is about building a supportive environment that will help change the lives of those who have been marginalized by society.'
        ],
        techStack: [
            { name: 'HTML', description: 'HTML is used to structure the website, ensuring a clean and organized layout for presenting Seema’s Project’s story and mission.' },
            { name: 'CSS', description: 'CSS provides the necessary styling, ensuring the website is visually appealing and easy to navigate, reflecting the compassionate nature of the project.' },
            { name: 'JavaScript', description: 'JavaScript enhances the interactivity of the site, enabling dynamic elements such as donation forms, volunteer sign-ups, and event details.' },
            { name: 'Responsive Design', description: 'The website’s responsive design ensures that it is accessible across all devices, providing a smooth browsing experience for all users, whether on mobile or desktop.' },
            { name: 'WordPress', description: 'WordPress was used to build the website, offering a flexible and user-friendly platform for easy content management and future updates.' }
        ],
        testimonials: [
            { author: 'Seema Sharma', content: 'The website has played a crucial role in connecting us with supporters who are passionate about making a difference in the lives of the children we care for. It has been a platform that not only showcases our mission but also encourages action from a wider community of compassionate individuals.' }
        ]
    },

    {
        id: 'carbonutral',
        title: 'Carbonutral',
        subtitle: 'Leading the transition to low-carbon power generation through solar, wind, biogas, and bioenergy solutions in India.',
        image: image11,
        demoUrl: 'https://carboneutral.in/',
        docUrl: 'https://carboneutral.in/',
        about: [
            'Carbonutral is an innovative initiative focused on generating renewable energy through solar, wind, biogas, and bioenergy sources. With a strong vision to contribute to India’s transition towards a low-carbon economy, the platform highlights the company’s role in reducing carbon emissions and providing sustainable, pollution-free electricity.',
            'By developing significant megawatt (MW) capacities in renewable energy generation, Carbonutral is playing a pivotal role in reducing dependency on fossil fuels and supporting the global effort to combat climate change. Their projects include energy-efficient buildings, smart lighting, and energy management systems that further minimize energy consumption while promoting environmental sustainability.',
            'The website serves as an essential resource for potential investors, stakeholders, and community members, offering detailed information on the company’s ongoing initiatives and its long-term impact on reducing carbon footprints. It also emphasizes Carbonutral’s commitment to creating a cleaner and greener future by supporting renewable energy solutions and driving community development through job creation and sustainable energy practices.',
            'Carbonutral’s dedication to providing innovative, scalable energy solutions is at the core of its mission. The platform highlights their ambition to establish a carbon-neutral environment in India while supporting the transition to clean energy and promoting global sustainability goals. With a focus on creating a more sustainable and pollution-free future, Carbonutral’s work is not just a business but a movement for a better tomorrow.'
        ],
        techStack: [
            { name: 'WordPress', description: 'WordPress serves as the foundation of the website, providing flexibility for easy content updates and efficient management of ongoing projects.' },
            { name: 'Responsive Design', description: 'The responsive design ensures the platform is optimized for both mobile and desktop users, offering a seamless browsing experience across devices.' },
            { name: 'SEO Optimization', description: 'SEO optimization techniques were implemented to enhance the platform’s visibility on search engines, driving traffic and raising awareness for the company’s mission.' },
            { name: 'Custom Forms', description: 'Custom forms are integrated for inquiries, project proposals, and stakeholder engagement, making it easy for users to connect with the company for collaboration or investment opportunities.' }
        ],
        testimonials: [
            { author: 'Amit Kapoor', content: 'The website has truly reflected our commitment to sustainability and clean energy. It’s an invaluable tool for engaging with potential investors and stakeholders, showcasing our renewable energy projects, and advancing our mission to create a carbon-neutral future in India.' }
        ]
    },

    {
        id: 'redwoods-group',
        title: 'Redwoods Group',
        subtitle: 'Redwoods Group: Leading the way in real estate, fund management, and unique transactions since 2006.',
        image: image12,
        demoUrl: 'https://redwoodscorp.com/',
        docUrl: 'https://redwoodscorp.com/',
        about: [
            'Founded in 2006, Redwoods Group is a trusted and innovative provider of end-to-end real estate services, specializing in fund management, deal structuring, joint developments, and unique property transactions. With more than two decades of experience, the company has earned a reputation for credibility, transparency, and a client-centric approach.',
            'The website highlights the Redwoods Group’s comprehensive expertise in the real estate market, offering a deep dive into their portfolio of successful projects, industry know-how, and exclusive investment opportunities. Serving property buyers, investors, and partners, Redwoods ensures that their clients receive personalized solutions tailored to their needs, whether it’s for residential, commercial, or mixed-use developments.',
            'Designed to reflect the company’s legacy, the platform offers a professional yet accessible look into the diverse services they offer. It features a clean, responsive design, ensuring a smooth user experience across all devices, while the SEO optimization boosts Redwoods Group’s online presence, positioning them as a prominent player in the real estate and investment sectors.',
            'Through the website, Redwoods Group emphasizes its commitment to providing expert guidance, trustworthy deals, and unmatched industry insight, ensuring their clients can make informed decisions when investing in real estate. The platform acts as an information hub for current and potential clients, facilitating easy navigation of their services and portfolio, while enhancing engagement through custom forms and client outreach tools.'
        ],
        techStack: [
            { name: 'WordPress', description: 'WordPress powers the website, offering flexibility for easy content management and scalability as the business grows.' },
            { name: 'Responsive Design', description: 'The responsive design ensures that the website delivers a seamless user experience on both desktop and mobile devices, making it accessible to clients at all times.' },
            { name: 'SEO Optimization', description: 'SEO best practices were employed to increase the website’s visibility on search engines, helping to attract potential investors and clients seeking real estate solutions.' },
            { name: 'Custom Forms', description: 'Custom contact forms are integrated throughout the platform, enabling easy communication and quick inquiries for prospective clients and investors.' },
            { name: 'Portfolio Gallery', description: 'The portfolio gallery showcases Redwoods Group’s successful projects, providing a visually appealing and informative view of their expertise and achievements in the real estate market.' }
        ],
        testimonials: [
            { author: 'Rajeev Sharma', content: 'Redwoods Group has been a trusted partner in our real estate investments. Their professionalism and transparency have given us confidence in all our dealings with them over the years.' }
        ]
    },

    {
        id: 'shivayog-yoga-with-kavita-tripathi',
        title: 'Shivayog – Yoga with Kavita Tripathi',
        subtitle: 'A holistic platform for mindful living and yoga training, led by Kavita Tripathi.',
        image: image13,
        demoUrl: 'https://www.shivayog.in/',
        docUrl: 'https://www.shivayog.in/',
        about: [
            'Shivayog – Yoga with Kavita Tripathi is a transformative platform dedicated to promoting physical wellness, mental balance, and personal growth through yoga. Founded by Kavita Tripathi, a visionary educator with an army background, this platform brings accessible yoga training to a global audience.',
            'With a deep understanding of modern lifestyle challenges, particularly those related to health conditions such as PCOS, thyroid disorders, diabetes, joint pain, stress, and anxiety, Kavita Tripathi has designed Shivayog to offer holistic solutions rooted in traditional yoga practices.',
            'The platform provides a variety of online and offline yoga classes tailored for individuals of all fitness levels, body types, and medical conditions. Each program is customized to meet personal goals ranging from weight loss and hormonal balance to mindfulness and emotional wellbeing.',
            'Shivayog offers one-on-one yoga sessions and structured wellness plans, allowing users to practice yoga at their own pace and from the comfort of their homes. In addition to physical wellness, the platform fosters a deeper connection to self-care and discipline, helping users cultivate long-term, sustainable health practices.',
            'By blending traditional practices with modern wellness needs, Shivayog empowers users to embark on a journey of self-improvement, creating lasting habits that promote holistic well-being.'
        ],
        techStack: [
            { name: 'Web Development', description: 'The website is built using modern web technologies, offering a responsive and user-friendly interface to deliver seamless yoga experiences on all devices.' },
            { name: 'Responsive UI', description: 'A responsive design ensures that users can access the platform from their mobile devices, tablets, and desktops, making yoga practice convenient anytime, anywhere.' },
            { name: 'Online Booking', description: 'The platform features an integrated online booking system, allowing users to easily schedule and book their personalized yoga sessions at their convenience.' },
            { name: 'Video Integration', description: 'Video integration is key to the platform, providing a rich media experience for users to follow yoga sessions and engage in live classes from the comfort of their homes.' },
            { name: 'User Authentication', description: 'Secure user authentication ensures that each member can access their personalized yoga plans, schedule sessions, and track their progress over time.' }
        ],
        testimonials: [
            { author: 'Aishwarya Verma', content: 'Shivayog has been a game-changer for me. The personalized yoga sessions have helped me manage my PCOS and emotional well-being. Kavita’s guidance is truly transformative!' },
            { author: 'Raghav Mehta', content: 'I’ve tried many fitness programs, but nothing compares to Shivayog. The structured approach and holistic programs have made a huge difference in my life. Highly recommend!' }
        ]
    },

    {
        id: 'exg-global',
        title: 'EXG Global',
        subtitle: 'Empowering businesses with tools for effective ESG reporting and renewable energy transition.',
        image: image14,
        demoUrl: 'http://exgglobal.com/',
        docUrl: 'http://exgglobal.com/',
        about: [
            'EXG Global is a transformative platform designed to assist businesses in managing and reporting their Environmental, Social, and Governance (ESG) initiatives, while facilitating a smooth transition to renewable energy solutions.',
            'With the rising importance of sustainability, EXG Global offers businesses the tools and resources to track, manage, and report on their ESG performance, enabling them to make informed decisions that contribute to a more sustainable future.',
            'Developed using WordPress and Oxygen Builder, the platform presents a clean, responsive design that ensures an optimal user experience across all devices. The platform is specifically optimized for search engines to enhance visibility and ensure businesses can access their ESG resources easily.',
            'EXG Global’s comprehensive tools not only help businesses meet regulatory and reporting requirements but also foster transparency and increase stakeholder engagement, promoting trust and accountability in their sustainability practices.',
            'The platform stands at the forefront of a growing movement towards renewable energy and sustainable business practices, equipping organizations with the necessary tools to align their operations with global sustainability goals.'
        ],
        techStack: [
            { name: 'WordPress', description: 'Built on WordPress for easy content management, offering a flexible platform for maintaining ESG reports and resources.' },
            { name: 'Oxygen Builder', description: 'Using Oxygen Builder, the site offers a custom, scalable design, ensuring businesses have a seamless browsing experience.' },
            { name: 'Responsive Design', description: 'A fully responsive design ensures the platform provides an optimal user experience across all devices, from desktops to mobile phones.' },
            { name: 'SEO Optimization', description: 'The platform is optimized for search engines, enhancing its visibility and helping businesses reach a broader audience for their ESG and renewable energy solutions.' }
        ],
        testimonials: [
            { author: 'Daniel Richards', content: 'EXG Global’s platform has made our ESG reporting seamless and efficient. It’s allowed us to focus on sustainability without worrying about compliance.' },
            { author: 'Elena Paterson', content: 'We were looking for a tool that could help us transition to renewable energy, and EXG Global’s resources have been invaluable in guiding us through the process.' }
        ]
    },

    {
        id: 'stratxg',
        title: 'StratXG',
        subtitle: 'Empowering businesses through digital transformation and strategic repositioning in core sectors.',
        image: image15,
        demoUrl: 'https://www.stratxg.com/',
        docUrl: 'https://www.stratxg.com/',
        about: [
            'StratXG is a digital consulting firm dedicated to driving growth and profitability for businesses across diverse sectors, including core infrastructure, green energy, integrated utilities, and emerging industries such as e-education, e-healthcare, and digital technology.',
            'The website was developed using WordPress, providing an ideal platform to showcase StratXG’s expertise in helping organizations adapt and thrive in an ever-changing business environment. The focus is on strategic repositioning to ensure long-term success and resilience.',
            'StratXG’s innovative approach to digital transformation empowers companies to stay competitive, profitable, and relevant. By providing solutions that leverage the latest technologies and methodologies, StratXG ensures that its clients can successfully navigate the complexities of modernization.',
            'Our team worked on delivering a responsive, modern design that accurately represents StratXG’s commitment to fostering business growth and evolution through digital solutions. Additionally, the site is optimized for search engine visibility, helping StratXG reach and engage a wider audience.'
        ],
        techStack: [
            { name: 'WordPress', description: 'The website is built on WordPress, offering easy content management and scalability for future business growth.' },
            { name: 'Responsive Design', description: 'A fully responsive design ensures a seamless browsing experience on all devices, from desktops to mobile phones.' },
            { name: 'SEO Optimization', description: 'Search engine optimization is integrated into the platform to maximize visibility and reach, ensuring StratXG’s services are easily discoverable.' }
        ],
        testimonials: [
            { author: 'Harold T. Williams', content: 'StratXG helped us reposition our business digitally, and their insights have been invaluable in driving our growth and profitability.' },
            { author: 'Nancy Rodriguez', content: 'Their expertise in digital transformation has given us the tools to stay competitive in a rapidly changing market. StratXG is a true partner in business evolution.' }
        ]
    }

];

export default productData;