module.exports = {
  domain: process.env.MYDOMAIN || "http://localhost:3000",
  coloronlydark: false,
  onlygray: false,
  name: "M. Husni Nur Fadillah",
  image: "/img/husni-formal-removebg-preview.png",
  profile: "/img/husni-formal-removebg-preview.png",
  thumbnail: "/img/thumbnail.png",
  blogthumbnail: "/img/Wavy_Bus-15_Single-06.jpg",
  role: "Backend Engineer Wannabe",
  description:
    "A mathematics graduate who has a passion for the field of software engineering, especially backend development.",
  resume:
    "https://drive.google.com/file/d/1stN-_e6mfFjBPUL88ggBzfYQuyF_0rcT/view?usp=share_link",
  socials: [
    { href: "https://github.com/husfuu", label: "Github" },
    { href: "https://twitter.com/tanakafuu", label: "Twitter" },
    {
      href: "https://www.linkedin.com/in/muhammad-husni-nur-fadillah/",
      label: "Linkedin",
    },
    { href: "https://polywork.com/husfuu", label: "Polywork" },
  ],
  navlinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "https://medium.com/@husfuu", label: "Blog" },
    { href: "/projects", label: "Projects" },
  ],
  about: [
    "Hello, my name is Husni. I have a degree in mathematics and am passionate about software engineering, especially backend development.",
    "I have experience developing REST APIs with NodeJS and Golang. Additionally, I develop the front end using ReactJS and Tailwind CSS.",
    "I have experience studying at several institutions, such as Binar Academy through the Kampus Merdeka program, Digitalent Scholarship from Kominfo, and Data Science Bootcamp from the Data Science Indonesia Community.",
    "I've built and contributed to several projects, although they still need to be developed.",
  ],
  experiences: [
    {
      startTime: "September 2022",
      endTime: "Oktober 2022",
      role: "Trainee Scalable Web Services with Golang",
      company: "Digitalent Scholarship Kominfo",
      description: "Build an Instagram REST API clone with Golang.",
    },
    {
      startTime: "August 2021",
      endTime: "February 2022",
      role: "Studi Independen Fullstack Web Development",
      company: "Binar Academy",
      description:
        "Collaborate to build a REST API for the bener.in Project, a website that provides online automotive services.",
    },
    {
      startTime: "December 2022",
      endTime: "March 2022",
      role: "Data Science Bootcamp",
      company: "Data Science Indonesia",
      description:
        "Analyze and create dashboards for natural disaster data from Badan Nasional Penanggulangan Bencana and Peta Bencana.",
    },
  ],
  educations: [
    {
      startTime: "August 2022",
      endTime: "Now",
      role: "Java Backend Engineer",
      company: "Synrgy Academy",
      description: "Synrgy Academy Scholarship by BCA x Binar Academy Batch 5",
    },
    {
      startTime: "August 2018",
      endTime: "August 2022",
      role: "Mathematics",
      company: "Universitas Lambung Mangkurat",
      description: "Take machine learning as a field of study",
    },
  ],
  projects: [
    {
      title: "Topup Gimang - Server",
      image: "/img/no_image_project.jpg",
      url: "https://github.com/husfuu/topup-gimang-server",
      description: "REST API for Toup Game service",
      stacks: ["nodejs", "express", "postgres"],
    },
    {
      title: "Topup Gimang - Dashboard",
      image: "/img/topup-gimang-dashboard.png",
      url: "https://topup-gimang-server.herokuapp.com/",
      description: "Admin dashboard for topup gimang project",
      stacks: ["javascript", "express"],
    },
    {
      title: "bener.in",
      image: "/img/benerin_project.png",
      url: "https://benerin-app.herokuapp.com/",
      description: "Web app that provides online automotive services.",
      stacks: ["nodejs", "express", "postgres"],
    },
    {
      title: "GoGram - REST API",
      image: "/img/no_image_project.jpg",
      url: "https://github.com/husfuu/go-gram",
      description: "A Simple RESTful API Instagram with Go",
      stacks: ["golang", "postgres"],
    },
    {
      title: "BookShelf - REST API",
      image: "/img/no_image_project.jpg",
      url: "https://github.com/husfuu/bookshelf-api-dicoding",
      description: "REST API for bookshelf",
      stacks: ["nodejs", "javascript"],
    },
    // {
    //   title: "Go-biodata-CLI - CLI APP",
    //   image: "/img/no_image_project.jpg",
    //   url: "https://github.com/husfuu/go-biodata-cli",
    //   description: "Technical test result.",
    //   stacks: ["golang"],
    // },
  ],
  colors: {
    primary: {
      50: "#F0F9FF",
      100: "#DBF1FF",
      200: "#B8E2FF",
      300: "#8AD0FF",
      400: "#52BAFF",
      500: "#0099FF",
      600: "#008AE6",
      700: "#007ACC",
      800: "#0065A8",
      900: "#00497A",
    },
    success: {
      50: "#EEFCF6",
      100: "#DCF9EE",
      200: "#B0F2D8",
      300: "#80EAC0",
      400: "#3FDF9F",
      500: "#22CC88",
      600: "#1FB87A",
      700: "#1BA26C",
      800: "#17875A",
      900: "#106040",
    },
    danger: {
      50: "#FFF5F8",
      100: "#FFE5EE",
      200: "#FFCCDD",
      300: "#FFA8C5",
      400: "#FF7AA7",
      500: "#FF0055",
      600: "#EB004E",
      700: "#CC0044",
      800: "#AD003A",
      900: "#750027",
    },
    warning: {
      50: "#FFF8EB",
      100: "#FFF3DB",
      200: "#FFE4AD",
      300: "#FFD480",
      400: "#FFC247",
      500: "#FFAA00",
      600: "#E69900",
      700: "#CC8800",
      800: "#A87000",
      900: "#7A5200",
    },
  },
};
