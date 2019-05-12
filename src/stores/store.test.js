describe('Store', () => {

  let uut;

  beforeEach(() => {
    uut = require('./store');
  });

  it('should set loading', async () => {
    const loading = true;

    expect(uut.isLoading()).toEqual(false);
    uut.setLoading(loading);
    expect(uut.isLoading()).toEqual(loading);
  });

  it('should set launches', async () => {
    const launches = [{id: 123, name: 'cute bono'}];

    expect(uut.getLaunches()).toEqual(undefined);
    uut.setLaunches(launches);
    expect(uut.getLaunches()).toEqual(launches);
  });

  it('should show priming', async () => {
    const launches = [{id: 123, name: 'cute bono'}];

    expect(uut.shouldShowPriming()).toEqual(true);
    uut.setLaunches(launches);
    expect(uut.shouldShowPriming()).toEqual(false);
  });

  it('should show empty', async () => {
    const launches = [];

    expect(uut.shouldShowEmptyView()).toEqual(false);
    uut.setLaunches(launches);
    expect(uut.shouldShowEmptyView()).toEqual(true);
  });



});
