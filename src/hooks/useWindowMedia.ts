import { useEffect, useState } from "react";

export function useWindowMedia() {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isTablet, setIsTablet] = useState<boolean>();
  const [isDesktop, setIsDesktop] = useState<boolean>();
  const [isLarge, setIsLarge] = useState<boolean>();

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const desktopQuery = window.matchMedia(
      "(min-width: 1024px) and (max-width: 1439px)"
    );
    const largeQuery = window.matchMedia("(min-width: 1440px)");

    function handleMediaQueries() {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
      setIsDesktop(desktopQuery.matches);
      setIsLarge(largeQuery.matches);
    }

    handleMediaQueries();

    mobileQuery.addEventListener("change", handleMediaQueries);
    tabletQuery.addEventListener("change", handleMediaQueries);
    desktopQuery.addEventListener("change", handleMediaQueries);
    largeQuery.addEventListener("change", handleMediaQueries);

    return () => {
      mobileQuery.removeEventListener("change", handleMediaQueries);
      tabletQuery.removeEventListener("change", handleMediaQueries);
      desktopQuery.removeEventListener("change", handleMediaQueries);
      largeQuery.removeEventListener("change", handleMediaQueries);
    };
  }, []);

  return { isMobile, isTablet, isDesktop, isLarge };
}
