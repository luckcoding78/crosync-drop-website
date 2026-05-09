import test from "node:test";
import assert from "node:assert/strict";

import { siteContent } from "../assets/js/content.js";
import {
  renderFooter,
  renderHomePage,
  renderLegalPage,
  resolveLocale
} from "../assets/js/site.js";

test("resolveLocale prefers saved locale over browser language", () => {
  const locale = resolveLocale({
    savedLocale: "ja",
    browserLanguage: "zh-CN"
  });

  assert.equal(locale, "ja");
});

test("resolveLocale maps browser language to supported locales", () => {
  assert.equal(resolveLocale({ browserLanguage: "zh-CN" }), "zh");
  assert.equal(resolveLocale({ browserLanguage: "ja-JP" }), "ja");
  assert.equal(resolveLocale({ browserLanguage: "en-US" }), "en");
  assert.equal(resolveLocale({ browserLanguage: "fr-FR" }), "en");
});

test("renderHomePage includes brand, direct downloads, and faq shells", () => {
  const markup = renderHomePage("en", siteContent);

  assert.match(markup, /Crosync Drop/);
  assert.match(markup, /Windows Download/);
  assert.match(markup, /Mac Download/);
  assert.match(markup, /Install Crosync Hub/);
  assert.match(markup, /FAQ/);
});

test("download links target latest release assets", () => {
  assert.match(siteContent.downloads.windows, /releases\/latest\/download\/CrosyncHubSetup\.exe$/);
  assert.match(siteContent.downloads.mac, /releases\/latest\/download\/CrosyncHub\.dmg$/);
});

test("renderFooter stays minimal", () => {
  const markup = renderFooter("en", siteContent.shared);

  assert.match(markup, /Privacy Policy/);
  assert.match(markup, /Terms of Use/);
  assert.doesNotMatch(markup, /GitHub/i);
  assert.doesNotMatch(markup, /support@/i);
});

test("renderLegalPage includes all three languages on one page", () => {
  const markup = renderLegalPage("privacy", siteContent);

  assert.match(markup, /English/);
  assert.match(markup, /中文/);
  assert.match(markup, /日本語/);
  assert.match(markup, /Privacy Policy/);
  assert.doesNotMatch(markup, /content pending/i);
  assert.doesNotMatch(markup, /待补充/);
});
