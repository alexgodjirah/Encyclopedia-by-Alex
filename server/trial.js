// const data = {
//     english_name: "Velkhana",
//     japan_name: "イヴェルカーナ (Iverukāna)",
//     title: [
//         "Ice Dragon",
//         "The Iceborne Wyvern",
//         "Ice Dragon that Freezes All",
//         "Lortd of the Tundra",
//         "Lord of Ice",
//     ],
//     type: "Elder Dragon",
//     generation: 5,
//     Form: "Base",
//     threat_level: 9,
//     elements: ["Ice"],
//     ailments: ["Iceblight"],
//     weakness: ["Thunder", "Dragon", "Fire"],
//     habitat: [
//         "Ancient Forest",
//         "Wildspare Waste",
//         "Coral Highlands",
//         "Rotten Vale",
//         "Elder's Recess",
//         "Hoarfrost Reach",
//         "Guiding Lands",
//         "Shrine Ruins",
//         "Frost Islands",
//         "Flooded Forest",
//         "Lava Caverns",
//         "Citadel",
//         "Jungle",
//     ],
//     size: [2336.45, 3245.06],
//     related_monster: ["none"],
//     physiology:
//         "Velkahana is a traditional dragon with the slim, upwright body structure of Elder Dragon like Kushala Daora. It's scales and shell are unique crystaline blue. Its head has a tiara-like crown of small horns. It summons ice to cover its wings, limbs, and tail. Its thin, lance-like tail is hightly flexible and can jab at enemies.",
//     behavior_and_abilities:
//         "Velkhana freely controls ice and cold wind, and can cover wide areas in ice in an instant. It breathes beams of supercooled fluid that can instantly freeze monsters. When covered in its ice armor, ice crystals form nearby, and when struck by Velkhana's ice breath they form large spires that soon explode. Small ice platforms sometimes form, which can be jumped off of. Occasionally, spikes of ice rain from clouds close to the grund when it enraged.",
//     description:
//         "An Elder Dragon said to freeze all in its path. According to legend, it can control the cold, and use its freezing breath to conjure massive spires of ice out of nowhere.",
// };

// const classes = ["Herbivore", "Fish", "Wingdrake", "Neopteron", "Temnoceran"];

// console.log(classes.indexOf("Fish"));

// const class_records = classes.map((e) => {
//     return {
//         id: classes.indexOf(e) + 1,
//         class: e,
//     };
// });
// console.log(class_records);

let elder_dragon =
    "Fatalis,Crimsom Fatalis,Kirin,Lao Shan Lung,Ashen Lao Shan Lung,Chameleos,Kushala Daora,Lunastra,Teostra,White Fatalis,Alatreon,Amatsu,Caedeus,Goldbeard Caedeus,Dire Miralis,Jhen Mohran,Hallowed Jhen Mohran,Dah'ren Mohran,Dalamadur,Shah Dalamadur,Gogmazios,Nakarkos,Oroshi Kirin,Shagaru Magala,Crimsom Glow Valstrax,Gaismagorm,Kulve Taroth,Malzeno,Namielle,Nergigante,Runiner Nergigante,Shara Ishvalda,Thunder Serpent Narwa,Narwa the Allmother,Vaal Hazak,Blackveil Vaal Hazak,Velkhana,Wind Serpent Ibushi,Xeno'jiiva,Safi'jiiva";

const elder_dragons = elder_dragon.split(",");
console.log(typeof elder_dragons);
console.log(elder_dragons[1]);
elder_dragon = elder_dragons.sort();
console.log(elder_dragon.length);

const first_class = [
    "Alatreon",
    "Fatalis",
    "Dire Miralis",
    "Safi'jiiva",
    "Crimson Fatalis",
    "White Fatalis",
];

const high_level = [
    "Amatsu",
    "Kulve",
    "Shara Ishvalda",
    "Gaismagorm",
    "Lao Shan Lung",
    "Ashen Lao Shan Lung",
    "Zorah Magdaros",
    "Ruiner Nergigante",
    "Nakarkos",
    "Crimsom Glow Valstrax",
    "Narwa The Allmother",
];

const mid_level = [
    "Caedeus",
    "Jhen Mohran",
    "Lunastra",
    "Teostra",
    "Kushala Daora",
    "Chameleos",
    "Malzeno",
    "Namielle",
    "Velkhana",
    "Nergigante",
    "Ceadeus",
    "Goldbeard Ceadeus",
    "Dalamadur",
    "Shah Dalamadur",
    "Shagaru Magala",
    "Valstrax",
    "Gogmazios",
    "Ibushi",
    "Narwa",
    "Blackveil Vaal Hazak",
    "Xeno'jiiva",
];

const low_level = ["Kirin", "Oroshi Kirin"];

const total_length =
    first_class.length +
    high_level.length +
    mid_level.length +
    low_level.length;

console.log(total_length);
