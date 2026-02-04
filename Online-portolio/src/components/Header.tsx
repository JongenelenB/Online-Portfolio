import AnimateBackground from "./AnimateBackground";

export default function Header() {
    const socials = [
        { name: "Github", link: "https://github.com/repos" },
        { name: "Mail", link: "mailto:Jongenelen.Bjorn@gmail.com" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/bjorn-jongenelen-02a4961b2/" },
    ];

    return (
        <><AnimateBackground />
            <section className="w-full min-h-screen flex items-center justify-center py-32">
                <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <div className="text-center lg:text-left">
                        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
                                Hello There
                            </span>{" "}
                            I'm Bjorn Jongenelen
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mt-4">
                            A enthousastic front end web developer from Belgium, Antwerp with a passion for coding
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <button className="relative inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400">
                                <span className="px-6 py-3 bg-white rounded-md font-medium hover:bg-transparent hover:text-white transition">
                                    View My Projects
                                </span>
                            </button>

                            <button className="relative inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400">
                                <span className="px-6 py-3 bg-white rounded-md font-medium hover:bg-transparent hover:text-white transition">
                                    Let's Connect
                                </span>
                            </button>
                        </div>

                        {/* Socials */}
                        <div className="mt-10 flex justify-center gap-8">
                            {socials.map((social) => (
                                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="w-10 h-10 hover:scale-110 transition"
                                        src={`./src/assets/icons/${social.name}.svg`}
                                        alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-center">
                        <div className="rounded-full p-1 bg-gradient-to-r from-red-600 to-orange-400">
                            <img
                                className="rounded-full w-80 h-80 object-cover border-4 border-white"
                                src="./src/assets/images/profile.png"
                                alt="Profile" />
                        </div>
                    </div>

                </div>
            </section></>

    );
}
