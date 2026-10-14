import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("hero, language and certificate content are restored", async () => {
  const translations = await read("src/data/translations.js");
  assert.match(translations, /Stage PFE 2027/);
  assert.match(translations, /Software Development/);
  assert.match(translations, /Scrum Fundamentals Certified/);
  assert.match(translations, /National Microsoft Technologies Camp/);
});

test("projects use stable multi-category filters", async () => {
  const data = await read("src/data/portfolioData.js");
  const component = await read("src/components/Projects.jsx");
  assert.match(data, /id: "trainflow"/);
  assert.match(data, /categories: \["software", "ai"\]/);
  assert.match(component, /project\.categories\.includes\(filter\)/);
});

test("reduced motion bypasses typing timers", async () => {
  const hero = await read("src/components/Hero.jsx");
  assert.match(hero, /if \(!words\.length \|\| reduceMotion\)/);
});
