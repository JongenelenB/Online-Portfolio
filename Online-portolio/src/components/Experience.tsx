import { useEffect, useRef, useState } from "react"


type TimelineEvent = {
    title: string
    date: string
    direction: "left" | "right"
    content?: string
}

// --------------------
// Main Experience Component
// --------------------
export default function Experience() {
    // Array of timeline events
    const events: TimelineEvent[] = [
        {
            title: "Automated Patch Flow",
            date: "2024",
            direction: "left",
            content:
                "Start project, implement automated patch flow in the environment...",
        },
        {
            title: "IAM & UAM Specialist",
            date: "2023",
            direction: "right",
            content:
                "Worked on identity & access management, handling UAM tasks, etc...",
        },
        {
            title: "Operations Engineer",
            date: "2022",
            direction: "left",
            content: "Managed daily operations and monitoring of systems...",
        },
        {
            title: "IdentIT – Stage",
            date: "2021",
            direction: "right",
            content: "Internship work, assisting with IT support and projects...",
        },
        {
            title: "Opleiding",
            date: "2020",
            direction: "left",
            content: "Completed studies in IT/Engineering...",
        },
    ]

return (
    // Verander 'flex' naar 'flex-col' en 'items-center' om alles verticaal te stapelen
    <div className="w-full flex flex-col items-center overflow-x-hidden pb-10">
        
        {/* Titel Container: Deze heeft dezelfde max-width als je tijdlijn */}
        <div className="w-full max-w-6xl px-12 mt-10">
            <h2 className="text-4xl md:text-5xl bg-bla font-bold"> My 
               <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent"> Experience</span>
            </h2>
            {/* Subtiel lijntje onder de titel om het af te maken (optioneel) */}
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-orange-400 rounded-full mt-2" />
        </div>

        {/* Tijdlijn Container: Deze blijft precies zoals hij was */}
        <div className="w-full max-w-6xl h-[650px] overflow-y-auto mt-8 px-12 scrollbar-hide">
            <Timeline events={events} />
        </div>
    </div>
)
}

// --------------------
// Timeline component
// Loops through all events
// --------------------
const Timeline = ({ events }: { events: TimelineEvent[] }) => (
    <div className="flex flex-col gap-y-10 w-full">
        {events.map((event, index) => (
            <TimelineItem
                key={index}
                event={event}
                isLast={index === events.length - 1} // Check if this is the last item
            />
        ))}
    </div>
)

// --------------------
// Timeline Item component
// Handles fade + slide animation, circle + pillar
// --------------------
const TimelineItem = ({
    event,
    isLast,
}: {
    event: TimelineEvent
    isLast: boolean
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [active, setActive] = useState(false) // Active state triggers animation

    // IntersectionObserver triggers when the element comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setActive(entry.isIntersecting), // Set active true if in view
            { threshold: 0.4 } // 40% of item must be visible
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className="relative">
            {/* Grid layout: Left column | Circle/Pillar | Right column */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-10">
                {event.direction === "left" ? (
                    <EventCard event={event} active={active} side="left" />
                ) : (
                    <div /> // Empty placeholder if card is on the right
                )}

                {/* Center column with Circle + Pillar */}
                <div className="flex flex-col items-center mt-6">
                    <Circle active={active} />
                    {!isLast && <Pillar active={active} />}
                </div>

                {event.direction === "right" ? (
                    <EventCard event={event} active={active} side="right" />
                ) : (
                    <div /> // Empty placeholder if card is on the left
                )}
            </div>
        </div>
    )
}

// --------------------
// Circle component
// The dot in the middle of the timeline
// --------------------
const Circle = ({ active }: { active: boolean }) => (
    <div
        className={`
      w-5 h-5 rounded-full transition-all duration-700
      ${active
                ? "bg-gradient-to-r from-red-600 to-orange-400 scale-125" // Active: gradient + bigger
                : "bg-gray-300"} // Inactive: gray
    `}
    />
)

// --------------------
// Pillar component
// Vertical line between circles
// --------------------
const Pillar = ({ active }: { active: boolean }) => (
    <div
        className={`
      w-[4px] h-20 transition-all duration-700
      ${active
                ? "bg-gradient-to-b from-red-600 to-orange-400" // Active: gradient
                : "bg-gray-300"} // Inactive: gray
    `}
    />
)

// --------------------
// EventCard component
// Handles fade + slide + scale animation
// --------------------
const EventCard = ({
    event,
    active,
    side,
}: {
    event: TimelineEvent
    active: boolean
    side: "left" | "right"
}) => (
    <div
        className={`
      max-w-sm p-5 rounded-xl transition-all duration-700 
      ${active
                ? "opacity-100 translate-x-0 scale-105 shadow-xl bg-white" // Active: fade in + scale up
                : side === "left"
                    ? "opacity-0 -translate-x-10" // Left: slide from left
                    : "opacity-0 translate-x-10"} // Right: slide from right
    `}
    >
        <div className="text-lg font-bold text-red-600">{event.title}</div>
        <div className="text-sm text-gray-600">{event.date}</div>
        {event.content && (
            <div className="mt-2 text-gray-700">{event.content}</div> // Optional description
        )}
    </div>
)
