function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
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
  const htmlLines = html
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);

  const firstLine = htmlLines[0];
  if (!firstLine) {
    return "";
  }

  const toTrimSpaceCount = countStartSpaces(firstLine);
  const formattedHtml = htmlLines
    .map(line => trimStartSpaces(line, toTrimSpaceCount))
    .join("\n");

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
        return "`" + html + "`";
      } else if (cssCapture === "css") {
        return "`" + css + "`";
      }
      return match;
    }
  );

  return target;
}

module.exports = docLoader;
