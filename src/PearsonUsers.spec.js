import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import { PearsonUsers } from "./PearsonUsers";


const setup = () => shallow(<PearsonUsers />);
describe("PearsonUsers", () => {

  it("renders a h1", () => {
    const wrapper = setup();
    const h1 = wrapper.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('renders the PearsonUsers Component', () => {
    const wrapper = setup();
    expect(wrapper.find('PearsonUsers')).toBeDefined();
  });

  it("ComponentDidMount function to be called", () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();
    const userData = [{id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}, {id: 1, first_name: "Janet", last_name: "Janet", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}]
    wrapper.setState({ users: userData });
    expect(wrapper.find('div')).toHaveLength(3);
  });

  it('component contain UserProfile component', () => {
    const wrapper = setup();
    const event = { preventDefault: () => {} };
    expect(wrapper.find('UserProfile')).toBeDefined();
    wrapper.instance().deleteUserById(event,1);
  });

  it("deleteUserById function to be called", () => {
    const wrapper = setup();
    const event = { preventDefault: () => {} };
    expect(event.preventDefault).toBeDefined();
    expect(wrapper.instance().deleteUserById(event,1)).toBeUndefined();
  });

  it("deleteDuplicateUsers function to be called", () => {
    const wrapper = setup();
    const event = { preventDefault: () => {} };
    expect(event.preventDefault).toBeDefined();
    expect(wrapper.instance().deleteDuplicateUsers(event)).toBeUndefined();
  });

  it("Simulate the click on button", () => {
    const event = { preventDefault: () => {} };
    const wrapper = setup();
    const userData = [{id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}, {id: 1, first_name: "Janet", last_name: "Janet", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}]
    wrapper.setState({ users: userData });
    expect(wrapper.find('.delete-duplicate').length).toBe(1);
    wrapper.find('.delete-duplicate').simulate('click');
    wrapper.instance().deleteDuplicateUsers(event);
  });
});
