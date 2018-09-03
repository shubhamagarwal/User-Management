import React from "react";
import { shallow } from "enzyme";
import { UserProfile } from "./UserProfile";

const userData = {id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"};
const deleteUserById = jest.fn();
const key = 1;

describe('DiagnosticResul Component', () => {
    const setup = () => shallow(
    <UserProfile
      userData={userData}
      deleteUserById={deleteUserById}
      key={key}
    />
  );

  it('renders the UserProfile Component', () => {
    const wrapper = setup();
    expect(wrapper.find('UserProfile')).toBeDefined();
  });

  it('props data should be defined', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.userData.first_name).toBeDefined();
    expect(wrapper.instance().props.userData.last_name).toBeDefined();
  });

  it('Div contain class column ', () => {
    const wrapper = setup();
    expect(wrapper.find('.column')).toHaveLength(1);
  });
});