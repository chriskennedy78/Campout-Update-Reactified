import thelmaLeft from "../assets/img/Thelma.left.jpg";
import louiseRight from "../assets/img/Louise.right.jpg";
import AmeliaImg from "../assets/img/Amelia-cabin.png";
import CalamityImg from "../assets//img/Calamity-cabin.png";
import SundanceImg from "../assets//img/Sundance.JPG";

export const CABINS = [
    {
        id: 0,
        name: "Thelma",
        image: thelmaLeft,
        featured: false,
        sleepingArrangements:
            "One set of full-size bunk beds, two sets of twin-size bunk beds",
        accommodations: [
            {
                bedId: 0,
                size: "full-size bed (top bunk)",
                isBooked: false,
            },
            {
                bedId: 1,
                size: "full-size bed (bottom bunk)",
                isBooked: false,
            },

            {
                bedId: 2,
                size: "twin-size bed (top bunk)",
                isBooked: false,
            },

            {
                bedId: 3,
                size: "twin-size bed (bottom bunk)",
                isBooked: false,
            },

            {
                bedId: 4,
                size: "twin-size bed (top bunk)",
                isBooked: false,
            },

            {
                bedId: 5,
                size: "twin-size bed (bottom bunk)",
                isBooked: false,
            },
        ],

        description:
            "Double cabin with covered deck between. Each cabin has one double bed bunk, two twin bunk beds, an overhead light, hammock, and grill. Great for large groups.",
    },

    {
        id: 1,
        name: "Louise",
        image: louiseRight,
        featured: true,
        sleepingArrangements:
            "One set of full-size bunk beds, two sets of twin-size bunk beds",
        accommodations: [
            {
                bedId: 0,
                size: "full-size bed (top bunk)",
                isBooked: false,
            },
            {
                bedId: 1,
                size: "full-size bed (bottom bunk)",
                isBooked: false,
            },

            {
                bedId: 2,
                size: "twin-size bed (top bunk)",
                isBooked: false,
            },

            {
                bedId: 3,
                size: "twin-size bed (bottom bunk)",
                isBooked: false,
            },

            {
                bedId: 4,
                size: "twin-size bed (top bunk)",
                isBooked: false,
            },

            {
                bedId: 5,
                size: "twin-size bed (bottom bunk)",
                isBooked: false,
            },
        ],

        description:
            "Double cabin with covered deck between. Each cabin has one double bed bunk, two twin bunk beds, an overhead light, hammock, and grill. Great for large groups.",
    },

    {
        id: 2,
        name: "Sundance",
        image: SundanceImg,
        featured: false,
        sleepingArrangements: "Two full-size beds, five twin-size beds",
        accommodations: [
            {
                bedId: 0,
                size: "full-size bed",
                isBooked: false,
            },

            {
                bedId: 1,
                size: "full-size bed",
                isBooked: false,
            },

            {
                bedId: 2,
                size: "twin-size bed",
                isBooked: false,
            },

            {
                bedId: 3,
                size: "twin-size bed",
                isBooked: false,
            },

            {
                bedId: 4,
                size: "twin-size bed",
                isBooked: false,
            },

            {
                bedId: 5,
                size: "twin-size bed",
                isBooked: false,
            },

            {
                bedId: 6,
                size: "twin-size bed",
                isBooked: false,
            },
        ],

        description:
            "Sundance has been recently renovated to be a pet friendly cabin with a fenced area beside the cabin Pets are permitted inside the Sundance. Sundance has two full size beds, five twin beds, a table and chairs, covered porch, hammock, and charcoal grill. It is located in a quiet, secluded, shady, wooded area of the campground.",
    },

    {
        id: 3,
        name: "Amelia",
        image: AmeliaImg,
        featured: false,
        sleepingArrangements:
            "Two full-size beds, one set of twin-size bunk beds",
        accommodations: [
            {
                bedId: 0,
                size: "full-size bed",
                isBooked: false,
            },

            {
                bedId: 1,
                size: "full-size bed",
                isBooked: false,
            },

            {
                bedId: 2,
                size: "twin-size bed (top bunk)",
                isBooked: false,
            },

            {
                bedId: 3,
                size: "twin-size bed (bottom bunk)",
                isBooked: false,
            },
        ],

        description:
            'The most "home-like" cabin, lights, deck, grill, hammock, full size bed and twin size bunk bed downstairs, full size bed in upstairs loft, couch, and porta potty close to the cabin.',
    },

    {
        id: 4,
        name: "Calamity",
        image: CalamityImg,
        featured: false,
        sleepingArrangements: "Three full-size beds",
        accommodations: [
            {
                bedId: 0,
                size: "full-size bed",
                isBooked: false,
            },

            {
                bedId: 1,
                size: "full-size bed",
                isBooked: false,
            },

            {
                bedId: 2,
                size: "full-size bed",
                isBooked: false,
            },
        ],

        description:
            "Room for the entire family! Three full size beds, overhead light, loft, exterior deck with chairs hammock, and grill.",
    },
];
