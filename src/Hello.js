import React, { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "이름없음"
  };
  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}
//hooks를 사용할 수 있게됨에 따라 class는 뒷전이 되었다

// function Hello({ color, name, isSpecial }) {
//   return (
//     <div style={{ color: color }}>
//       {isSpecial && <b>*</b>}
//       안녕하세요{name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: "이름없음"
// };

export default Hello;
