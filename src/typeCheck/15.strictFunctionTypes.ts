type StringOrNumberFunc = (ns: string | number) => void;

// // Unsafe assignment
let func: StringOrNumberFunc = (a: number) => {
  console.log(a);
};
// Unsafe call - will crash
func(10);
