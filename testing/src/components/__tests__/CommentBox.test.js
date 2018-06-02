import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it("has a text area and two buttons", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});

describe("text area tests", () => {
    const input = "Goats are the best!";

    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {
            target: {value: input}
        });
    });

    it("has a text area that users can type in", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual(input);
    });

    it("has a text area whose text is cleared when the user presses submit", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual(input);
        wrapped.find("form").simulate("submit");
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
