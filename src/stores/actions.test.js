describe('Describe tests', () => {

  let uut, mockNavigation;

  beforeEach(() => {
    jest.mock('react-native-navigation');

    mockNavigation = require('react-native-navigation').Navigation;

    uut = require('./actions');
  });

  it('should push show me more screen', async () => {
    const componentId = 'comp_123';

    uut.pushShowMeMoreScreen(componentId);
    expect(mockNavigation.push).toHaveBeenCalled();
  });

});
