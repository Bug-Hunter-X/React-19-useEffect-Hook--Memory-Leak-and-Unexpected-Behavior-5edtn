# React 19 useEffect Hook: Memory Leak and Unexpected Behavior

This repository demonstrates a common error in React 19 applications involving the `useEffect` hook and asynchronous operations.  Specifically, it showcases how neglecting to properly clean up asynchronous tasks (like intervals or timeouts) within `useEffect` can result in memory leaks and unexpected behavior.

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected version.

## Bug Description
The issue lies in the `useEffect` hook where `setInterval` is used to update a state variable.  Without a cleanup function to clear the interval when the component unmounts, the interval continues to run indefinitely, even after the component is removed from the DOM.  This can lead to increased memory consumption and potential performance issues.

## Solution
The solution involves using the return value of `useEffect` to implement a cleanup function that clears the interval.  This ensures that the interval is stopped when the component is unmounted, preventing the memory leak.

## How to reproduce
1. Clone the repository.
2. Navigate to the project directory using your terminal.
3. Install dependencies: `npm install`
4. Run the application: `npm start`

Observe the behavior of the counter in both the `bug.js` and `bugSolution.js` examples.  The former will continue counting even after the component is unmounted, while the latter correctly stops the interval.