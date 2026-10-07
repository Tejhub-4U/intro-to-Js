const Projects = [
    {
        id: 1,

        title: "Portfolio Website",
        description: "A responsive personal portfolio website.",
        category: "Web",
        technologies: ["HTML", "CSS"],
        featured: true
    },
    {
        id: 2,

        title: "Calculator",
        description: "A Simple calcullator.",
        category: "app",
        technologies: ["Python"],
        featured: true

    },

    {
        id: 3,

        title: "pattern generator",
        description: "A Simple patttern generator.",
        category: "app",
        technologies: ["Python"],
        featured: true

    },

    {
        id: 4,

        title: "Shopping Cart",
        description: "A Simple Shopping Cart.",
        category: "app",
        technologies: ["Python"],
        featured: true,
    }



]
Projects.forEach((project)=> {
    console.log(`${project.title}-${project.description} [${project.category}]`)
})

const formattedProjects = Projects.map((project) => {
    return `${project.title}-${project.description} [${project.category}]`
});
console.log(formattedProjects);