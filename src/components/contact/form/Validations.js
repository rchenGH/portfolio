const nameRegexVal = /^[a-zA-Z]+$/;

nonNullValidation = inputName => {
  return !!inputName;
};

regValidation = inputName => {
  return !inputName.match(regexVal);
};

lengthValidation = inputName => {
  return inputName.length <= 5 || inputName.length >= 40;
};

nameValidation = inputName => {
  if (this.nonNullValidation(inputName)) {
    if (this.regValidation(inputName)) {
      return 'Must not contain special characters or numbers.';
    } else {
      return null;
    }
  } else {
    return 'This field is required.';
  }
};