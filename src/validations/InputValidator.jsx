class InputValidator {
  static isValidEmail(input) {
    input = input.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input === "") {
      return "Email should not be empty.";
    } else if (!emailRegex.test(input)) {
      return "Invalid email format.";
    } else {
      return "";
    }
  }

  static isValidPassword(input) {
    input = input.trim();
    if (input === "") {
      return "Password should not be empty.";
    } else {
      return "";
    }
  }

  static isEmpty(input) {
    input = input.trim();
    if (input === "") {
      return "Field should not be empty.";
    } else {
      return "";
    }
  }
  static isNull(input) {
    if (input === null) {
      return true;
    } else {
      return false;
    }
  }

  static isObjectEmpty(obj) {
    for (const key in obj) {
      if (obj[key] === null || obj[key] === "") {
        return true;
      }
    }
    return false;
  }

  static isFormErrorEmpty(formError) {
    return Object.values(formError).every((value) => value === "");
  }
}

export default InputValidator;
