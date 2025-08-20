/* Basic Calculator
   - Supports: +, −, ×, ÷, %, ±, AC, DEL, decimals, equals
   - Clicks and keyboard input
*/

const display = document.getElementById('display');
const keys = document.getElementById('keys');

// Internal state
const state = {
  displayValue: '0',          // text shown on display
  firstOperand: null,         // number
  operator: null,             // '+', '−', '×', '÷'
  waitingForSecond: false     // if true, next digit starts a new number
};

// ---------- helpers ----------
function updateDisplay() {
  display.textContent = state.displayValue;
}

function inputDigit(d) {
  if (state.waitingForSecond) {
    state.displayValue = d;
    state.waitingForSecond = false;
  } else {
    state.displayValue = state.displayValue === '0' ? d : state.displayValue + d;
  }
}

function inputDecimal() {
  if (state.waitingForSecond) {
    state.displayValue = '0.';
    state.waitingForSecond = false;
    return;
  }
  if (!state.displayValue.includes('.')) state.displayValue += '.';
}

function handleOperator(nextOp) {
  const inputValue = parseFloat(state.displayValue);

  if (state.operator && state.waitingForSecond) {
    // Change operator before entering second number
    state.operator = nextOp;
    return;
  }

  if (state.firstOperand === null) {
    state.firstOperand = inputValue;
  } else if (state.operator) {
    const result = calculate(state.firstOperand, inputValue, state.operator);
    state.displayValue = String(result);
    state.firstOperand = result;
  }

  state.operator = nextOp;
  state.waitingForSecond = true;
}

function calculate(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '−': return a - b;
    case '×': return a * b;
    case '÷': return b === 0 ? 'Error' : a / b;
    default: return b;
  }
}

function doEquals() {
  const inputValue = parseFloat(state.displayValue);
  if (state.operator === null || state.waitingForSecond) return;

  const result = calculate(state.firstOperand, inputValue, state.operator);
  state.displayValue = String(result);
  state.firstOperand = null;
  state.operator = null;
  state.waitingForSecond = false;
}

function allClear() {
  state.displayValue = '0';
  state.firstOperand = null;
  state.operator = null;
  state.waitingForSecond = false;
}

function del() {
  if (state.waitingForSecond) return;
  state.displayValue = state.displayValue.length > 1
    ? state.displayValue.slice(0, -1)
    : '0';
}

function toggleSign() {
  if (state.displayValue === '0') return;
  state.displayValue = state.displayValue.startsWith('-')
    ? state.displayValue.slice(1)
    : '-' + state.displayValue;
}

function percent() {
  const value = parseFloat(state.displayValue);
  if (!isNaN(value)) state.displayValue = String(value / 100);
}

// ---------- click handling ----------
keys.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.digit) {
    inputDigit(btn.dataset.digit);
    updateDisplay();
    return;
  }

  const action = btn.dataset.action;

  if (action === 'decimal') { inputDecimal(); updateDisplay(); return; }
  if (action === 'operator') { handleOperator(btn.dataset.op); updateDisplay(); return; }
  if (action === 'equals') { doEquals(); updateDisplay(); return; }
  if (action === 'all-clear') { allClear(); updateDisplay(); return; }
  if (action === 'delete') { del(); updateDisplay(); return; }
  if (action === 'percent') { percent(); updateDisplay(); return; }
});

// separate button (±) outside grid
document.querySelector('[data-action="sign"]')?.addEventListener('click', () => {
  toggleSign();
  updateDisplay();
});

// ---------- keyboard support ----------
document.addEventListener('keydown', (e) => {
  const k = e.key;

  if (/\d/.test(k)) { inputDigit(k); updateDisplay(); return; }
  if (k === '.') { inputDecimal(); updateDisplay(); return; }

  if (k === '+' || k === '-') {
    handleOperator(k === '+' ? '+' : '−'); updateDisplay(); return;
  }
  if (k === '*' || k.toLowerCase() === 'x') {
    handleOperator('×'); updateDisplay(); return;
  }
  if (k === '/') { handleOperator('÷'); updateDisplay(); return; }

  if (k === 'Enter' || k === '=') { doEquals(); updateDisplay(); return; }
  if (k === 'Escape') { allClear(); updateDisplay(); return; }
  if (k === 'Backspace') { del(); updateDisplay(); return; }
  if (k === '%') { percent(); updateDisplay(); return; }
});

updateDisplay();
