
describe('http', () => {
  let http;
  let mockFetch;
  const fakeUrl = 'http://url.com';
  const fakeHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  beforeEach(() => {
    global.fetch = jest.fn();
    mockFetch = global.fetch;

    http = require('./http');
  });

  it('validates response ok', async () => {
    mockFetch.mockReturnValue(Promise.resolve({ok: false, status: 'TheStatusCode'}));
    try {
      await http.get('TheUrl');
      fail('expected to throw');
    } catch (e) {
      expect(e).toEqual(new Error('failed for TheUrl, status TheStatusCode'));
    }
  });

  it('returns json response', async () => {
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve('hello world!')}));
    const result = await http.get();
    expect(result).toEqual('hello world!');
  });

  it('should call fetch with GET', async () => {
    const data = 'hello world!';
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    const result = await http.get(fakeUrl);
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {headers: {...fakeHeaders}, method: 'GET'});
    expect(result).toEqual(data);
  });

  it('should call fetch with POST', async () => {
    const data = 'hello world!';
    const body = 'hello body!';
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    const result = await http.post(fakeUrl, {}, body);
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl, {headers: {...fakeHeaders}, method: 'POST', body: JSON.stringify(body)});
    expect(result).toEqual(data);
  });


  it('should call fetch with GET and query params', async () => {
    const data = 'hello world!';
    mockFetch.mockReturnValue(Promise.resolve({ok: true, json: () => Promise.resolve(data)}));
    const result = await http.getWithParams(fakeUrl, {param1: 'param1', param2: 'param2'});
    expect(mockFetch).toHaveBeenCalledWith(fakeUrl + 'param1=param1&param2=param2', {headers: {...fakeHeaders}, method: 'GET'});
    expect(result).toEqual(data);
  });
});
