import React from 'react';
import { shallow, mount } from 'enzyme';
import './testUtils';
import SlideOutContent from '../src/SlideOutContent';

describe('SlideOutContent', function() {
  let TestView;
  const testText = "My test content";

  beforeEach(() => {
    TestView = (
      <SlideOutContent>
        <div className="my-view">{testText}</div>
      </SlideOutContent>
    );
  });

  test('it should render children', function() {
    const actualText = shallow(TestView).find('.my-view').text();
    expect(actualText).toEqual(testText);
  });
});
