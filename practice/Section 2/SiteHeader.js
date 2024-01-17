import Nav from "./header/Nav.js";

export default {
  template: `
  <div>header</div>
  <Nav/>
  `,
  components: {
    Nav, // "Nav: Nav,"와 동일(ES6 문법)
  },
};
