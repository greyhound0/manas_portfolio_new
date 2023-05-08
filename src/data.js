import UDMS from "./assets/portfolioImages/UDMS.jpg";
import typing_game from "./assets/portfolioImages/typing_game.jpg";
import stepper_form from "./assets/portfolioImages/stepper-form.jpg";
import Todo from "./assets/portfolioImages/todo.jpg";
import chat_app from "./assets/portfolioImages/chat_app.jpg";
import weather_app from "./assets/portfolioImages/weather_app.jpg";

// in progress projects

// import Servista from './assets/portfolioImages/servista.PNG'
// import landingPage from './assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "chat-app",
    img: chat_app,
    name: "Chat App",
    stack: ["< React.js />", "< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://polite-buttercream-a2c5df.netlify.app/",
    source: "https://github.com/greyhound0/chat-app",
    description:
      "A user would get a username and a password and can create a chat room to talk to another person in real-time.",
  },
  {
    id: "UDMS",
    img: UDMS,
    name: "USER DATA MANAGEMENT SYSTEM",
    stack: ["< HTML5/CSS3 />", "< Javascript />", "< React.js />"],
    live: "https://meek-dolphin-da1a60.netlify.app/",
    source: "https://github.com/greyhound0/UserDataApp",
    description:
      "Cross column drag and drop functionality to manage user states between Active, Inactive and Removed similar to Jira Boards Library used is react-beautiful-dnd",
  },

  {
    id: "Typing Game",
    img: typing_game,
    name: "Typing Game",
    stack: ["< React.js />", "< HTML5/CSS3 />", "< Javascript />"],
    live: "https://neon-pothos-705d20.netlify.app/",
    source: "https://github.com/greyhound0/typing-game",
    description:
      "This projects displays 20 characters(one at a time) and lets user enter them and by the end of correctly entering 20 characters the user gets to know the time taken by him/her to complete the game.",
  },
  {
    id: "todo",
    img: Todo,
    name: "Cloud Storage with AWS Simple Storage Service",
    stack: ["< React.js />", "< HTML5/CSS3 />", "< Javascript />"],
    live: "https://sweet-narwhal-0fa2af.netlify.app/",
    source: "https://github.com/greyhound0/to-do",
    description:
      "Add, edit and clear items to the list of tasks he/she needs to complete that is generated in an ordered manner dynamically.",
  },

  {
    id: "stepper-form",
    img: stepper_form,
    name: "Stepper Form",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://effortless-donut-bf0454.netlify.app/",
    source: "https://github.com/greyhound0/stepper-form",
    description:
      "A user would get enter their details on 3 steps that would be stored in local storage and displayed in a tabular manner to the user at the end",
  },

  {
    id: "weather-app",
    img: weather_app,
    name: "Weather App",
    stack: ["< React.js />", "< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://harmonious-scone-8eaa1c.netlify.app/",
    source: "https://github.com/greyhound0/weather_app",
    description:
      "A user would get to enter the name of the place that user wants to know the weather of and would getin return the current temperature and weather condition.",
  },
];

export default { ProjectsData };
