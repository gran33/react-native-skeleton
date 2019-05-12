describe('Launches service', () => {

  let uut, mockHttp, mockStore;

  beforeEach(() => {
    jest.mock('../stores/store');
    jest.mock('./http');

    mockHttp = require('./http');
    mockStore = require('../stores/store');
    uut = require('./launches')
  });

  it('should get launches', async () => {
    const rocketsArray = [{id: 1, name: 'bono'}];
    const launches = {rockets: rocketsArray};
    mockHttp.get.mockReturnValueOnce(launches);

    const ans = await uut.getLaunches();
    expect(ans).toEqual(rocketsArray);
  });

  it('should not get launches - error occurred', async () => {
    const rocketsArray = [{id: 1, name: 'bono'}];
    mockHttp.get.mockImplementationOnce(() => {
      throw new Error();
    });

    try {
      await uut.getLaunches();
      expect(true).toBe(false);

    } catch (err) {
      expect(err.message).toEqual(uut.ERRORS.FAILED_TO_FETCH_LAUNCHES_LIST_API);
    }
  });
});
