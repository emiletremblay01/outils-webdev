import { Grid } from "./components/Grid";

import { GridItemProps } from "./types/types";

const unstlyedComponentsSites: GridItemProps[] = [
  {
    name: "React Aria",
    link: "https://react-spectrum.adobe.com/react-aria/index.html",
  },
  { name: "Downshift", link: "https://www.downshift-js.com/" },
  { name: "Base UI", link: "https://mui.com/base/getting-started/overview/" },
  { name: "Radix", link: "https://www.radix-ui.com/" },
  { name: "Headless UI", isFavorite: true, link: "https://headlessui.com/" },
  { name: "React UI", link: "https://baseweb.design/" },
];

const backendTestingSites: GridItemProps[] = [
  { name: "Reqbin", link: "https://reqbin.com/" },
  { name: "Reqres", link: "https://reqres.in/" },
  { name: "jsonplaceholder", link: "https://jsonplaceholder.typicode.com/" },
];

const animationSites: GridItemProps[] = [
  { name: "Lottie", link: "https://lottiefiles.com/" },
  { name: "framer motion", link: "https://www.framer.com/motion/" },
  { name: "animate.css", link: "https://animate.style/" },
];
const colorSites: GridItemProps[] = [
  { name: "Color Hunt", link: "https://colorhunt.co/" },
  {
    name: "Realtime Colors",
    link: "https://realtimecolors.com/?colors=000000-ffffff-4685ff-f2f2f2-ffb084",
  },
  { name: "ColorSpace", link: "https://mycolor.space/" },
];
const iconsSites: GridItemProps[] = [
  { name: "Heroicons", link: "https://heroicons.com/" },
  { name: "Remix Icon", link: "https://remixicon.com/" },
  { name: "fontawesome", link: "https://fontawesome.com/" },
];
const miscSites: GridItemProps[] = [
  { name: "fontjoy", link: "https://fontjoy.com/" },
  { name: "haikei", link: "https://app.haikei.app/" },
  { name: "JSON Crack", link: "https://jsoncrack.com/" },
];
export default function App() {
  return (
    <div className="flex flex-wrap h-screen gap-2 p-4 mx-auto text-white bg-black lg:container ">
      <Grid name="unstyled components" items={unstlyedComponentsSites} />
      <Grid name="backend testing" items={backendTestingSites} />
      <Grid name="animation" items={animationSites} />
      <Grid name="color" items={colorSites} />
      <Grid name="icons" items={iconsSites} />
      <Grid name="misc" items={miscSites} />
    </div>
  );
}
