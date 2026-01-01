import React from 'react';

export default function JSPracticeDelta() {
  // 1. Scope demo with let, const, var
  function demoScopes() {
    if (true) {
      var v = 'var value';       // function-scoped
      let l = 'let value';       // block-scoped
      const c = 'const value';   // block-scoped
    }
    return {
      varValue: typeof v !== 'undefined' ? v : 'undefined',
      letAccessible: (() => { try { return l; } catch (e) { return e.message; } })(),
      constAccessible: (() => { try { return c; } catch (e) { return e.message; } })()
    };
  }

  // 2. fruits array and function returning second fruit
  const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  function getSecondFruit(arr = fruits) {
    return arr[1];
  }

  // 3. push then pop, return modified array
  function pushThenPop(arr, element) {
    const copy = arr.slice();
    copy.push(element);
    copy.pop();
    return copy;
  }

  // 4. map numbers to squares
  function squareNumbers(numbers) {
    return numbers.map(n => n * n);
  }

  // 5. filter out even numbers (return odd numbers)
  function filterOdd(numbers) {
    return numbers.filter(n => n % 2 !== 0);
  }

  // 6. person object and greeting function
  const person = { name: 'Sanket', age: 28, occupation: 'Developer' };
  function greetPerson(p = person) {
    return `Hello, my name is ${p.name}. I am ${p.age} years old and work as a ${p.occupation}.`;
  }

  // 7. rectangle area from object
  function rectangleArea(rect) {
    return rect.width * rect.height;
  }

  // 8. return array of object keys
  function getObjectKeys(obj) {
    return Object.keys(obj);
  }

  // 9. merge two objects using Object.assign
  function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }

  // 10. sum array using reduce
  function sumArray(numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
  }

  // Example data for demonstrations
  const scopeDemo = demoScopes();
  const secondFruit = getSecondFruit();
  const arrExample = [1, 2, 3];
  const pushPopResult = pushThenPop(arrExample, 4);
  const nums = [1, 2, 3, 4, 5];
  const squared = squareNumbers(nums);
  const oddNumbers = filterOdd(nums);
  const greeting = greetPerson();
  const rect = { width: 5, height: 10 };
  const area = rectangleArea(rect);
  const sampleObj = { a: 1, b: 2, c: 3 };
  const keys = getObjectKeys(sampleObj);
  const merged = mergeObjects({ x: 1, y: 2 }, { y: 20, z: 3 });
  const sum = sumArray([10, 20, 30]);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.6, padding: 20 }}>
      <h2>JS Practice 1 - Delta (React)</h2>

      <section>
        <h3>1. Scope demo</h3>
        <pre>{JSON.stringify(scopeDemo, null, 2)}</pre>
      </section>

      <section>
        <h3>2. Second fruit</h3>
        <div>{secondFruit}</div>
      </section>

      <section>
        <h3>3. Push then pop</h3>
        <div>Original: [{arrExample.join(', ')}]</div>
        <div>After push/pop: [{pushPopResult.join(', ')}]</div>
      </section>

      <section>
        <h3>4. Squared numbers (map)</h3>
        <div>Input: [{nums.join(', ')}]</div>
        <div>Squared: [{squared.join(', ')}]</div>
      </section>

      <section>
        <h3>5. Filter odd numbers</h3>
        <div>Odds: [{oddNumbers.join(', ')}]</div>
      </section>

      <section>
        <h3>6. Person greeting</h3>
        <div>{greeting}</div>
      </section>

      <section>
        <h3>7. Rectangle area</h3>
        <div>Width: {rect.width}, Height: {rect.height}, Area: {area}</div>
      </section>

      <section>
        <h3>8. Object keys</h3>
        <div>Keys: [{keys.join(', ')}]</div>
      </section>

      <section>
        <h3>9. Merge objects</h3>
        <div>Merged: {JSON.stringify(merged)}</div>
      </section>

      <section>
        <h3>10. Sum with reduce</h3>
        <div>Sum of [10,20,30]: {sum}</div>
      </section>
    </div>
  );
}
