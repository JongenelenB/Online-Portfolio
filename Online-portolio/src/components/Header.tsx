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
        <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
                    Hello There </span> I'm Bjorn Jongenelen
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                A enthousastic front end web developer from Belgium, Antwer with a passion for coding
            </p>
            <br />
            <p className="max-w-xl mx-auto" >Driven to build user-friendly and efficient web applications that truly add value. I enjoy turning ideas into smart, working solutions.</p>

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
    );
}
