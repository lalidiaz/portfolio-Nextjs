import GitHubIcon from "@material-ui/icons/Github";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const contactsData = [
  {
    id: 1,
    title: "lauradiaz1586@gmail.com",
    link: "mailto:lauradiaz1586@gmail.com",
    icon: <MailOutlineIcon />,
  },
  {
    id: 2,
    title: "Github",
    link: "https://github.com/lalidiaz",
    icon: <GitHubIcon />,
  },
  {
    id: 3,
    title: "CV",
    link: "/LauraDiazCV.pdf",
    icon: <DescriptionIcon />,
  },
  {
    id: 4,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/laura-diaz-a661a617a/",
    icon: <LinkedInIcon />,
  },
  {
    id: 5,
    title: "@lalilunar",
    link: "https://twitter.com/lalilunar",
    icon: <TwitterIcon />,
  },
];

export default contactsData;
