import roomDeluxe from "@/assets/room-deluxe.png";
import roomValley from "@/assets/room-valley.png";
import suiteLounge from "@/assets/suite-lounge.png";
import loungeGlass from "@/assets/lounge-glass.png";

export type Room = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  view: string;
  facilities: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "deluxe-mountain-room",
    name: "Deluxe Mountain Room",
    image: roomDeluxe,
    tagline: "King bed · Ensuite glass bath",
    description:
      "Our signature room, warmed by pine-framed art and soft cove lighting. A king bed with crisp linen and Himachali block-print runners sits beside a glass-walled ensuite bathroom — the coziest corner of the house after a cold Kufri evening.",
    view: "Filtered deodar and hill views with soft morning light",
    facilities: [
      "King bed with layered winter bedding",
      "Ensuite bathroom with hot water 24x7",
      "Free high-speed Wi-Fi",
      "Room service & daily housekeeping",
      "Reading nook chair",
      "Wheelchair-friendly access",
    ],
  },
  {
    slug: "valley-view-room",
    name: "Valley View Room",
    image: roomValley,
    tagline: "Panoramic window · Day bed",
    description:
      "A wide picture window frames layer after layer of blue Himalayan ridgeline. Wake to sunrise over the valley, then move to the built-in day bed with chai as the mist rolls in below the tree line.",
    view: "Direct panoramic valley and Himalayan ridge views",
    facilities: [
      "King bed + window day bed",
      "Full-height valley-facing window",
      "Private balcony access",
      "Free Wi-Fi & room service",
      "Heating and extra blankets",
      "Daily housekeeping",
    ],
  },
  {
    slug: "family-suite",
    name: "Family Suite with Swing Lounge",
    image: suiteLounge,
    tagline: "Sleeps 4 · Private lounge",
    description:
      "A spacious two-part suite with its own rope swing, low seating and a glass-top table — made for families and small groups who want their own gathering space at the end of a Kufri day.",
    view: "Wooded hillside outlook with quiet mountain light",
    facilities: [
      "Sleeps up to 4 guests",
      "Private lounge with rope swing",
      "Extra mattress on request",
      "Free Wi-Fi & in-room dining",
      "Wooden wardrobe and mirror",
      "Daily housekeeping",
    ],
  },
  {
    slug: "glass-house-lounge-room",
    name: "Glass House Lounge Room",
    image: loungeGlass,
    tagline: "Sunroom seating · Best sunsets",
    description:
      "Floor-to-ceiling glass on two sides turns this room into a mountain sunroom. High stools face the ridge, a swing bed hangs beside the window, and the sky changes colour all evening.",
    view: "180° glass-front Himalayan sunset views",
    facilities: [
      "Glass-front lounge seating",
      "Swing bed and coffee table",
      "Café-style high table for two",
      "Free Wi-Fi & room service",
      "Hot water 24x7",
      "Daily housekeeping",
    ],
  },
];
