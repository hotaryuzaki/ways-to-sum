function ways(total, k) {
  let count = Array.from({ length: total + 1}, () => 0);

  // base case
  count[0] = 1;

  console.log('before', count)

  for(i = 1; i <= k; i++) {
    console.log('==================')
    console.log('i', i);
    
    for(j = 1; j <= total; j++) {
      console.log('==================')
      console.log('j', j);

      if (j >= i) {
        console.log('j >= i true');
        console.log('count[j] + count[j - i]) =>', count[j], '+', count[j - i], '=', count[j] + count[j - i]);
        count[j] = count[j] + count[j - i];
      } else {
        console.log('j >= i false');
      }

      console.log('========================> process', count)
    }
  }

  console.log('=====================')
  console.log('after', count)
  return count[total];
}

const x = ways(10, 5);
console.log(x);
