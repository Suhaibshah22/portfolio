import { ExperienceProps } from "@/interfaces";

export const workExperienceData: ExperienceProps[] = [
    {
        companyName: "Socar Mobility Malaysia",
        location: "Kuala Lumpur, MY",
        time: 'Oct. 2022 - Present',
        position: "Backend Engineer",
        description:
            [`Led the cross functional Socar, Trevo, Dash Platform team in planning and executing projects as per business & stakeholder requirements.`,
                `Implemented Machine Learning Know Your Customer (KYC) for Malaysian and Indonesian users to improve organizational efficiency and reduce customer wait times
        by 67%. ML-KYC reduced operational costs by 96k USD a year.`,
                `Implemented key product functionality via back end services that are designed with microservices architecture. Orchestrated large scale
        database migrations on 2+ million user records to open up customer base to different business services.`,
                `Utilized modern technological tools such as NestJs (typescript), Kafka, gRPC to realize business and engineering goals.`,
                `Analyzed and managed SQL and noSQL databases, to improve performance, reduce costs and improve availability.`]
    },
    {
        companyName: "Focus Applied Technologies",
        location: "Penang, MY",
        time: 'Jan. 2021 - May 2022',
        position: "Software Engineer",
        description:
            [`Developed a backend server using .NET framework (C#) to allow for remote operation of dynamometer equipment.`,
                `Developed their IoT WiFi data acquisition system, which included setting specifications,
                designing a PCB, and developing firmware in embedded C along with carrying out testing.`,
                `Developed their IoT web platform, using Node Js (RESTful backend) and React Js (frontend).`,
                `Developed a point to point wireless controller for their Dynamometer systems for the purpose of peripheral control.`]
    },
    {
        companyName: "Maze Design Lab",
        location: "Kuala Lumpur, MY",
        time: 'Sep. 2021 - Present',
        position: "Software Engineer (Part Time)",
        description:
            [`Responsible for developing embedded electronics systems, primarily in the area of IoT.`,
                `Responsible for ensuring that products being developed match customer and market demands.`,
                `Gather client requirements, design, plan and develop web applications, using Node Js (RESTful backend) and React Js (frontend).`,
            ]
    },
];

