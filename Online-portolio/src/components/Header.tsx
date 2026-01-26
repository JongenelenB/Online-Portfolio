export default function Header() {

    const socials = [
        {
            name: "Github",
            link: "https://github.com/repos",
        },
        {
            name: "Mail",
            link: "mailto:bjorn.jongenelen11@gmail.com",
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/bjorn-jongenelen-02a4961b2/",
        }
    ]

    return (
        <div className="flex flex-row">
            <div className="mt-15">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
                        Hello There </span> I'm Bjorn Jongenelen
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    A enthousastic front end web developer from Belgium, Antwerp with a passion for coding
                </p>
                <br />
                <button className="relative m-5 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent dark:bg-gray-900">
                        View My Projects
                    </span>
                </button>

                <button className="relative m-5 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent dark:bg-gray-900">
                        Let's Connect
                    </span>
                </button>

                <br />
                <div className=" flex justify-center items-center gap-6 pt-10">
                    {
                        socials.map(social => (
                            <a target="_blank" rel="noopener noreferrer" href={`${social.link}`}>
                                <img
                                    className="w-10 h-10"
                                    key={social.name}
                                    src={`./src/assets/icons/${social.name}.svg`}
                                    alt={`${social.name} icon`} />
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="rounded-full p-1 bg-gradient-to-r from-red-600 to-orange-400 w-95 h-105 flex items-center justify-center">
                <img
                    className="rounded-full w-93 h-103 border-4 border-white"
                    src="./src/assets/images/profile.png"
                    alt="Profile"
                />
            </div>
        </div>


    );
}
