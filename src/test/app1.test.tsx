import renderer from "react-test-renderer";
import App1 from "@/test/app1";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();

  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("test Onlick", () => {
  const component = renderer.create(
    <App1 message="http://antfu.me">Anthony Fu</App1>
  );

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // trigger onlick
  // tree.props.

  // // re-rendering
  // tree = toJson(component);
  // expect(tree).toMatchSnapshot();
  // tree.props.onClick();
});
