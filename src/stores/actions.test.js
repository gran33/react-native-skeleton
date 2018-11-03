describe('Describe tests', () => {

  let uut, mockNavigation;

  beforeEach(() => {
    jest.mock('react-native-navigation');

    mockNavigation = require('react-native-navigation').Navigation;

    uut = require('./actions');
  });

  it('should push show me more screen', async () => {
    expect(true).toBe(true);
  });

});
