import { Fragment } from "react"

type TimelineEvent = {
    title: string
    date: string
    direction: "left" | "right"
}

export default function Experience() {
    const events: TimelineEvent[] = [
        { title: "Automated Patch Flow", date: "2024", direction: "left" },
        { title: "IAM & UAM Specialist", date: "2023", direction: "right" },
        { title: "Operations Engineer", date: "2022", direction: "left" },
        { title: "IdentIT – Stage", date: "2021", direction: "right" },
        { title: "Opleiding", date: "2020", direction: "left" },
    ]

    return (
        <div className="w-full flex justify-center">
            <TimeLine events={events} />
        </div>
    )
}

const TimeLine = ({ events }: { events: TimelineEvent[] }) => {
    return (
        <div className="flex flex-col gap-y-4 w-full max-w-4xl">
            <Circle />

            {events.map((event, index) => (
                <Fragment key={index}>
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-4">
                        {event.direction === "left" ? (
                            <EventCard {...event} />
                        ) : (
                            <div />
                        )}

                        <Pillar />

                        {event.direction === "right" ? (
                            <EventCard {...event} />
                        ) : (
                            <div />
                        )}
                    </div>

                    {index < events.length - 1 && <Circle />}
                </Fragment>
            ))}
        </div>
    )
}

const Circle = () => (
    <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto" />
)

const Pillar = () => (
    <div className="w-2 h-10 bg-blue-500 mx-auto rounded-full" />
)

const EventCard = ({ title, date }: TimelineEvent) => (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-sm">
        <div className="font-bold text-blue-700 text-lg">{title}</div>
        <div className="text-sm text-gray-600">{date}</div>
    </div>
)
