import React from 'react';
import { shallow } from 'enzyme';
import { PageContent } from '../component';

describe('Component: PageContent', () => {
  const props = {
    searchResponse: 9,
  };
  const container = shallow(<PageContent {...props} />);

  it('Snapshot: should match. Display search results', () => {
    expect(container).toMatchSnapshot();
  });

  it('Snapshot: should match. Display trending', () => {
    const nextProps = {
      searchResponse: 0,
    };
    const container = shallow(<PageContent {...nextProps} />);

    expect(container).toMatchSnapshot();
  });
});
