import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'componets/CommentBox';
import CommentList from 'componets/CommentList';
import App from 'componets/App';

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
