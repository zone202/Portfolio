//Import Images
import sweater from "./img/Sweater-pic1.jpg";
import gameon from "./img/gameon-pic1.jpg";
import photography from "./img/photography-pic1.jpg";
import sweater2 from "./img/Sweater-pic2.jpg";
import gameon2 from "./img/gameon-pic2.jpg";
import photography2 from "./img/photography-pic2.jpg";
import codecourses from "./img/codecourses-pic1.jpg";
import codecourses2 from "./img/codecourses-pic2.jpg";
export const ProjectState = () => {
  return [
    {
      title: "Sweater Shop",
      mainImg: sweater,
      secondaryImg: sweater2,
      url: "/projects/sweater-shop",
      awards: [
        {
          title: "Description",
          description:
            "“A fully functional eCommerce Sweater shop created on WordPress with its own Custom Theme. I wanted to showcase my skills with WordPress from scratch.”",
        },
        {
          title: "Tools Used",
          description:
            "HTML • CSS • PHP • Elementor • WooCommerce • MySQL • MyAdminPHP",
        },
        {
          title: "Project Link",
          description: (
            <form action="https://tonelook.com/" method="get" target="_blank">
              <button type="submit">Click me</button>
            </form>
          ),
        },
        {
          title: "Project Code",
          description: (
            <form
              action="https://github.com/zone202/SweaterShop"
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
      ],
    },
    {
      title: "GameOn",
      mainImg: gameon,
      url: "/projects/game-on",
      secondaryImg: gameon2,
      awards: [
        {
          title: "Description",
          description:
            "“A game search to view new and upcoming games based on the RAWG API. Developed to improve my knowledge of Axios, API requests and data manipulation in React.”",
        },
        {
          title: "Tools Used",
          description:
            "HTML • CSS • JavaScript • React • APIs • Font Awesome • Framer Motion • Styled Componenets • React Router • Axios",
        },
        {
          title: "Project Link",
          description: (
            <form
              action="https://zone202.github.io/GameOn/"
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
        {
          title: "Project Code",
          description: (
            <form
              action="https://github.com/zone202/GameOn"
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
      ],
    },
    {
      title: "Photography.",
      mainImg: photography,
      url: "/projects/photography",
      secondaryImg: photography2,
      awards: [
        {
          title: "Description",
          description:
            "“A Photography website I created for fun to understand GSAP and Barba better. Having the skills now to create better animations on a website.”",
        },
        {
          title: "Tools Used",
          description: "HTML • CSS • Font Awesome • GSAP • JavaScript • Barba",
        },
        {
          title: "Project Link",
          description: (
            <form
              action="https://zone202.github.io/Photography./"
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
        {
          title: "Project Code",
          description: (
            <form
              action="https://github.com/zone202/Photography."
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
      ],
    },
    {
      title: "Code Courses",
      mainImg: codecourses,
      secondaryImg: codecourses2,
      url: "/projects/codecourses",
      awards: [
        {
          title: "Description",
          description:
            "“A fully functional eCommerce Sweater shop created on WordPress with its own Custom Theme. I wanted to showcase my skills with WordPress from scratch.”",
        },
        {
          title: "Tools Used",
          description:
            "HTML • CSS • PHP • MySQL • MyAdminPHP • Bootstrap • ACF",
        },
        {
          title: "Project Link",
          description: (
            <form
              action="http://www.coursesforcode.com/"
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
        {
          title: "Project Code",
          description: (
            <form
              action="https://github.com/zone202/Code-Courses"
              method="get"
              target="_blank"
            >
              <button type="submit">Click me</button>
            </form>
          ),
        },
      ],
    },
  ];
};
