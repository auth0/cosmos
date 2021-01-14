import { shallow } from "enzyme";
import * as React from "react";

import { Avatar } from "@auth0/cosmos";

const TEST_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f";

describe('Avatar', () => {
  describe('.getSource()', () => {
    it('should return "icon" prefered over anything', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" icon="plus" initials="dd" email="pepe@example.com" />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "fallback" if not image nor gravatar property is passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "fallback" if both image and gravatar errors to load', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" initials="dd" email="pepe@example.com" image={TEST_IMAGE} />)

      wrapper.setState({
        imageErrored: true,
        gravatarErrored: true
      })

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "image" when image prop passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" initials="dd" email="pepe@example.com" image={TEST_IMAGE} />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "image" when image, initials and emails props are passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" initials="dd" email="pepe@example.com" image={TEST_IMAGE} />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "fallback" when image errors and no gravatar prop is passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" image={TEST_IMAGE} />)

      wrapper.setState({
        imageErrored: true
      })

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "gravatar" when image errors to load and email is passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" image={TEST_IMAGE} email="pepe@exammple.com" />)

      wrapper.setState({
        imageErrored: true
      })

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "gravatar" when image errors to load and initials are passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" image={TEST_IMAGE} initials="dd" />)

      wrapper.setState({
        imageErrored: true
      })

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "gravatar" when email is passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" email="pepe@example.com" />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "gravatar" when initials are passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" initials="dd" />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "gravatar" when both initials and email are passed', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" initials="dd" email="pepe@example.com" />)

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "fallback" when gravatar errors to load with email', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" email="pepe@example.com" />)

      wrapper.setState({
        gravatarErrored: true
      })

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })

    it('should return "fallback" when gravatar errors to load with initials', () => {
      const wrapper = shallow<Avatar>(<Avatar size="medium" type="user" initials="dd" />)

      wrapper.setState({
        gravatarErrored: true
      })

      expect(wrapper.instance().getSource()).toMatchSnapshot()
    })
  })
})
