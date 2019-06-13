/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-escape */
class Cookie {
  constructor(name, value, options) {
    this.name = name;
    this.options = options;
    this.value = value;
  }

  get() {
    const matches = document.cookie.match(
      new RegExp(
        `(?:^|; )${this.name.replace(
          /([.$?*|{}()\[\]\\\/+^])/g,
          '\\$1',
        )}=([^;]*)`,
      ),
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  exist() {
    return !!this.get();
  }

  set() {
    const { options } = this;
    let { expires } = options;

    if (expires && typeof expires === 'number') {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    const value = encodeURIComponent(this.value);

    let updatedCookie = `${this.name}=${value}`;

    for (const propName in options) {
      updatedCookie += `; ${propName}`;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }

    document.cookie = updatedCookie;
  }

  destroy() {
    this.options = {
      expires: -1,
    };
    this.value = '';

    this.set();
  }
}
