import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// this will set Enzyme support up for v16 of React
Enzyme.configure({
  adapter: new Adapter(),
});
