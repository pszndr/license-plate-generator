const PlateFormats = {
  AR: /[A-Z]{2}\s\d{3}\s[A-Z]{2}/g,
  BR: /[A-Z]{3}\d{1}[A-Z]{1}\d{2}/g,
  PY: /[A-Z]{4}\s\d{3}/g,
  UY: /[A-Z]{3}\s\d{4}/g
};

module.exports = PlateFormats;
