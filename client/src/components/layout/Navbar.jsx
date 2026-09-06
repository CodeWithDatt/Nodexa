import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("nodexa-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
};

const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isDark = theme === "dark";

  /* =========================================
     APPLY THEME
  ========================================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    document.documentElement.style.colorScheme = theme;

    localStorage.setItem("nodexa-theme", theme);
  }, [theme]);

  /* =========================================
     SCROLL DETECTION
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     THEME TOGGLE
  ========================================= */

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  /* =========================================
     NAVIGATION LINKS
  ========================================= */

  const navLinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Infinite Canvas",
      href: "#canvas",
    },
    {
      name: "Templates",
      href: "#templates",
    },
    {
      name: "Developers",
      href: "#developers",
    },
    {
      name: "About",
      href: "#about",
    },
  ];

  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  const handleNavClick = (event, href) => {
    event.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full">
      <div
        className={`
          mx-auto
          transition-all
          duration-500
          ease-out

          ${
            isScrolled
              ? `
                mt-3
                w-[calc(100%-24px)]
                max-w-6xl
                rounded-2xl
                border
                shadow-[0_18px_60px_rgba(0,0,0,0.18)]
              `
              : `
                w-full
                border-b
              `
          }
        `}
        style={{
          backgroundColor: isScrolled
            ? "var(--color-navbar-scrolled)"
            : "var(--color-navbar)",

          borderColor: "var(--color-border)",

          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* =========================================
            NAVBAR CONTENT
        ========================================= */}

        <div
          className={`
            mx-auto
            flex
            items-center
            justify-between
            gap-4
            px-4
            sm:px-6
            lg:px-8
            transition-all
            duration-500

            ${isScrolled ? "h-[60px]" : "h-16"}
          `}
        >
          {/* =========================================
              LOGO
          ========================================= */}

          <Link
            to="/"
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                transition-all
                duration-300
                group-hover:scale-105
              "
              style={{
                backgroundColor: "var(--color-logo-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <img
                src="/nodexa-logo.png"
                alt="Nodexa"
                className="
                  h-7
                  w-7
                  object-contain
                "
              />
            </div>

            <span
              className="
                text-xl
                font-extrabold
                tracking-tight
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Nodexa
            </span>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}

          <nav
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = "var(--color-text-primary)";

                  event.currentTarget.style.backgroundColor =
                    "var(--color-nav-hover)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color =
                    "var(--color-text-secondary)";

                  event.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* =========================================
              DESKTOP ACTIONS
          ========================================= */}

          <div
            className="
              hidden
              shrink-0
              items-center
              gap-3
              md:flex
            "
          >
            {/* THEME BUTTON */}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* LOGIN */}

            <Link
              to="/login"
              className="
                px-3
                py-2
                text-sm
                font-semibold
                transition-colors
              "
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Log In
            </Link>

            {/* GET STARTED */}

            <Link
              to="/signup"
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-violet-400/30
                bg-gradient-to-r
                from-violet-600
                via-purple-500
                to-blue-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_28px_rgba(124,58,237,0.35)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_36px_rgba(124,58,237,0.55)]
              "
            >
              Get Started
              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =========================================
              MOBILE CONTROLS
          ========================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              md:hidden
            "
          >
            {/* THEME */}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                transition
              "
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* MENU */}

            <button
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
              aria-label="Toggle menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                transition
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden

            ${isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              border-t
              px-5
              pb-6
              pt-4
            "
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-navbar)",
            }}
          >
            <nav
              className="
                flex
                flex-col
                gap-1
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                  "
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {link.name}
                </a>
              ))}

              <div
                className="
                  my-3
                  h-px
                "
                style={{
                  backgroundColor: "var(--color-border)",
                }}
              />

              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                "
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Log In
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-500
                  to-blue-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Get Started
                <ArrowRight size={17} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
