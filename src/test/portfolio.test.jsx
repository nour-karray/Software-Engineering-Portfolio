import { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { LanguageProvider } from "../hooks/useLanguage.jsx";
import { useTheme } from "../hooks/useTheme";

function renderWithLanguage(component) {
  return render(<LanguageProvider>{component}</LanguageProvider>);
}

function ThemeHarness() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}

function NavbarHarness() {
  const [theme, setTheme] = useState("light");
  return <Navbar theme={theme} onToggleTheme={() => setTheme("dark")} />;
}

describe("portfolio interactions", () => {
  it("switches the interface from French to English", async () => {
    const user = userEvent.setup();
    renderWithLanguage(<NavbarHarness />);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(document.documentElement).toHaveAttribute("lang", "en");
    expect(screen.getByRole("button", { name: "Projects" })).toBeInTheDocument();
    expect(document.title).toContain("Software Engineering");
  });

  it("filters projects and exposes only verified repository links", async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Projects />);

    expect(screen.getByRole("heading", { name: /DocIA/i })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "BI / Data" }));

    expect(screen.getByRole("heading", { name: /Entrepôt de données HR Analytics/i })).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole("heading", { name: /Event Planner/i })).not.toBeInTheDocument();
    });
    expect(screen.getByRole("link", { name: /GitHub.*HR Analytics/i })).toHaveAttribute(
      "href",
      "https://github.com/nour-karray/HR-Analytics-Data-Warehouse",
    );
  });

  it("keeps the critical CV and contact actions available", () => {
    renderWithLanguage(<Hero />);

    expect(screen.getByRole("link", { name: /Télécharger mon CV/i })).toHaveAttribute(
      "href",
      expect.stringContaining("cv-nour-el-houda-karray.pdf"),
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/karray-nour-el-houda",
    );
  });

  it("persists the selected theme", async () => {
    const user = userEvent.setup();
    render(<ThemeHarness />);

    await user.click(screen.getByRole("button", { name: "light" }));

    expect(screen.getByRole("button", { name: "dark" })).toBeInTheDocument();
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
