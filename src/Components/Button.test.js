import Button from "./Button";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

// instead of userEvent we can also use fireEvent

// to use snapshot we need to install -> npm install react-test-renderer

// in place of test we can also use "it" both works the same

// here i am testing that the custom Button component that i have created is actually getting rendered on the screen or not

describe("testing the custom button", () => {
  // not preferred because there can be more elements with text "Click Me"
  test("should be present in the dom", () => {
    render(<Button>Click Me</Button>);
    // screen.debug();
    let button = screen.getByText("Click Me");

    expect(button).toBeInTheDocument();
  });

  //   Preferred because there can be only one elem with a id
  it("should have a button with text click me", () => {
    render(<App></App>); //virtually
    // screen.debug();
    let button = screen.getByTestId("customButton");
    expect(button).toBeInTheDocument();
  });

  //   Empty dom element =>  <div></div>

  it("should render without any children", () => {
    render(<Button></Button>);
    // render(<Button>Click</Button>); this will throw an error
    screen.debug();
    let button = screen.getByTestId("customButton");
    expect(button).toBeEmptyDOMElement();
  });

  it("should toggle the theme", () => {
    render(<App></App>);
    // this is the flow of events in testing
    let element = screen.getByText("Theme is light");
    expect(element).toHaveTextContent("light");
    // pehle esa tha

    let button = screen.getByTestId("customButton");
    userEvent.click(button);
    // jab button par click karengey

    expect(element).toHaveTextContent("dark");
    userEvent.click(button);
    expect(element).toHaveTextContent("light");
    // toh esa ho jayega
  });

  //   to check ki click karne par function execute ho rha hai ki nahi
  it("should call the given function", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Click Me</Button>);
    let button = screen.getByTestId("customButton");
    userEvent.click(button);
    userEvent.click(button);
    // expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledTimes(2);
  });

  //   snapshot
  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Button colorScheme={"green"} variant={"outline"}>
          Increment Counter
        </Button>
      )
      .toJSON(); //instead of .toJSON() we can also use .toTree()
    expect(tree).toMatchSnapshot();
  });

  //   if anything changes then snapshot fails -->but we want tokeep that change then in terminal press w and u --> we will get this option only when if the testcase fails

  //   this will create a snapshot in __snapshot__ folder
});
