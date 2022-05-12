import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="pitbull dragon life" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("pitbull dragon life");
    });

    test("after creation span displayd", () => {
      const component = create(<ProfileStatus status="pitbull dragon life" />);
      const root = component.root;
      let span = root.findByType('span')
      expect(span).not.toBeNull();
    });
    
    test("after creation input not", () => {
      const component = create(<ProfileStatus status="pitbull dragon life" />);
      const root = component.root; 
      expect(()=>{
        let input = root.findByType('input')
      }).toThrow()
    });

    test("after creation span length", () => {
      const component = create(<ProfileStatus status="pitbull dragon life" />);
      const root = component.root;
      let span = root.findByType('span')
      expect(span.children[0]).toBe("pitbull dragon life");
    });

    test("input editMode", () => {
      const component = create(<ProfileStatus status="pitbull dragon life" />);
      const root = component.root;
      let span = root.findByType('span')
      span.props.onClick()
      let input = root.findByType('input')
      expect(input.props.value).toBe("pitbull dragon life");
    });

    test("callback update", () => {
      const mockCallback = jest.fn()
      const component = create(<ProfileStatus status="pitbull dragon life" updateStatus={mockCallback} />);
      const Instance = component.getInstance();
      Instance.deActiveEditeMode()
      expect(mockCallback.mock.calls.length).toBe(1);
    });
  });
