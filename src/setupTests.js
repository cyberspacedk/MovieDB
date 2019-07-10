/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// global.toJson = toJson

// Fail tests on any warning
// console.error = message => {
//  throw new Error(message);
// };
