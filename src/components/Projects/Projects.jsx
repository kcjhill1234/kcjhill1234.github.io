import React from "react";
import { Segment } from "semantic-ui-react";
import ProjectList from "./Project-list/Project-list";

export default function Projects() {
  const projects = [
    {
      link: "https://the-best-workout-app-ever.herokuapp.com/",
      name: "Best Workout App Ever! Project",
      image: "BEST3.png",
      date: "August 12, 2020",
      description:
        "Group Project 3: React app that lists and creates workouts for the user",
    },
    {
      link: "https://home-kitchen-boss.herokuapp.com",
      name: "Home Kitchen Boss Project",
      image: "boss.png",
      date: "June 17, 2020",
      description:
        "Second Group Project: This app helps finds recipes with by type, culture, and food restrictions",
    },
    {
      link: "https://kcjhill1234.github.io/musicdiscovery/",
      name: "Music Discovery Project",
      image: "music discovery screen shot.png",
      date: "May 9, 2020",
      description: "First team project that search songs and lyrics for user.",
    },
    {
      link:
        "https://workoutrackerkh.herokuapp.com/?id=5f4d2b9bd5dc6600171d1127",
      name: "Workout Tracker",
      image: "fit 1.png",
      date: "August 25, 2020",
      description: "This app will track exercises and graph trends",
    },
    {
      link: "https://onlineofflinebudgettrackerkh.herokuapp.com/",
      name: "Transaction Tracker",
      image: "budget.png",
      date: "August 26, 2020",
      description: "Simple Budget/Transaction tracker",
    },
    {
      link: "https://burger-logger-kenny.herokuapp.com/",
      name: "Burger Logger",
      image: "burgerlogger.png",
      date: "August 19, 2020",
      description:
        "This is an express app for the user devour customer created burgers.",
    },
    {
      link: "https://kcjhill1234.github.io/PasswordGenerator/",
      name: "Password Generator",
      image: "password Gen screen shot.jpeg",
      date: "April 13, 2020",
      description:
        "This is a password generator that will create a random password.",
    },
    {
      link: "https://kcjhill1234.github.io/CodeQuiz/",
      name: "Code Game Quiz",
      image: "code game screen shot.png",
      date: "May 9, 2020",
      description: "This is a multiple code game that uses JavaScript.",
    },
  ];
  return (
    <Segment className="projects">
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </Segment>
  );
}
