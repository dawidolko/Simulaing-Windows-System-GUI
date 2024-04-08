import ResumePDF from "./cv_ver1.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";
import Freelance from ".././../assets/images/data/Freelance.png";

const user = {
  firstName: "Dawid",
  lastName: "Olko",
  userImage: default_avatar,
  resume: ResumePDF,
  email: "poczta@dawidolko.pl",
  linkedIn: "in/dawidolko",
  gitHub: "dawidolko",
  twitter: "dawidolko",
  aboutMe: {
    intro: " I'm a Fronted Developmener Engineer from Poland.",
    description:
      "I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development (React / Angular) and Software Development (Java / Python).",
    outro:
      "When I'm not developing any stuff , you will find me re-watching an episode of The Office or exploring a new place.",
  },
  experiences: [
    {
      organization: "HSW",
      organizationPicture: KloudGin,
      isCurrent: true,
      startDate: "March 2021",
      endDate: null,
      positions: [
        {
          positionName: "Digital Market Specialist",
          startDate: "March 2021",
          endDate: " Aprial 2021",
          isPresent: true,
          description: "Conducting thorough reviews and implementing updates.",
        },
      ],
    },
    {
      organization: "PGE",
      startDate: "July 2019",
      endDate: "August 2019",
      organizationPicture: Freelance,
      isCurrent: false,
      positions: [
        {
          positionName: "Product Design Coordinator",
          startDate: "July 2019",
          endDate: "August 2019",
          isPresent: false,
          description:
            "Collaborating closely with the broader team of developers.",
        },
      ],
    },
  ],
  education: [
    {
      instituteName: "University of Rzeszów",
      degree: "Engineer in computer science",
      year: "2022",
      id: 1,
    },
    {
      instituteName: "Electrical engineering",
      degree: "Electrical technician",
      year: "2018",
      id: 2,
    },
  ],
  skills: [
    {
      name: "Language Proficiency",
      values: ["Python", "Java", "JavaScript", "ReactJS", "HTML", "CSS"],
    },
    {
      name: "Tools Proficiency",
      values: ["Git", "PyCharm", "Eclipse", "IntelliJ IDEA"],
    },
    {
      name: "Database Proficiency",
      values: ["MySQL", "MongoDB"],
    },
  ],
};

export default user;
