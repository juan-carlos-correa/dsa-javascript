> 📄 **New here?** 👉 [See how to use this template →](./TEMPLATE-INSTRUCTIONS.md)

# [EXERCISE TITLE HERE]

> Replace this section with a one-line summary of the exercise.  
> Example: Implement a function to check if two strings are anagrams.

---

## 📘 Description

Describe the problem in detail.

Example:

Given two strings `s1` and `s2`, return `true` if `s2` is an anagram of `s1`, and `false` otherwise.  
An anagram is a word or phrase formed by rearranging the letters of a different word.

---

## 📥 Input

- `s1`: a string (1 ≤ s1.length ≤ 10⁵)
- `s2`: a string (1 ≤ s2.length ≤ 10⁵)
- No spaces, only lowercase letters

---

## 📤 Output

- Returns `true` or `false`

---

## 💡 Tips

- Use `.toLowerCase()` if needed
- Use objects, arrays or `Map` to count character frequencies
- Aim for O(n) time complexity if possible
- Compare frequency maps or use one-pass counter

---

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

Make sure your implementation is in `src/main.js` and your tests in `test/main.test.js`.

---

## ✍️ Your Task

1. Read the problem and requirements
2. Write your implementation in `src/main.js`
3. Test your solution with `npm run test`
4. Document anything relevant in this README if needed
