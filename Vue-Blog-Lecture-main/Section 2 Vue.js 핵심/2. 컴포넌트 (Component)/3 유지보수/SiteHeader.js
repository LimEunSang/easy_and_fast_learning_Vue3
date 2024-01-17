import Nav from "./header/Nav.js";
export default {
  template: `
    <div>헤더</div>
    <Nav></Nav>
  `,
  components: {
    Nav, // "Nav: Nav,"와 동일(ES6 문법)
  },
};
