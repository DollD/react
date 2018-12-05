export class AppValidators {
  static nameValidator(fc) {
    const pattern = /^[A-Za-z]+$/;
    console.log(pattern.test(fc.value));
    if (pattern.test(fc.value)) {
      return null;
    } else {
      return {
        nameError: true
      };
    }
  }

  static ccError(fc) {
    const pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return pattern.test(fc.value) ? null : { ccError: true };
  }
}
