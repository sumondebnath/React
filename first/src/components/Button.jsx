import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currChange, locale: currLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currChange === nextChange && currLocale === nextLocale) {
      return false;
    }
    return true;
  }

  render() {
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        {locale === "bn-BD" ? "Change It" : "পরিবর্তন করুন"}
      </button>
    );
  }
}

export default Button;
