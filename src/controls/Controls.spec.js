// Test away!
import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Controls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("calls toggles lock function passed as props", () => {
    const toggleLocked = jest.fn();

    const { getByText } = render(
      <Controls toggleLocked={toggleLocked} locked={false} closed={true} />
    );

    fireEvent.click(getByText(/lock gate/i));
    expect(toggleLocked).toHaveBeenCalled();
  });

  it("calls toggles closed function passed as props", () => {
    const toggleClosed = jest.fn();

    const { getByText } = render(
      <Controls toggleClosed={toggleClosed} locked={false} closed={false} />
    );

    fireEvent.click(getByText(/close gate/i || /open gate/i));
    expect(toggleClosed).toHaveBeenCalled();
  });
});