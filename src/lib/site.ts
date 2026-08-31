export const SITE = {
  name: "Zephyr House CASA Stay",
  address: "Main Market, Kufri, Shimla, Himachal Pradesh 171012",
  phone: "+91 90150 27711",
  phoneRaw: "+919015027711",
  waNumber: "919015027711",
  rating: "4.7",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Zephyr+House+CASA+Stay+Kufri+Shimla",
} as const;

const DEFAULT_MESSAGE =
  "Hello Zephyr House CASA Stay, I would like to enquire about room availability and booking.";

export function waLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`;
}
