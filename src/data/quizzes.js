export const quizzes = [
  /* JavaScript - Beginner (5) */
  {
    category: "javascript",
    level: "Beginner",
    questions: [
      {
        question: "Which keyword declares a block-scoped variable?",
        options: [
          { text: "var", correct: false, explanation: "`var` is function-scoped." },
          { text: "let", correct: true, explanation: "`let` is block-scoped." },
          { text: "function", correct: false, explanation: "Not a variable keyword." },
          { text: "consts", correct: false, explanation: "Incorrect name." },
        ],
        hint: "Introduced in ES6 to fix scoping issues.",
      },
      {
        question: "What does JSON.stringify() do?",
        options: [
          { text: "Converts object to JSON string", correct: true, explanation: "Serializes an object to JSON." },
          { text: "Parses JSON", correct: false, explanation: "That's JSON.parse()." },
          { text: "Clones object", correct: false, explanation: "Not exactly." },
          { text: "Validates JSON", correct: false, explanation: "No." },
        ],
        hint: "Opposite of JSON.parse().",
      },
      {
        question: "Which operator checks both type and value?",
        options: [
          { text: "==", correct: false, explanation: "Abstract equality (coerces types)." },
          { text: "===", correct: true, explanation: "Strict equality (no coercion)." },
          { text: "=", correct: false, explanation: "Assignment operator." },
          { text: "!==", correct: false, explanation: "Strict inequality." },
        ],
        hint: "Avoid type coercion surprises.",
      },
      {
        question: "Which method adds an item to the end of an array?",
        options: [
          { text: "push()", correct: true, explanation: "`push()` appends at end." },
          { text: "pop()", correct: false, explanation: "Removes last item." },
          { text: "shift()", correct: false, explanation: "Removes first item." },
          { text: "unshift()", correct: false, explanation: "Adds to start." },
        ],
        hint: "Think append/appendix.",
      },
      {
        question: "What is 'NaN' short for?",
        options: [
          { text: "Not a Number", correct: true, explanation: "Represents invalid numeric results." },
          { text: "Not a Name", correct: false, explanation: "No." },
          { text: "Null and Null", correct: false, explanation: "No." },
          { text: "Number as Name", correct: false, explanation: "No." },
        ],
        hint: "Appears when numeric operations fail.",
      },
    ],
  },

  /* JavaScript - Intermediate (5) */
  {
    category: "javascript",
    level: "Intermediate",
    questions: [
      {
        question: "Which method creates a new array with results of calling a function on every element?",
        options: [
          { text: "map()", correct: true, explanation: "map returns a new array of transformed values." },
          { text: "forEach()", correct: false, explanation: "forEach doesn't return an array." },
          { text: "filter()", correct: false, explanation: "filter tests elements." },
          { text: "reduce()", correct: false, explanation: "reduce accumulates to single value." },
        ],
        hint: "Transforms each element.",
      },
      {
        question: "Promise.all rejects if:",
        options: [
          { text: "Any promise rejects", correct: true, explanation: "Promise.all rejects immediately on first rejection." },
          { text: "All promises resolve", correct: false, explanation: "Then it resolves." },
          { text: "Timeout occurs", correct: false, explanation: "Not relevant." },
          { text: "Promises are empty", correct: false, explanation: "It resolves to [] in that case." },
        ],
        hint: "Think fail-fast behavior.",
      },
      {
        question: "Which creates a shallow copy of an object?",
        options: [
          { text: "Object.assign({}, obj)", correct: true, explanation: "Copies enumerable props shallowly." },
          { text: "JSON.parse(obj)", correct: false, explanation: "parse expects string." },
          { text: "obj.clone()", correct: false, explanation: "Not standard." },
          { text: "{...obj}", correct: true, explanation: "Spread syntax creates shallow copy." },
        ],
        hint: "Two valid techniques exist.",
      },
      {
        question: "What is event delegation?",
        options: [
          { text: "Attach handler to parent and use event bubbling", correct: true, explanation: "Efficiently handle many child events." },
          { text: "Bind to all children", correct: false, explanation: "Opposite approach." },
          { text: "Stop propagation", correct: false, explanation: "Not delegation." },
          { text: "Use setTimeout for events", correct: false, explanation: "Irrelevant." },
        ],
        hint: "Fewer listeners — use parent.",
      },
      {
        question: "Which is true about const in JS?",
        options: [
          { text: "Binding is constant; object can mutate", correct: true, explanation: "const prevents reassignment but object fields can change." },
          { text: "Declared var behavior", correct: false, explanation: "Not true." },
          { text: "Always block-scoped and immutable object", correct: false, explanation: "Object is still mutable." },
          { text: "Cannot hold arrays", correct: false, explanation: "It can." },
        ],
        hint: "const vs immutability.",
      },
    ],
  },

  /* JavaScript - Advanced (5) */
  {
    category: "javascript",
    level: "Advanced",
    questions: [
      {
        question: "What does `typeof null` return?",
        options: [
          { text: "'object'", correct: true, explanation: "A legacy quirk in JS returns 'object' for null." },
          { text: "'null'", correct: false, explanation: "Not the case." },
          { text: "'undefined'", correct: false, explanation: "No." },
          { text: "'number'", correct: false, explanation: "No." },
        ],
        hint: "A historical bug.",
      },
      {
        question: "Which queue handles Promise microtasks?",
        options: [
          { text: "Microtask queue", correct: true, explanation: "Promise callbacks are microtasks." },
          { text: "Macrotask queue", correct: false, explanation: "setTimeout uses macrotasks." },
          { text: "Render queue", correct: false, explanation: "Not accurate." },
          { text: "Event queue", correct: false, explanation: "Generic." },
        ],
        hint: "Promises resolve in the microtask phase.",
      },
      {
        question: "What is the result of `[] + {}`?",
        options: [
          { text: "[object Object]", correct: false, explanation: "Order matters. {} + [] gives different result." },
          { text: "'[object Object]'", correct: false, explanation: "Not exactly." },
          { text: "[object Object] as string", correct: false, explanation: "Concatenation rules apply." },
          { text: "Depends on runtime", correct: true, explanation: "Coercion rules make this tricky; don't rely on it." },
        ],
        hint: "Operator overloading + ToPrimitive causes confusion.",
      },
      {
        question: "Which is true about arrow functions?",
        options: [
          { text: "They do not have their own 'this'", correct: true, explanation: "Arrow functions lexically bind 'this'." },
          { text: "They can be used as constructors", correct: false, explanation: "They cannot be used with new." },
          { text: "They always return promises", correct: false, explanation: "No." },
          { text: "They are hoisted like functions", correct: false, explanation: "Not hoisted in same way." },
        ],
        hint: "Lexical this behavior.",
      },
      {
        question: "What is Symbol.for(key) used for?",
        options: [
          { text: "Global symbol keyed by string", correct: true, explanation: "Symbol.for shares symbols across realms." },
          { text: "Private property", correct: false, explanation: "Symbols are not private keys." },
          { text: "String interning", correct: false, explanation: "No." },
          { text: "Typed arrays", correct: false, explanation: "No." },
        ],
        hint: "Global symbol registry.",
      },
    ],
  },

  /* React & CSS categories (Beginner/Intermediate/Advanced) - 5 each */
  // React Beginner
  {
    category: "react",
    level: "Beginner",
    questions: [
      {
        question: "Which hook provides local state in functional components?",
        options: [
          { text: "useState", correct: true, explanation: "useState returns current state and setter." },
          { text: "useEffect", correct: false, explanation: "For side effects." },
          { text: "useRef", correct: false, explanation: "For refs." },
          { text: "useContext", correct: false, explanation: "For context consumption." },
        ],
        hint: "Returns [value, setter].",
      },
      {
        question: "What does JSX look like in output?",
        options: [
          { text: "React.createElement calls", correct: true, explanation: "JSX compiles to createElement calls." },
          { text: "Plain HTML files", correct: false, explanation: "Not exactly." },
          { text: "CSS", correct: false, explanation: "No." },
          { text: "JSON", correct: false, explanation: "No." },
        ],
        hint: "compile-time transform.",
      },
      {
        question: "Which prop is required for stable list rendering?",
        options: [
          { text: "key", correct: true, explanation: "Key prop identifies list items." },
          { text: "id", correct: false, explanation: "DOM attribute, not reconciliation prop." },
          { text: "unique", correct: false, explanation: "No." },
          { text: "ref", correct: false, explanation: "Not for lists." },
        ],
        hint: "Helps React diff lists.",
      },
      {
        question: "Where is root React mounting usually called?",
        options: [
          { text: "index.js / index.jsx", correct: true, explanation: "Common entry that calls createRoot/mount." },
          { text: "App.css", correct: false, explanation: "Styles only." },
          { text: "package.json", correct: false, explanation: "Not code." },
          { text: "server.js", correct: false, explanation: "No." },
        ],
        hint: "Entry file for app.",
      },
      {
        question: "What is controlled input?",
        options: [
          { text: "Value controlled via component state", correct: true, explanation: "OnChange + value bound to state." },
          { text: "Input with defaultValue", correct: false, explanation: "Uncontrolled uses defaultValue." },
          { text: "Input disabled", correct: false, explanation: "No." },
          { text: "An input with ref only", correct: false, explanation: "Uncontrolled pattern." },
        ],
        hint: "State drives the input value.",
      },
    ],
  },

  // React Intermediate
  {
    category: "react",
    level: "Intermediate",
    questions: [
      {
        question: "What does useEffect with empty dependency array do?",
        options: [
          { text: "Runs once after mount", correct: true, explanation: "Equivalent to componentDidMount." },
          { text: "Runs every render", correct: false, explanation: "No." },
          { text: "Prevents update", correct: false, explanation: "No." },
          { text: "Runs before mount", correct: false, explanation: "No." },
        ],
        hint: "Empty deps => run on mount only.",
      },
      {
        question: "Which hook memoizes an expensive value?",
        options: [
          { text: "useMemo", correct: true, explanation: "Caches the value until dependencies change." },
          { text: "useCallback", correct: false, explanation: "Memoizes functions." },
          { text: "useRef", correct: false, explanation: "Persistent ref object." },
          { text: "useState", correct: false, explanation: "Holds state." },
        ],
        hint: "Avoid recomputing heavy operations.",
      },
      {
        question: "Which is true about keys in lists?",
        options: [
          { text: "They help React match elements between renders", correct: true, explanation: "Ensure stable identity for items." },
          { text: "They are accessible via props.key", correct: false, explanation: "React doesn't pass key to component." },
          { text: "They improve CSS", correct: false, explanation: "No." },
          { text: "They reduce bundle size", correct: false, explanation: "No." },
        ],
        hint: "Used in reconciliation.",
      },
      {
        question: "What is lifting state up?",
        options: [
          { text: "Moving shared state to closest common ancestor", correct: true, explanation: "Enables sibling communication." },
          { text: "Storing state in localStorage", correct: false, explanation: "Different thing." },
          { text: "Using Redux always", correct: false, explanation: "Not necessary." },
          { text: "Using refs", correct: false, explanation: "Not the same." },
        ],
        hint: "Parent holds the state.",
      },
      {
        question: "What is React Fiber?",
        options: [
          { text: "Reconciliation algorithm", correct: true, explanation: "Enables incremental rendering." },
          { text: "A CSS library", correct: false, explanation: "No." },
          { text: "A server", correct: false, explanation: "No." },
          { text: "A bundler", correct: false, explanation: "No." },
        ],
        hint: "Rendering architecture.",
      },
    ],
  },

  // React Advanced
  {
    category: "react",
    level: "Advanced",
    questions: [
      {
        question: "What does Suspense allow?",
        options: [
          { text: "Show fallback while waiting for lazy code/data", correct: true, explanation: "Used for code-splitting and data fetching in future APIs." },
          { text: "Replace hooks", correct: false, explanation: "No." },
          { text: "Stop rendering", correct: false, explanation: "No." },
          { text: "Style components", correct: false, explanation: "No." },
        ],
        hint: "Fallback UI for async loading.",
      },
      {
        question: "What is Concurrent Mode's benefit?",
        options: [
          { text: "Interruptible rendering for improved responsiveness", correct: true, explanation: "React can pause/resume work." },
          { text: "Faster network", correct: false, explanation: "No." },
          { text: "Larger bundles", correct: false, explanation: "No." },
          { text: "Improves CSS performance", correct: false, explanation: "No." },
        ],
        hint: "Better interactivity under load.",
      },
      {
        question: "Why use keys when reordering lists?",
        options: [
          { text: "Preserve component identity & state", correct: true, explanation: "Keys help React match elements." },
          { text: "Improve CSS", correct: false, explanation: "No." },
          { text: "Increase bundle caching", correct: false, explanation: "No." },
          { text: "Reduce HTTP requests", correct: false, explanation: "No." },
        ],
        hint: "Stable identity matters.",
      },
      {
        question: "What problem do hooks primarily solve?",
        options: [
          { text: "Share and reuse stateful logic without classes", correct: true, explanation: "Hooks permit reuse via functions." },
          { text: "Compile JSX", correct: false, explanation: "No." },
          { text: "Server-side rendering only", correct: false, explanation: "No." },
          { text: "Remove use of props", correct: false, explanation: "No." },
        ],
        hint: "Avoid HOCs and render props for logic reuse.",
      },
      {
        question: "What does useLayoutEffect run before?",
        options: [
          { text: "Browser paint", correct: true, explanation: "useLayoutEffect runs synchronously after DOM mutations but before paint." },
          { text: "Component mount", correct: false, explanation: "It runs after mount." },
          { text: "Event loop start", correct: false, explanation: "No." },
          { text: "setTimeout", correct: false, explanation: "No." },
        ],
        hint: "Synchronous side-effect timing.",
      },
    ],
  },

  /* CSS category sets (Beginner/Intermediate/Advanced) */
  // CSS Beginner...
  {
    category: "css",
    level: "Beginner",
    questions: [
      {
        question: "Which property changes the text color?",
        options: [
          { text: "color", correct: true, explanation: "color controls text color." },
          { text: "background", correct: false, explanation: "Background color property." },
          { text: "font-size", correct: false, explanation: "Controls size." },
          { text: "margin", correct: false, explanation: "Controls spacing." },
        ],
        hint: "Common property for text.",
      },
      {
        question: "Which value makes an element a flex container?",
        options: [
          { text: "display: flex", correct: true, explanation: "Flex container declaration." },
          { text: "float: left", correct: false, explanation: "Not flex." },
          { text: "position: absolute", correct: false, explanation: "Positioning." },
          { text: "display: grid", correct: false, explanation: "Grid is 2D layout." },
        ],
        hint: "Used for one-dimensional layout.",
      },
      {
        question: "Which unit is relative to root font size?",
        options: [
          { text: "rem", correct: true, explanation: "rem is relative to the root (<html>)."},
          { text: "em", correct: false, explanation: "em is relative to parent." },
          { text: "px", correct: false, explanation: "Absolute pixels." },
          { text: "%", correct: false, explanation: "Relative to parent dimension." },
        ],
        hint: "Root em.",
      },
      {
        question: "Which property controls line spacing?",
        options: [
          { text: "line-height", correct: true, explanation: "line-height adjusts spacing between lines." },
          { text: "letter-spacing", correct: false, explanation: "Controls spacing of characters." },
          { text: "word-spacing", correct: false, explanation: "Spacing between words." },
          { text: "text-indent", correct: false, explanation: "Indent first line." },
        ],
        hint: "Vertical rhythm property.",
      },
      {
        question: "Which property rounds corners?",
        options: [
          { text: "border-radius", correct: true, explanation: "Rounds element corners." },
          { text: "box-sizing", correct: false, explanation: "Controls how width/height are computed." },
          { text: "display", correct: false, explanation: "Layout." },
          { text: "overflow", correct: false, explanation: "Visibility." },
        ],
        hint: "Common for buttons.",
      },
    ],
  },

  // CSS Intermediate...
  {
    category: "css",
    level: "Intermediate",
    questions: [
      {
        question: "What does box-sizing: border-box do?",
        options: [
          { text: "Includes padding and border in width", correct: true, explanation: "Makes sizing simpler." },
          { text: "Excludes padding", correct: false, explanation: "Content-box does that." },
          { text: "Removes margin", correct: false, explanation: "No." },
          { text: "Fixes floats", correct: false, explanation: "No." },
        ],
        hint: "Common reset for layouts.",
      },
      {
        question: "Which layout tool is best for 2D layouts?",
        options: [
          { text: "CSS Grid", correct: true, explanation: "Grid is for two-dimensional layouts." },
          { text: "Flexbox", correct: false, explanation: "Flex is one-dimensional." },
          { text: "Float", correct: false, explanation: "Legacy technique." },
          { text: "Position absolute", correct: false, explanation: "Not a layout system." },
        ],
        hint: "Rows + columns = grid.",
      },
      {
        question: "Which creates a stacking context?",
        options: [
          { text: "opacity less than 1", correct: true, explanation: "opacity < 1 creates stacking context." },
          { text: "display:block", correct: false, explanation: "Not by itself." },
          { text: "margin", correct: false, explanation: "No." },
          { text: "flex", correct: false, explanation: "Not directly." },
        ],
        hint: "Certain properties create new contexts.",
      },
      {
        question: "What does rem measure relative to?",
        options: [
          { text: "Root (<html>) font-size", correct: true, explanation: "rem is root relative." },
          { text: "Parent element", correct: false, explanation: "That's em." },
          { text: "Viewport", correct: false, explanation: "That's vw/vh." },
          { text: "Device pixels", correct: false, explanation: "No." },
        ],
        hint: "Root-based unit.",
      },
      {
        question: "How to make images responsive and not overflow?",
        options: [
          { text: "max-width:100%; height:auto;", correct: true, explanation: "Common responsive image rule." },
          { text: "width:100px", correct: false, explanation: "Fixed size." },
          { text: "display:inline", correct: false, explanation: "Not enough." },
          { text: "float:left", correct: false, explanation: "Not enough." },
        ],
        hint: "Max width + auto height.",
      },
    ],
  },

  // CSS Advanced...
  {
    category: "css",
    level: "Advanced",
    questions: [
      {
        question: "Which property can create a new stacking context?",
        options: [
          { text: "transform", correct: true, explanation: "transform creates stacking context." },
          { text: "margin", correct: false, explanation: "No." },
          { text: "padding", correct: false, explanation: "No." },
          { text: "display:inline", correct: false, explanation: "No." },
        ],
        hint: "Transforms and opacity can create contexts.",
      },
      {
        question: "What does contain: layout do?",
        options: [
          { text: "Limits layout calculations to that element", correct: true, explanation: "Containment is a performance hint." },
          { text: "Resets CSS", correct: false, explanation: "No." },
          { text: "Removes overflow", correct: false, explanation: "No." },
          { text: "Enables grid", correct: false, explanation: "No." },
        ],
        hint: "Used for performance isolation.",
      },
      {
        question: "How to avoid layout thrash when measuring DOM?",
        options: [
          { text: "Batch reads and writes", correct: true, explanation: "Avoid interleaving reads/writes." },
          { text: "Use setTimeout", correct: false, explanation: "Not optimal." },
          { text: "Use querySelectorAll", correct: false, explanation: "Not sufficient." },
          { text: "Force reflow", correct: false, explanation: "That's the problem." },
        ],
        hint: "Batch DOM operations.",
      },
      {
        question: "What unit is relative to the viewport width?",
        options: [
          { text: "vw", correct: true, explanation: "vw is viewport width unit." },
          { text: "vh", correct: false, explanation: "vh is viewport height." },
          { text: "em", correct: false, explanation: "em is element-relative." },
          { text: "%", correct: false, explanation: "Parent-relative." },
        ],
        hint: "Viewport-based measurement.",
      },
      {
        question: "Which property controls how replaced content is fitted?",
        options: [
          { text: "object-fit", correct: true, explanation: "object-fit controls fitting of replaced elements." },
          { text: "background-size", correct: false, explanation: "Backgrounds, not replaced content." },
          { text: "fit-content", correct: false, explanation: "Not exactly." },
          { text: "contain", correct: false, explanation: "Different meaning." },
        ],
        hint: "Used for images/videos inside containers.",
      },
    ],
  },
  {
    category: "html",
    level: "Beginner",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          { text: "HyperText Markup Language", correct: true, explanation: "HTML structures web pages." },
          { text: "Hyper Transfer Machine Language", correct: false, explanation: "Incorrect." },
          { text: "Home Tool Markup Language", correct: false, explanation: "No." },
          { text: "HyperText Making Language", correct: false, explanation: "No." },
        ],
        hint: "Defines web structure.",
      },
      {
        question: "Which tag defines a hyperlink?",
        options: [
          { text: "<a>", correct: true, explanation: "Anchor tag creates hyperlinks." },
          { text: "<link>", correct: false, explanation: "Used for linking resources." },
          { text: "<href>", correct: false, explanation: "Not a tag." },
          { text: "<p>", correct: false, explanation: "Defines paragraph." },
        ],
        hint: "Used with href attribute.",
      },
      {
        question: "Which element represents the largest heading?",
        options: [
          { text: "<h1>", correct: true, explanation: "h1 is the top-level heading." },
          { text: "<h6>", correct: false, explanation: "Smallest heading." },
          { text: "<header>", correct: false, explanation: "Container for headings." },
          { text: "<title>", correct: false, explanation: "Defines page title." },
        ],
        hint: "Headings range h1–h6.",
      },
      {
        question: "Which tag inserts a line break?",
        options: [
          { text: "<br>", correct: true, explanation: "Inserts a line break." },
          { text: "<break>", correct: false, explanation: "Invalid tag." },
          { text: "<lb>", correct: false, explanation: "Not a real tag." },
          { text: "<p>", correct: false, explanation: "Creates paragraph." },
        ],
        hint: "Self-closing tag.",
      },
      {
        question: "What does <!DOCTYPE html> declare?",
        options: [
          { text: "Document type and HTML version", correct: true, explanation: "Tells browser to use HTML5 mode." },
          { text: "Document encoding", correct: false, explanation: "Handled by meta tag." },
          { text: "Document author", correct: false, explanation: "No." },
          { text: "Document size", correct: false, explanation: "No." },
        ],
        hint: "Top of HTML document.",
      },
    ],
  },

  /* HTML - Intermediate (5) */
  {
    category: "html",
    level: "Intermediate",
    questions: [
      {
        question: "Which tag embeds an image?",
        options: [
          { text: "<img>", correct: true, explanation: "Embeds image using src attribute." },
          { text: "<picture>", correct: false, explanation: "Used with sources for responsive images." },
          { text: "<figure>", correct: false, explanation: "Wraps media + caption." },
          { text: "<image>", correct: false, explanation: "Invalid tag." },
        ],
        hint: "Requires src attribute.",
      },
      {
        question: "Which attribute makes an input field mandatory?",
        options: [
          { text: "required", correct: true, explanation: "Prevents form submission without input." },
          { text: "must", correct: false, explanation: "Invalid." },
          { text: "validate", correct: false, explanation: "Not standard." },
          { text: "mandatory", correct: false, explanation: "Invalid." },
        ],
        hint: "Boolean form validation attribute.",
      },
      {
        question: "Which tag groups form elements?",
        options: [
          { text: "<fieldset>", correct: true, explanation: "Groups form controls visually and semantically." },
          { text: "<form>", correct: false, explanation: "Wraps entire form." },
          { text: "<section>", correct: false, explanation: "General grouping." },
          { text: "<legend>", correct: false, explanation: "Labels fieldset." },
        ],
        hint: "Often paired with <legend>.",
      },
      {
        question: "Which HTML tag defines navigation links?",
        options: [
          { text: "<nav>", correct: true, explanation: "Contains navigation links." },
          { text: "<header>", correct: false, explanation: "Header section." },
          { text: "<ul>", correct: false, explanation: "Unordered list." },
          { text: "<menu>", correct: false, explanation: "Deprecated use." },
        ],
        hint: "Semantic container for menus.",
      },
      {
        question: "Which tag embeds another HTML page?",
        options: [
          { text: "<iframe>", correct: true, explanation: "Inline frame for embedding." },
          { text: "<embed>", correct: false, explanation: "For media or plugins." },
          { text: "<object>", correct: false, explanation: "Older alternative." },
          { text: "<include>", correct: false, explanation: "Not valid." },
        ],
        hint: "Inline frame element.",
      },
    ],
  },

  /* HTML - Advanced (5) */
  {
    category: "html",
    level: "Advanced",
    questions: [
      {
        question: "Which element improves accessibility for navigation?",
        options: [
          { text: "<nav>", correct: true, explanation: "Identifies navigation regions." },
          { text: "<aside>", correct: false, explanation: "Secondary content." },
          { text: "<section>", correct: false, explanation: "Thematic grouping." },
          { text: "<div>", correct: false, explanation: "Generic container." },
        ],
        hint: "Semantic tag for links.",
      },
      {
        question: "What is the purpose of the <template> tag?",
        options: [
          { text: "Holds HTML for later use via JS", correct: true, explanation: "Inactive DOM fragment until cloned." },
          { text: "Defines new tag", correct: false, explanation: "No." },
          { text: "Styles HTML", correct: false, explanation: "No." },
          { text: "Acts as include", correct: false, explanation: "No." },
        ],
        hint: "Invisible until used.",
      },
      {
        question: "Which attribute improves SEO for images?",
        options: [
          { text: "alt", correct: true, explanation: "Describes image for search and accessibility." },
          { text: "srcset", correct: false, explanation: "Responsive sources." },
          { text: "id", correct: false, explanation: "Identification only." },
          { text: "title", correct: false, explanation: "Tooltip only." },
        ],
        hint: "Alternative text.",
      },
      {
        question: "What is the difference between <b> and <strong>?",
        options: [
          { text: "<strong> conveys semantic importance", correct: true, explanation: "Strong = important text; b = style only." },
          { text: "<b> conveys semantic meaning", correct: false, explanation: "No semantic meaning." },
          { text: "They are identical", correct: false, explanation: "Not exactly." },
          { text: "<strong> italicizes text", correct: false, explanation: "No." },
        ],
        hint: "Accessibility importance.",
      },
      {
        question: "What does the 'loading' attribute on <img> do?",
        options: [
          { text: "Controls lazy loading", correct: true, explanation: "Can defer image loading until visible." },
          { text: "Preloads image", correct: false, explanation: "No." },
          { text: "Defines transition", correct: false, explanation: "No." },
          { text: "Adjusts speed", correct: false, explanation: "No." },
        ],
        hint: "Improves page performance.",
      },
    ],
  },
  {
    category: "node",
    level: "Beginner",
    questions: [
      {
        question: "What is Node.js primarily used for?",
        options: [
          { text: "Running JavaScript on the server", correct: true, explanation: "Node.js enables server-side JavaScript execution." },
          { text: "Designing web pages", correct: false, explanation: "That's frontend work." },
          { text: "Managing databases", correct: false, explanation: "Indirectly possible, but not its core purpose." },
          { text: "Styling websites", correct: false, explanation: "That's CSS." },
        ],
        hint: "It runs JavaScript outside the browser.",
      },
      {
        question: "Which module is used to create a server in Node.js?",
        options: [
          { text: "http", correct: true, explanation: "The built-in 'http' module creates web servers." },
          { text: "fs", correct: false, explanation: "Used for file system operations." },
          { text: "url", correct: false, explanation: "For URL parsing." },
          { text: "net", correct: false, explanation: "For lower-level network tasks." },
        ],
        hint: "It starts with 'h'.",
      },
      {
        question: "Which function outputs text to the console?",
        options: [
          { text: "console.log()", correct: true, explanation: "Prints output to console." },
          { text: "print()", correct: false, explanation: "Not valid in Node.js." },
          { text: "echo()", correct: false, explanation: "Used in PHP, not Node." },
          { text: "show()", correct: false, explanation: "Not a Node method." },
        ],
        hint: "It's the most common debug tool.",
      },
      {
        question: "What is npm used for?",
        options: [
          { text: "Managing Node.js packages", correct: true, explanation: "npm handles package installation and versioning." },
          { text: "Running the server", correct: false, explanation: "No, it installs modules." },
          { text: "Debugging code", correct: false, explanation: "Not primarily." },
          { text: "Compiling JavaScript", correct: false, explanation: "Node.js doesn't compile JS." },
        ],
        hint: "Comes bundled with Node.js.",
      },
      {
        question: "Which command initializes a Node.js project?",
        options: [
          { text: "npm init", correct: true, explanation: "Creates a package.json file." },
          { text: "node start", correct: false, explanation: "Used to run scripts." },
          { text: "npm install", correct: false, explanation: "Installs dependencies." },
          { text: "node init", correct: false, explanation: "Not a valid command." },
        ],
        hint: "Used once per new project.",
      },
    ],
  },

  {
    category: "node",
    level: "Intermediate",
    questions: [
      {
        question: "Which module handles file system operations?",
        options: [
          { text: "fs", correct: true, explanation: "fs provides file read/write capabilities." },
          { text: "http", correct: false, explanation: "Handles web requests." },
          { text: "path", correct: false, explanation: "Manages file paths." },
          { text: "url", correct: false, explanation: "Handles URL parsing." },
        ],
        hint: "Short for 'file system'.",
      },
      {
        question: "What does 'require()' do?",
        options: [
          { text: "Imports modules", correct: true, explanation: "Loads built-in or custom modules." },
          { text: "Defines variables", correct: false, explanation: "No." },
          { text: "Creates HTTP servers", correct: false, explanation: "Not directly." },
          { text: "Executes system commands", correct: false, explanation: "No." },
        ],
        hint: "Used to include code.",
      },
      {
        question: "Which global object provides information about the current module?",
        options: [
          { text: "__dirname", correct: false, explanation: "Gives directory path only." },
          { text: "module", correct: true, explanation: "Contains info like exports and filename." },
          { text: "exports", correct: false, explanation: "Exports objects." },
          { text: "process", correct: false, explanation: "Provides environment info." },
        ],
        hint: "Holds metadata of current file.",
      },
      {
        question: "Which stream method is used to read data?",
        options: [
          { text: "read()", correct: true, explanation: "Used for reading chunks from stream." },
          { text: "write()", correct: false, explanation: "Writes data." },
          { text: "pipe()", correct: false, explanation: "Transfers data between streams." },
          { text: "close()", correct: false, explanation: "Ends the stream." },
        ],
        hint: "Think reading from file or socket.",
      },
      {
        question: "What does process.exit() do?",
        options: [
          { text: "Stops Node.js process", correct: true, explanation: "Terminates current process." },
          { text: "Restarts server", correct: false, explanation: "No automatic restart." },
          { text: "Clears memory", correct: false, explanation: "Not its function." },
          { text: "Logs exit code", correct: false, explanation: "It exits, doesn’t log." },
        ],
        hint: "Used to end the app manually.",
      },
    ],
  },

  {
    category: "node",
    level: "Advanced",
    questions: [
      {
        question: "Which library is used for building REST APIs in Node.js?",
        options: [
          { text: "Express.js", correct: true, explanation: "Most popular framework for APIs." },
          { text: "React", correct: false, explanation: "Frontend library." },
          { text: "Next.js", correct: false, explanation: "Full-stack framework." },
          { text: "MongoDB", correct: false, explanation: "Database, not framework." },
        ],
        hint: "Starts with 'E'.",
      },
      {
        question: "What does 'cluster' module do?",
        options: [
          { text: "Allows Node.js to use multiple CPU cores", correct: true, explanation: "Helps scale performance." },
          { text: "Handles database pooling", correct: false, explanation: "Not its job." },
          { text: "Runs background jobs", correct: false, explanation: "No." },
          { text: "Manages events", correct: false, explanation: "Different module." },
        ],
        hint: "Improves scalability.",
      },
      {
        question: "What is event loop responsible for?",
        options: [
          { text: "Handling asynchronous callbacks", correct: true, explanation: "Manages non-blocking I/O." },
          { text: "Blocking threads", correct: false, explanation: "Node.js avoids blocking." },
          { text: "Running external programs", correct: false, explanation: "Not directly." },
          { text: "Creating threads", correct: false, explanation: "Node uses single thread." },
        ],
        hint: "Core of Node’s async behavior.",
      },
      {
        question: "Which module allows compression in Node.js?",
        options: [
          { text: "zlib", correct: true, explanation: "Provides compression (gzip/deflate)." },
          { text: "fs", correct: false, explanation: "For file handling." },
          { text: "http", correct: false, explanation: "Handles requests." },
          { text: "crypto", correct: false, explanation: "For encryption." },
        ],
        hint: "Used for zipping data.",
      },
      {
        question: "What is the purpose of the 'buffer' module?",
        options: [
          { text: "To handle binary data", correct: true, explanation: "Buffers store raw binary data." },
          { text: "To compress files", correct: false, explanation: "That's zlib." },
          { text: "To encrypt strings", correct: false, explanation: "That's crypto." },
          { text: "To log errors", correct: false, explanation: "No." },
        ],
        hint: "Used in streams and network I/O.",
      },
    ],
  },
  {
  category: "express",
  level: "Beginner",
  questions: [
    {
      question: "What is Express.js?",
      options: [
        { text: "A web framework for Node.js", correct: true, explanation: "Express.js is a minimal and flexible Node.js framework for building web applications and APIs." },
        { text: "A database management system", correct: false, explanation: "That’s not correct, Express isn’t a database system." },
        { text: "A frontend JavaScript library", correct: false, explanation: "That would describe React or Vue, not Express." },
        { text: "A CSS preprocessor", correct: false, explanation: "That refers to tools like Sass or LESS." },
      ],
      hint: "It runs on top of Node.js.",
    },
    {
      question: "Which command installs Express.js?",
      options: [
        { text: "npm install express", correct: true, explanation: "This installs Express.js in your project using npm." },
        { text: "node install express", correct: false, explanation: "Invalid command; use npm instead." },
        { text: "express init", correct: false, explanation: "That’s not the right way to install Express." },
        { text: "npm express", correct: false, explanation: "Missing the 'install' keyword." },
      ],
      hint: "It uses npm as the package manager.",
    },
    {
      question: "Which method handles GET requests in Express?",
      options: [
        { text: "app.get()", correct: true, explanation: "The app.get() method is used to define routes for HTTP GET requests." },
        { text: "app.post()", correct: false, explanation: "Used for POST requests instead." },
        { text: "app.listen()", correct: false, explanation: "Used to start the server." },
        { text: "app.route()", correct: false, explanation: "Used to define routes but not handle them directly." },
      ],
      hint: "It's named after the HTTP method itself.",
    },
    {
      question: "Which method starts the Express server?",
      options: [
        { text: "app.listen()", correct: true, explanation: "This method binds and listens for connections on a specified port." },
        { text: "app.start()", correct: false, explanation: "No such method exists in Express." },
        { text: "server.run()", correct: false, explanation: "Not valid in Express." },
        { text: "app.connect()", correct: false, explanation: "Incorrect; it doesn’t connect servers." },
      ],
      hint: "Used with a port number like 3000.",
    },
    {
      question: "What is middleware in Express?",
      options: [
        { text: "Functions that handle requests before they reach the route", correct: true, explanation: "Middleware functions can modify requests, responses, or call the next handler." },
        { text: "Database queries", correct: false, explanation: "Middleware is not about databases." },
        { text: "HTML templates", correct: false, explanation: "That’s unrelated to middleware." },
        { text: "Client-side code", correct: false, explanation: "Middleware runs on the server side." },
      ],
      hint: "It comes between request and response.",
    },
  ],
},

{
  category: "express",
  level: "Intermediate",
  questions: [
    {
      question: "What does 'app.use()' do in Express?",
      options: [
        { text: "Mounts middleware functions", correct: true, explanation: "app.use() is used to load middleware functions that run for all requests." },
        { text: "Creates routes", correct: false, explanation: "It doesn’t define specific routes." },
        { text: "Connects to the database", correct: false, explanation: "Not related to databases." },
        { text: "Starts the server", correct: false, explanation: "That’s done using app.listen()." },
      ],
      hint: "Used to apply middleware globally.",
    },
    {
      question: "How can you access route parameters in Express?",
      options: [
        { text: "Using req.params", correct: true, explanation: "Route parameters are accessed via req.params object." },
        { text: "Using req.query", correct: false, explanation: "req.query handles query strings, not route params." },
        { text: "Using req.body", correct: false, explanation: "req.body handles POST data." },
        { text: "Using app.params", correct: false, explanation: "No such property exists." },
      ],
      hint: "It starts with 'req.'.",
    },
    {
      question: "What is the default port commonly used for Express apps?",
      options: [
        { text: "3000", correct: true, explanation: "Port 3000 is commonly used for local Express servers." },
        { text: "80", correct: false, explanation: "That’s for HTTP servers in production." },
        { text: "22", correct: false, explanation: "Used for SSH, not HTTP." },
        { text: "8080", correct: false, explanation: "Also used sometimes, but not the default in Express examples." },
      ],
      hint: "Commonly seen in tutorials and examples.",
    },
    {
      question: "How do you send a JSON response in Express?",
      options: [
        { text: "res.json()", correct: true, explanation: "res.json() sends a JSON response automatically setting content type." },
        { text: "res.write()", correct: false, explanation: "Used in Node.js core, not ideal in Express." },
        { text: "res.render()", correct: false, explanation: "Used for rendering templates." },
        { text: "res.end()", correct: false, explanation: "Ends the response but doesn’t format it." },
      ],
      hint: "Starts with 'res.'.",
    },
    {
      question: "What is body-parser used for?",
      options: [
        { text: "To parse incoming request bodies", correct: true, explanation: "body-parser helps read data from forms or JSON payloads." },
        { text: "To route requests", correct: false, explanation: "That’s Express Router’s role." },
        { text: "To authenticate users", correct: false, explanation: "That’s not its function." },
        { text: "To log server activity", correct: false, explanation: "Used by Morgan, not body-parser." },
      ],
      hint: "It helps with req.body access.",
    },
  ],
},

{
  category: "express",
  level: "Advanced",
  questions: [
    {
      question: "What is Express Router used for?",
      options: [
        { text: "To modularize routes", correct: true, explanation: "Router helps separate routes into different files for better organization." },
        { text: "To handle database models", correct: false, explanation: "Routers deal with routing, not databases." },
        { text: "To start servers", correct: false, explanation: "That’s app.listen()." },
        { text: "To serve static files", correct: false, explanation: "Handled by express.static()." },
      ],
      hint: "Used for clean and modular route handling.",
    },
    {
      question: "Which middleware is used for logging requests?",
      options: [
        { text: "morgan", correct: true, explanation: "Morgan logs HTTP requests in various formats." },
        { text: "body-parser", correct: false, explanation: "Used for parsing request bodies." },
        { text: "helmet", correct: false, explanation: "Adds security headers." },
        { text: "cors", correct: false, explanation: "Enables cross-origin requests." },
      ],
      hint: "Its name starts with 'm'.",
    },
    {
      question: "How do you handle errors globally in Express?",
      options: [
        { text: "By using an error-handling middleware", correct: true, explanation: "Define a middleware with four parameters: (err, req, res, next)." },
        { text: "Using try-catch in all routes", correct: false, explanation: "Not scalable for global handling." },
        { text: "By using res.send('error')", correct: false, explanation: "This doesn’t handle all cases." },
        { text: "By restarting the server", correct: false, explanation: "Does not solve the error handling issue." },
      ],
      hint: "It includes 'err' as the first argument.",
    },
    {
      question: "What does 'helmet' middleware do?",
      options: [
        { text: "Enhances app security with HTTP headers", correct: true, explanation: "Helmet sets various security-related HTTP headers to protect apps." },
        { text: "Handles authentication", correct: false, explanation: "That’s Passport.js or JWT." },
        { text: "Manages cookies", correct: false, explanation: "That’s cookie-parser." },
        { text: "Logs server activity", correct: false, explanation: "That’s Morgan." },
      ],
      hint: "It adds protection headers.",
    },
    {
      question: "How can you serve static files in Express?",
      options: [
        { text: "Using express.static()", correct: true, explanation: "Serves static assets like HTML, CSS, or images." },
        { text: "Using app.get()", correct: false, explanation: "For routes, not static files." },
        { text: "Using app.render()", correct: false, explanation: "For templates only." },
        { text: "Using res.json()", correct: false, explanation: "For sending JSON data." },
      ],
      hint: "It’s a built-in middleware function.",
    },
  ],
},
{
  category: "mongodb",
  level: "Beginner",
  questions: [
    {
      question: "What is MongoDB primarily used for?",
      options: [
        { text: "Storing and managing documents", correct: true, explanation: "MongoDB stores data in flexible JSON-like documents." },
        { text: "Designing web pages", correct: false, explanation: "That's frontend work." },
        { text: "Compiling code", correct: false, explanation: "MongoDB is not a compiler." },
        { text: "Styling applications", correct: false, explanation: "That's handled by CSS." },
      ],
      hint: "It’s a NoSQL document database.",
    },
    {
      question: "Which format does MongoDB use to store data?",
      options: [
        { text: "BSON", correct: true, explanation: "MongoDB uses BSON, a binary form of JSON." },
        { text: "XML", correct: false, explanation: "Used in older systems, not MongoDB." },
        { text: "YAML", correct: false, explanation: "Used for configs, not storage." },
        { text: "CSV", correct: false, explanation: "Used for flat data, not structured documents." },
      ],
      hint: "It's a binary JSON.",
    },
    {
      question: "Which command shows all databases in MongoDB shell?",
      options: [
        { text: "show dbs", correct: true, explanation: "Lists all available databases." },
        { text: "list databases", correct: false, explanation: "Invalid command." },
        { text: "db.show()", correct: false, explanation: "Incorrect syntax." },
        { text: "display dbs", correct: false, explanation: "Not valid in shell." },
      ],
      hint: "Starts with 'show'.",
    },
    {
      question: "Which method inserts a single document into a collection?",
      options: [
        { text: "insertOne()", correct: true, explanation: "Inserts one document into a collection." },
        { text: "insertMany()", correct: false, explanation: "Used to insert multiple documents." },
        { text: "add()", correct: false, explanation: "No such method in MongoDB." },
        { text: "push()", correct: false, explanation: "Used in arrays, not DBs." },
      ],
      hint: "Ends with 'One'.",
    },
    {
      question: "What is the default port for MongoDB?",
      options: [
        { text: "27017", correct: true, explanation: "Default port for MongoDB connections." },
        { text: "8080", correct: false, explanation: "Common for web servers." },
        { text: "3306", correct: false, explanation: "Used by MySQL." },
        { text: "1521", correct: false, explanation: "Used by Oracle DB." },
      ],
      hint: "Starts with 27.",
    },
  ],
},

{
  category: "mongodb",
  level: "Intermediate",
  questions: [
    {
      question: "Which method retrieves all documents from a collection?",
      options: [
        { text: "find()", correct: true, explanation: "Returns all documents matching a query." },
        { text: "search()", correct: false, explanation: "Not a valid method." },
        { text: "getAll()", correct: false, explanation: "Doesn't exist in MongoDB." },
        { text: "fetch()", correct: false, explanation: "Not used in MongoDB API." },
      ],
      hint: "It's the most commonly used query method.",
    },
    {
      question: "Which operator is used to match values greater than a given value?",
      options: [
        { text: "$gt", correct: true, explanation: "Stands for 'greater than'." },
        { text: "$lt", correct: false, explanation: "Means 'less than'." },
        { text: "$gte", correct: false, explanation: "Means 'greater than or equal'." },
        { text: "$ne", correct: false, explanation: "Means 'not equal'." },
      ],
      hint: "Think of 'greater than'.",
    },
    {
      question: "Which function updates a document in MongoDB?",
      options: [
        { text: "updateOne()", correct: true, explanation: "Updates a single matching document." },
        { text: "updateMany()", correct: false, explanation: "Updates multiple documents." },
        { text: "modify()", correct: false, explanation: "Not a valid method." },
        { text: "replace()", correct: false, explanation: "Replaces, not updates." },
      ],
      hint: "Ends with 'One'.",
    },
    {
      question: "What is a 'collection' in MongoDB?",
      options: [
        { text: "A group of related documents", correct: true, explanation: "Collections hold multiple related documents." },
        { text: "A single record", correct: false, explanation: "That's a document." },
        { text: "A database", correct: false, explanation: "Database holds collections." },
        { text: "A query result", correct: false, explanation: "Temporary output, not storage." },
      ],
      hint: "Similar to a 'table' in SQL.",
    },
    {
      question: "Which command removes all documents from a collection?",
      options: [
        { text: "deleteMany()", correct: true, explanation: "Removes multiple documents matching criteria." },
        { text: "removeAll()", correct: false, explanation: "Not valid in MongoDB." },
        { text: "clear()", correct: false, explanation: "Not a Mongo method." },
        { text: "drop()", correct: false, explanation: "Drops entire collection, not documents." },
      ],
      hint: "Ends with 'Many'.",
    },
  ],
},

{
  category: "mongodb",
  level: "Advanced",
  questions: [
    {
      question: "What is the Aggregation Framework used for?",
      options: [
        { text: "Processing and transforming data", correct: true, explanation: "Used for advanced data analysis and transformations." },
        { text: "Storing backups", correct: false, explanation: "That’s done externally." },
        { text: "Defining schemas", correct: false, explanation: "Done using ODMs like Mongoose." },
        { text: "Indexing collections", correct: false, explanation: "That's separate functionality." },
      ],
      hint: "Used to compute statistics or summaries.",
    },
    {
      question: "What does an index improve in MongoDB?",
      options: [
        { text: "Query performance", correct: true, explanation: "Indexes make queries faster by reducing scan time." },
        { text: "Storage space", correct: false, explanation: "Indexes actually increase storage usage slightly." },
        { text: "Data accuracy", correct: false, explanation: "Indexes don’t affect data correctness." },
        { text: "Replication", correct: false, explanation: "Unrelated to indexing." },
      ],
      hint: "Helps in faster search.",
    },
    {
      question: "Which type of replication ensures high availability?",
      options: [
        { text: "Replica Set", correct: true, explanation: "Replica sets maintain multiple data copies for failover." },
        { text: "Sharding", correct: false, explanation: "Used for horizontal scaling, not redundancy." },
        { text: "Indexing", correct: false, explanation: "Used for performance." },
        { text: "Clustering", correct: false, explanation: "Not a MongoDB concept directly." },
      ],
      hint: "Contains primary and secondary nodes.",
    },
    {
      question: "What is sharding in MongoDB?",
      options: [
        { text: "Distributing data across multiple servers", correct: true, explanation: "Used for handling large-scale datasets." },
        { text: "Encrypting data", correct: false, explanation: "That's a security feature." },
        { text: "Backing up data", correct: false, explanation: "Not the same as distribution." },
        { text: "Replicating data", correct: false, explanation: "That’s replica sets." },
      ],
      hint: "Used to scale horizontally.",
    },
    {
      question: "Which operator performs logical OR in queries?",
      options: [
        { text: "$or", correct: true, explanation: "Matches documents that satisfy at least one condition." },
        { text: "$and", correct: false, explanation: "Requires all conditions to be true." },
        { text: "$nor", correct: false, explanation: "Returns documents failing all conditions." },
        { text: "$not", correct: false, explanation: "Negates a condition." },
      ],
      hint: "Used when any condition should match.",
    },
  ],
},
{
  category: "sql",
  level: "Beginner",
  questions: [
    {
      question: "What is MySQL primarily used for?",
      options: [
        { text: "Storing and managing relational data", correct: true, explanation: "MySQL is a relational database management system (RDBMS) used for structured data storage." },
        { text: "Creating websites", correct: false, explanation: "That's the role of HTML/CSS/JS." },
        { text: "Designing user interfaces", correct: false, explanation: "That's frontend work." },
        { text: "Running server-side JavaScript", correct: false, explanation: "That's Node.js." },
      ],
      hint: "It deals with tables, rows, and columns.",
    },
    {
      question: "Which SQL statement is used to retrieve data from a database?",
      options: [
        { text: "SELECT", correct: true, explanation: "The SELECT statement fetches data from one or more tables." },
        { text: "GET", correct: false, explanation: "No such SQL keyword." },
        { text: "SHOW", correct: false, explanation: "Used for displaying metadata, not table rows." },
        { text: "FETCH", correct: false, explanation: "Not standard standalone SQL syntax." },
      ],
      hint: "It begins with 'S'.",
    },
    {
      question: "Which command is used to insert data into a MySQL table?",
      options: [
        { text: "INSERT INTO", correct: true, explanation: "INSERT INTO adds new rows to a table." },
        { text: "UPDATE", correct: false, explanation: "Used to modify existing data." },
        { text: "ADD", correct: false, explanation: "Not a valid SQL keyword for data insertion." },
        { text: "CREATE", correct: false, explanation: "Creates database objects like tables." },
      ],
      hint: "Used when adding new rows.",
    },
    {
      question: "Which MySQL data type is best for storing text up to 255 characters?",
      options: [
        { text: "VARCHAR", correct: true, explanation: "VARCHAR can store variable-length text up to 255 characters." },
        { text: "CHAR", correct: false, explanation: "Fixed-length, not ideal for variable text." },
        { text: "TEXT", correct: false, explanation: "Stores larger text, more than 255 characters." },
        { text: "STRING", correct: false, explanation: "Not a valid MySQL type." },
      ],
      hint: "Commonly used for names or short text.",
    },
    {
      question: "What does the WHERE clause do?",
      options: [
        { text: "Filters rows based on conditions", correct: true, explanation: "WHERE specifies which rows should be included in the result." },
        { text: "Sorts the output", correct: false, explanation: "That’s ORDER BY." },
        { text: "Groups data", correct: false, explanation: "That’s GROUP BY." },
        { text: "Creates indexes", correct: false, explanation: "No, that’s CREATE INDEX." },
      ],
      hint: "Used to apply conditions in queries.",
    },
  ],
},

{
  category: "sql",
  level: "Intermediate",
  questions: [
    {
      question: "Which keyword is used to sort query results?",
      options: [
        { text: "ORDER BY", correct: true, explanation: "ORDER BY sorts the result set in ascending or descending order." },
        { text: "SORT", correct: false, explanation: "Not a valid SQL keyword." },
        { text: "GROUP BY", correct: false, explanation: "Used to group rows, not sort them." },
        { text: "ARRANGE", correct: false, explanation: "Not SQL syntax." },
      ],
      hint: "You can combine it with ASC or DESC.",
    },
    {
      question: "What does the JOIN clause do?",
      options: [
        { text: "Combines rows from two or more tables", correct: true, explanation: "JOIN merges related data based on a common column." },
        { text: "Deletes duplicate data", correct: false, explanation: "That’s DISTINCT." },
        { text: "Filters results", correct: false, explanation: "That’s WHERE." },
        { text: "Creates relationships", correct: false, explanation: "JOIN uses existing relationships." },
      ],
      hint: "Used to connect multiple tables.",
    },
    {
      question: "Which SQL function returns the number of rows in a table?",
      options: [
        { text: "COUNT()", correct: true, explanation: "COUNT() gives the total number of rows." },
        { text: "SUM()", correct: false, explanation: "Adds numeric values." },
        { text: "MAX()", correct: false, explanation: "Returns the largest value." },
        { text: "TOTAL()", correct: false, explanation: "Not a valid function." },
      ],
      hint: "It counts, literally.",
    },
    {
      question: "What is a primary key?",
      options: [
        { text: "A unique identifier for each row", correct: true, explanation: "Primary keys uniquely identify records and cannot be NULL." },
        { text: "A foreign key", correct: false, explanation: "Foreign keys reference primary keys from other tables." },
        { text: "A type of index", correct: false, explanation: "It’s more than just an index—it enforces uniqueness." },
        { text: "A duplicate field", correct: false, explanation: "Opposite of unique." },
      ],
      hint: "It’s always unique and non-null.",
    },
    {
      question: "Which statement removes all records from a table but keeps its structure?",
      options: [
        { text: "TRUNCATE", correct: true, explanation: "TRUNCATE quickly removes all rows but retains the table schema." },
        { text: "DELETE", correct: false, explanation: "Removes rows one by one; slower." },
        { text: "DROP", correct: false, explanation: "Deletes the table itself." },
        { text: "CLEAR", correct: false, explanation: "Not valid SQL syntax." },
      ],
      hint: "Used when you want to empty a table fast.",
    },
  ],
},

{
  category: "sql",
  level: "Advanced",
  questions: [
    {
      question: "What is a foreign key used for?",
      options: [
        { text: "To enforce referential integrity", correct: true, explanation: "Foreign keys ensure relationships between tables remain valid." },
        { text: "To speed up queries", correct: false, explanation: "That’s an index." },
        { text: "To store JSON data", correct: false, explanation: "Use JSON data type for that." },
        { text: "To define user privileges", correct: false, explanation: "That’s part of GRANT/REVOKE." },
      ],
      hint: "Connects parent and child tables.",
    },
    {
      question: "Which MySQL engine supports transactions?",
      options: [
        { text: "InnoDB", correct: true, explanation: "InnoDB supports ACID transactions and foreign keys." },
        { text: "MyISAM", correct: false, explanation: "Doesn’t support transactions." },
        { text: "Memory", correct: false, explanation: "Used for temporary data; no transactions." },
        { text: "CSV", correct: false, explanation: "Stores data in plain text files." },
      ],
      hint: "It’s the default engine in modern MySQL.",
    },
    {
      question: "What does the INDEX do?",
      options: [
        { text: "Speeds up data retrieval", correct: true, explanation: "Indexes make searches and joins faster." },
        { text: "Stores table schema", correct: false, explanation: "That’s in metadata." },
        { text: "Compresses data", correct: false, explanation: "Indexes don’t compress." },
        { text: "Prevents duplicate data", correct: false, explanation: "That’s UNIQUE constraint." },
      ],
      hint: "Used for performance optimization.",
    },
    {
      question: "What does the GROUP BY clause do?",
      options: [
        { text: "Groups rows sharing a property into summary rows", correct: true, explanation: "GROUP BY is used with aggregate functions like SUM or COUNT." },
        { text: "Filters specific rows", correct: false, explanation: "That’s WHERE." },
        { text: "Sorts rows alphabetically", correct: false, explanation: "That’s ORDER BY." },
        { text: "Joins two tables", correct: false, explanation: "That’s JOIN." },
      ],
      hint: "Often used with aggregate functions.",
    },
    {
      question: "Which SQL clause is used to filter groups?",
      options: [
        { text: "HAVING", correct: true, explanation: "HAVING filters group results after aggregation." },
        { text: "WHERE", correct: false, explanation: "Filters rows before grouping." },
        { text: "ORDER BY", correct: false, explanation: "Only sorts results." },
        { text: "FILTER", correct: false, explanation: "Not a valid clause in MySQL." },
      ],
      hint: "Comes after GROUP BY.",
    },
  ],
},
{
  category: "vue",
  level: "Beginner",
  questions: [
    {
      question: "What is Vue.js primarily used for?",
      options: [
        { text: "Building user interfaces", correct: true, explanation: "Vue.js is a progressive framework for building interactive UIs." },
        { text: "Managing databases", correct: false, explanation: "Vue doesn't handle databases directly." },
        { text: "Creating server APIs", correct: false, explanation: "That's done with Node.js or similar." },
        { text: "Styling web pages", correct: false, explanation: "That’s CSS’s job." },
      ],
      hint: "It focuses on the 'View' layer of MVC.",
    },
    {
      question: "Which command creates a new Vue.js project using Vue CLI?",
      options: [
        { text: "vue create project-name", correct: true, explanation: "This initializes a new Vue project using Vue CLI." },
        { text: "npm init vue", correct: false, explanation: "That’s used with Vite setup, not CLI." },
        { text: "npx create-vue-app", correct: false, explanation: "Not an official CLI command." },
        { text: "vue start", correct: false, explanation: "There’s no such command." },
      ],
      hint: "It starts with 'vue create'.",
    },
    {
      question: "Which directive is used for data binding in Vue.js?",
      options: [
        { text: "v-bind", correct: true, explanation: "v-bind dynamically binds data to attributes or props." },
        { text: "v-if", correct: false, explanation: "Used for conditional rendering." },
        { text: "v-for", correct: false, explanation: "Used for looping through data." },
        { text: "v-show", correct: false, explanation: "Controls visibility, not binding." },
      ],
      hint: "Starts with 'v-'.",
    },
    {
      question: "What is the correct syntax for interpolation in Vue.js templates?",
      options: [
        { text: "{{ message }}", correct: true, explanation: "Double curly braces are used for data interpolation." },
        { text: "[[ message ]]", correct: false, explanation: "That’s not valid syntax." },
        { text: "( message )", correct: false, explanation: "Invalid in templates." },
        { text: "{ message }", correct: false, explanation: "Missing one curly brace." },
      ],
      hint: "It uses double curly braces.",
    },
    {
      question: "What file is the main entry point for a Vue.js app?",
      options: [
        { text: "main.js", correct: true, explanation: "main.js is the entry point that initializes the app." },
        { text: "App.vue", correct: false, explanation: "It’s the root component, not the entry point." },
        { text: "index.html", correct: false, explanation: "Used for mounting, not logic." },
        { text: "config.js", correct: false, explanation: "Not related to app entry." },
      ],
      hint: "It usually mounts the app to the DOM.",
    },
  ],
},

{
  category: "vue",
  level: "Intermediate",
  questions: [
    {
      question: "Which lifecycle hook runs after the component is mounted?",
      options: [
        { text: "mounted()", correct: true, explanation: "The mounted() hook is called after the component is added to the DOM." },
        { text: "created()", correct: false, explanation: "Called before the DOM is mounted." },
        { text: "beforeMount()", correct: false, explanation: "Called just before mounting." },
        { text: "updated()", correct: false, explanation: "Called when data changes." },
      ],
      hint: "It has direct DOM access.",
    },
    {
      question: "What is 'v-model' used for in Vue.js?",
      options: [
        { text: "Two-way data binding", correct: true, explanation: "v-model synchronizes input fields with data properties." },
        { text: "Conditional rendering", correct: false, explanation: "Use v-if for that." },
        { text: "Loop rendering", correct: false, explanation: "Use v-for instead." },
        { text: "Styling elements", correct: false, explanation: "Handled by CSS." },
      ],
      hint: "Used in form inputs.",
    },
    {
      question: "How do you pass data from a parent to a child component?",
      options: [
        { text: "Using props", correct: true, explanation: "Props allow parent components to pass data to children." },
        { text: "Using emits", correct: false, explanation: "Emits are for sending data from child to parent." },
        { text: "Using Vuex", correct: false, explanation: "Used for global state, not direct passing." },
        { text: "Using slots", correct: false, explanation: "Used to pass markup, not reactive data." },
      ],
      hint: "They are declared in the child component.",
    },
    {
      question: "Which directive is used to loop through items in Vue.js?",
      options: [
        { text: "v-for", correct: true, explanation: "v-for renders a list based on an array or object." },
        { text: "v-if", correct: false, explanation: "Handles conditional display." },
        { text: "v-bind", correct: false, explanation: "Binds data to attributes." },
        { text: "v-on", correct: false, explanation: "Handles event listeners." },
      ],
      hint: "It’s similar to a 'for' loop.",
    },
    {
      question: "What is the purpose of 'computed' properties in Vue.js?",
      options: [
        { text: "To cache derived data", correct: true, explanation: "Computed properties recalculate only when dependencies change." },
        { text: "To store raw data", correct: false, explanation: "That’s for data properties." },
        { text: "To handle asynchronous code", correct: false, explanation: "Not intended for async operations." },
        { text: "To trigger side effects", correct: false, explanation: "That’s what watchers do." },
      ],
      hint: "They behave like dynamic variables.",
    },
  ],
},

{
  category: "vue",
  level: "Advanced",
  questions: [
    {
      question: "What is Vuex used for?",
      options: [
        { text: "State management", correct: true, explanation: "Vuex is a centralized store for managing state across components." },
        { text: "Routing", correct: false, explanation: "That’s Vue Router’s role." },
        { text: "Component styling", correct: false, explanation: "Handled with CSS or scoped styles." },
        { text: "Form validation", correct: false, explanation: "Handled by third-party libraries." },
      ],
      hint: "Think centralized state.",
    },
    {
      question: "Which package provides client-side routing in Vue.js?",
      options: [
        { text: "vue-router", correct: true, explanation: "vue-router enables navigation between pages in Vue apps." },
        { text: "vuex", correct: false, explanation: "Manages app state, not routes." },
        { text: "axios", correct: false, explanation: "Used for HTTP requests." },
        { text: "router-dom", correct: false, explanation: "Used in React, not Vue." },
      ],
      hint: "It’s an official routing library.",
    },
    {
      question: "How can you optimize performance in large Vue apps?",
      options: [
        { text: "Use lazy loading and code splitting", correct: true, explanation: "It loads components only when needed." },
        { text: "Bundle all code together", correct: false, explanation: "That increases load time." },
        { text: "Avoid using components", correct: false, explanation: "Components are essential in Vue." },
        { text: "Turn off reactivity", correct: false, explanation: "That breaks data binding." },
      ],
      hint: "Used with dynamic imports.",
    },
    {
      question: "What is the Composition API in Vue 3?",
      options: [
        { text: "A new way to write reusable logic", correct: true, explanation: "It lets developers organize logic by feature, not lifecycle." },
        { text: "An event listener", correct: false, explanation: "No, it’s for component logic." },
        { text: "A CSS styling method", correct: false, explanation: "Not related to styling." },
        { text: "A Vue plugin", correct: false, explanation: "It’s part of the core API." },
      ],
      hint: "It uses 'setup()'.",
    },
    {
      question: "Which directive listens to DOM events?",
      options: [
        { text: "v-on", correct: true, explanation: "v-on attaches event listeners like @click or @input." },
        { text: "v-bind", correct: false, explanation: "Binds data to attributes." },
        { text: "v-if", correct: false, explanation: "Handles conditional rendering." },
        { text: "v-for", correct: false, explanation: "Used for iteration." },
      ],
      hint: "Often replaced by '@' shorthand.",
    },
  ],
},

];


// Load custom quizzes from localStorage if any
const storedCustomQuiz = JSON.parse(localStorage.getItem("CustomQuiz") || "[]");

if (storedCustomQuiz.length > 0) {
  storedCustomQuiz.forEach((quiz) => {
    quizzes.push({
      category: quiz.category || "Custom",
      level: quiz.difficulty || "Beginner",
      questions: quiz.questions.map((q) => ({
        question: q.question,
        options: q.options.map((opt, i) => ({
          text: opt,
          correct: i === q.correctIndex,
        })),
        hint: "Your custom question!",
      })),
    });
  });
}
