export const TICKETS = [
    {
        id: 0,
        type: "General Admission",
        price: "based on time frame of attendance and any additional requested amenities",
        tagline: "Day or Full Weekend Options",
        description:
            "General Admission tickets are for festival attendees. Options to purchase day tickets or full weekend tickets. Day ticket holders must leave by midnight. Weekend ticket prices include camping. Prices at gate are higher.",
        ticketDuration: [
            {
                id: 0,
                duration: "Full Weekend (Friday-Monday)",
                price: 130.0,
            },
            {
                id: 1,
                duration:
                    "Add on Thursday + $15.00 (added to full weekend ticket price)",
                price: 15.0,
            },
            {
                id: 2,
                duration: "Friday Only (must depart by midnight)",
                price: 55.0,
            },
            {
                id: 3,
                duration: "Saturday Only (must depart by midnight)",
                price: 80.0,
            },
            {
                id: 4,
                duration: "Sunday Only (must depart by midnight)",
                price: 60.0,
            },
        ],
    },

    {
        id: 1,
        type: "Worker",
        price: "Set Price for full weekend plus any additional requested amenities",
        tagline: "Join the Team!",
        description:
            "Festival workers are the mainstay of our festival, consider joining our team as a festival worker! In exchange for reduced festival admission, Worker Tickets are for members who work 4 to 6 hours per day. Meals, camping, and a festival T-shirt included!",
        ticketDuration: [
            {
                id: 0,
                duration: "Full Weekend (Friday-Monday)",
                price: 50.0,
            },
        ],
    },

    {
        id: 2,
        type: "Vendor",
        price: "set price for full-weekend plus any additional requested amenities",
        tagline: "Sell your Merch!",
        description:
            "Vendors are required to staff their vendor space at a minimum on Friday from noon to 6pm, and Saturday from 10 am to 7 pm and Sunday from 10 am to 6 pm. Vendor tickets include festival admission and tent camping.",
        ticketDuration: [
            {
                id: 0,
                duration: "Full Weekend (Friday-Monday)",
                price: 155.0,
            },
        ],
    },
];
