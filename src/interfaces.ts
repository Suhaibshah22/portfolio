export type ExperienceProps = {
    companyName: string;
    location: string;
    time: string;
    position: string;
    description: string[];
};

type skill = {
    name: string
    description: string
}

export type HeroProps = {
    summary: string;
    Expertise: string;
    skills: skill[]
}