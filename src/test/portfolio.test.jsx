import { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import ExperienceTimeline from "../components/ExperienceTimeline";
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
    expect(document.title).toContain("Computer Engineering");
  });

  it("filters projects across all categories, including multi-category projects", async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Projects />);

    expect(screen.getByRole("button", { name: "Tous" })).toHaveClass("active");
    expect(screen.getByRole("heading", { name: /DocIA/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Développement logiciel" }));
    expect(screen.getByRole("heading", { name: "TrainFlow AI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Event Planner/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Intelligence artificielle" }));
    expect(screen.getByRole("heading", { name: "TrainFlow AI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /DocIA/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Data & BI" }));

    expect(screen.getByRole("heading", { name: /Entrepôt de données HR Analytics/i })).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole("heading", { name: /Event Planner/i })).not.toBeInTheDocument();
    });
    expect(screen.getByRole("link", { name: /GitHub.*HR Analytics/i })).toHaveAttribute(
      "href",
      "https://github.com/nour-karray/HR-Analytics-Data-Warehouse",
    );

    await user.click(screen.getByRole("button", { name: "Mobile" }));
    expect(screen.getByRole("heading", { name: /SmartScan Medical OCR/i })).toBeInTheDocument();
  });

  it("shows EcoCode with the requested internship content", () => {
    renderWithLanguage(<ExperienceTimeline />);

    expect(screen.getByText("EcoCode")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Stage d'été" })).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });

  it("shows the four certifications including NMTC", () => {
    renderWithLanguage(<Certificates />);

    expect(screen.getByText("AI Fundamentals: Foundations for Understanding AI")).toBeInTheDocument();
    expect(screen.getByText("Scrum Fundamentals Certified (SFC)")).toBeInTheDocument();
    expect(screen.getByText("CCNA: Introduction to Networks")).toBeInTheDocument();
    expect(screen.getByText("National Microsoft Technologies Camp Tunisia")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Voir le certificat AI Fundamentals/i })).toHaveAttribute(
      "href",
      expect.stringContaining("ibm-ai-fundamentals.png"),
    );
    expect(screen.getByRole("link", { name: /Voir le certificat Scrum Fundamentals/i })).toHaveAttribute(
      "href",
      expect.stringContaining("scrum-fundamentals-certified-nour-karray.pdf"),
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
