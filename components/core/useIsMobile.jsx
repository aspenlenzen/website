import React from "react";

/** True when viewport is <= bp px. Updates live on resize/rotation. */
export function useIsMobile(bp = 700) {
  const query = "(max-width: " + bp + "px)";
  const [mobile, setMobile] = React.useState(() => window.matchMedia(query).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMobile(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return mobile;
}
