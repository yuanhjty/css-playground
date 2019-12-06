function escapeQuotes(str) {
  return str.replace(/['"`]/g, "\\\\\\$&");
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function getElementContent(src, tagName) {
  const escapedTagName = escapeRegExp(tagName);
  const patternString = `<${escapedTagName}[\\s\\S]*?>([\\s\\S]*)</${escapedTagName}>`;
  const pattern = new RegExp(patternString);

  const matchResult = pattern.exec(src);
  if (!matchResult) {
    return "";
  }

  return matchResult[1] || "";
}

function countStartSpaces(str) {
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] !== " ") {
      return i;
    }
  }
  return str.length;
}

function trimStartSpaces(str, count) {
  if (typeof count !== "number") {
    count = str.length;
  }
  const startSpaceCount = countStartSpaces(str);
  if (count > startSpaceCount) {
    count = startSpaceCount;
  }
  return str.slice(count);
}

function getHtml(src) {
  const html = getElementContent(src, "Example");
  let htmlLines = html.replace(/\r/g, "").split("\n");

  while (htmlLines[0] === "") {
    htmlLines.shift();
  }

  while (htmlLines[htmlLines.length - 1] === "") {
    htmlLines.pop();
  }

  const firstLine = htmlLines[0];
  if (!firstLine) {
    return "";
  }

  const toTrimSpaceCount = countStartSpaces(firstLine);
  const formattedHtml = htmlLines
    .map(line =>
      line === "" ? "\n" : `${trimStartSpaces(line, toTrimSpaceCount)}\n`
    )
    .join("");

  return formattedHtml;
}

function getCss(src) {
  const css = getElementContent(src, "style");
  return css.trim();
}

function docLoader(src) {
  const html = getHtml(src);
  const css = getCss(src);

  const target = src.replace(
    /[`'"]{{(html)}}[`'"]|[`'"]{{(css)}}[`'"]/g,
    (match, htmlCapture, cssCapture) => {
      if (htmlCapture === "html") {
        return "`" + escapeQuotes(html) + "`";
      } else if (cssCapture === "css") {
        return "`" + escapeQuotes(css) + "`";
      }
      return match;
    }
  );

  return target;
}

module.exports = docLoader;
