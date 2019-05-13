describe('Describe tests', () => {

  let uut, mockNavigation, mockStore, mockLaunchService;

  beforeEach(() => {
    jest.mock('react-native-navigation');
    jest.mock('./store');
    jest.mock('../services/launches');

    mockNavigation = require('react-native-navigation').Navigation;
    mockLaunchService = require('../services/launches');
    mockStore= require('./store');

    uut = require('./actions');
  });

  it('should push show me more screen', async () => {
    const componentId = 'comp_123';

    uut.pushShowMeMoreScreen(componentId);
    expect(mockNavigation.push).toHaveBeenCalled();
  });

  it('should get launches', async () => {
    const launchWithImage = {id: 2, imageURL: 'http://image.com'};
    const launches = [{id: 1}, launchWithImage];
    mockLaunchService.getLaunches.mockReturnValueOnce(launches);

    await  uut.getLaunches();
    expect(mockLaunchService.getLaunches).toHaveBeenCalled();
    expect(mockStore.setLoading).toHaveBeenCalledWith(true);
    expect(mockStore.setLaunches).toHaveBeenCalledWith([launchWithImage]);
  });
});
