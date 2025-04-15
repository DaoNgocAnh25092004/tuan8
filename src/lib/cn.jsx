/**
 * cn - Hàm tiện ích để kết hợp các class names một cách có điều kiện.
 * @param {...(string|Object|boolean|undefined|null)} inputs - Các class names cần kết hợp.
 * Có thể là string, object (với các key là class names và value là điều kiện),
 * hoặc boolean/undefined/null (sẽ bị bỏ qua).
 * @returns {string} - Chuỗi chứa các class names đã được kết hợp.
 */
export function cn(...inputs) {
  const classes = [];

  for (let i = 0; i < inputs.length; i++) {
    const arg = inputs[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (argType === "object") {
      if (Array.isArray(arg)) {
        // Nếu là mảng, gọi đệ quy để xử lý các phần tử trong mảng
        const nestedClasses = cn(...arg);
        if (nestedClasses) {
          classes.push(nestedClasses);
        }
      } else {
        // Nếu là object, duyệt qua các key-value
        for (const key in arg) {
          if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
    // Các kiểu dữ liệu khác như boolean, undefined, null sẽ bị bỏ qua
  }

  return classes.filter(Boolean).join(" ");
}

// Ví dụ sử dụng (có thể để trong một file khác để chạy thử)
// import { cn } from './utils';
//
// const myClasses = cn(
//   'bg-blue-500', // luôn được áp dụng
//   'text-white',  // luôn được áp dụng
//   { 'font-bold': true }, // áp dụng nếu điều kiện là true
//   { 'rounded-md': false }, // không áp dụng
//   undefined, // bị bỏ qua
//   null,      // bị bỏ qua
//   ['p-4', 'shadow-md'], // mảng các class names
//   ['border', { 'border-red-500': true, 'border-green-500': false }], // mảng lồng nhau
//   'hover:bg-blue-700', // luôn được áp dụng
// );
//
// console.log(myClasses); // Kết quả: "bg-blue-500 text-white font-bold p-4 shadow-md border border-red-500 hover:bg-blue-700"
