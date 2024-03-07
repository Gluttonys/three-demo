/**
 * @see {@link https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/#preserved-narrowing-in-closures-following-last-assignments}
 * @param url
 * @param names
 */
const getUrls = (url: string | URL, names: string[]) => {
  if (typeof url === 'string') {
    url = new URL(url)
  }
  
  // 此时url会被判定为URL类型（向最近一次赋值类型去查找）， 较为之前， 则不能这么使用
  url.searchParams.get("hello")
  
  // 但是在嵌套函数中则不能这么使用， 因为此时函数的调用时机不能保证类型是安全的
  return names.map(name => {
    url.searchParams.get(name)
  
    return url.toString();
  })
}






