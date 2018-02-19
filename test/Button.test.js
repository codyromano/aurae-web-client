import React from 'react';
import { shallow, mount } from 'enzyme';
import './testUtils';
import Button from '../src/Button';

describe('Button', function() {
  test('execute callback on click', function() {
    const mockCallback = jest.fn();
    const button = (
      <Button onClick={mockCallback}>Test</Button>
    );
    shallow(button).find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
