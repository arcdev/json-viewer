function extractJSON(rawJson) {
  return rawJson
    .replace(/\s*while\((1|true)\)\s*;?/, '')
    .replace(/\s*for\(;;\)\s*;?/, '')
    .replace(/^[^{\[].+\({/, '{')
    .replace(/}\);?\s*$/, '}');
}

module.exports = extractJSON;
