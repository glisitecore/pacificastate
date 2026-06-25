import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ACCOUNT = "teaI3nSucv";
const SCRIPT_SRC = "https://cdn.userway.org/widget.js";

const AGENCY_PATTERN = /^\/agencies\//;

/**
 * Loads the UserWay accessibility widget on non-agency routes and
 * removes it when navigating to agency pages.
 */
const UserWayLoader = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isAgency = AGENCY_PATTERN.test(pathname);

    // Cleanup function to remove UserWay script and UI elements
    const removeUserWay = () => {
      const existingScript = document.querySelector(`script[data-account="${ACCOUNT}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      // Remove known UserWay DOM containers
      const selectors = [
        "div.uwy",
        ".uwy",
        "div.userway",
        ".userway",
        "#userway",
        "#userway-widget",
        "[class*='uwy-']",
        "[class*='userway-']",
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      });

      // Remove any UserWay style tags
      document.querySelectorAll("style").forEach((style) => {
        if (style.textContent?.includes("userway") || style.textContent?.includes("uwy")) {
          style.remove();
        }
      });
    };

    if (isAgency) {
      removeUserWay();
      return;
    }

    // Not an agency page — ensure script is present
    if (!document.querySelector(`script[data-account="${ACCOUNT}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.setAttribute("data-account", ACCOUNT);
      script.async = true;
      document.body.appendChild(script);
    }
  }, [pathname]);

  return null;
};

export default UserWayLoader;
