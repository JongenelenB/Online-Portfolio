export default function Header() {
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
            <p>Driven to build user-friendly and efficient web applications that truly add value. I enjoy turning ideas into smart, working solutions.</p>
        </div>
    );
}
