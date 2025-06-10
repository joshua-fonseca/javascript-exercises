const fibonacci = function(n) {
  n = parseInt(n);
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n < 0) return 'OOPS';
  
  let f0 = 0;
  let f1 = 1;
  let fn;
  for (let i=0; i<n-1; i++) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
  }
  return fn;
};

// Do not edit below this line
module.exports = fibonacci;
