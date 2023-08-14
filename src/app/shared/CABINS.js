import AmeliaImg from "../assets/img/Amelia-cabin.png";
import CalamityImg from "../assets//img/Calamity-cabin.png";
import SundanceImg from "../assets//img/Sundance.JPG";
import flagsImg from "../assets/img/flags.png";

export const CABINS = [
    {
        id: 0,
        name: "Amelia",
        image: AmeliaImg,
        featured: false,
        accommodations: "Two full beds, 1 set twin bunks",
        description:
            'The most "home-like" cabin, lights, deck, grill, hammock, full size bed and twin size bunk bed downstairs, full size bed in upstairs loft, couch, and porta potty close to the cabin.',
    },

    {
        id: 1,
        name: "Calamity",
        image: CalamityImg,
        featured: false,
        accommodations: "Three Full beds",
        description:
            "Room for the entire family! Three full size beds, overhead light, loft, exterior deck with chairs hammock, and grill.",
    },

    {
        id: 2,
        name: "Sundance",
        image: SundanceImg,
        featured: false,
        accommodations: "Two full beds, 5 twin beds",
        description:
            "Sundance has been recently renovated to be a pet friendly cabin with a fenced area beside the cabin Pets are permitted inside the Sundance. Sundance has two full size beds, five twin beds, a table and chairs, covered porch, hammock, and charcoal grill. It is located in a quiet, secluded, shady, wooded area of the campground.",
    },

    {
        id: 3,
        name: "Thelma and Louise",
        image: flagsImg,
        featured: true,
        accommodations:
            "One set full size bunks and two sets of twin bunks per cabin",
        description:
            "Double cabin with covered deck between. Each cabin has one double bed bunk, two twin bunk bed, an overhead light, hammock, and grill. Great for large groups.",
    },
];
