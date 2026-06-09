import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the YouTube app UI", () => {
  render(<App />);

  expect(screen.getAllByText(/YouTube/i).length).toBeGreaterThan(0);
});
