const SideBarOptions = [
    {
        isActive: true,
        navIconClass: "nav-icon fas fa-tachometer-alt active",
        optionValue: "Starter Page",
        firstSubMenu: "Active Page",
        secondSubMenu: "Inactive Page",
    },
    {
        isActive: false,
        navIconClass: "nav-icon fas fa-tachometer-alt",
        optionValue: "React js",
        firstSubMenu: "Fundamentals",
        secondSubMenu: "Intermediate",
    },
    {
        isActive: false,
        optionValue: "Netizens",
        firstSubMenu: "Tech Lead",
        secondSubMenu: "Interns",
        navIconClass: "nav-icon fas fa-th"
    },
    {
        isActive: false,
        optionValue: "Software Developer",
        firstSubMenu: "Frontend Developer",
        secondSubMenu: "Backend Developer",
        navIconClass: "nav-icon fas fa-th"
    }
]

export default SideBarOptions;

// navIconClass,optionValue,firstSubMenu,secondSubMenu