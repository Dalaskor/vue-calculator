<!-- eslint-disable -->
<template>
  <div class="calculator">
    <div class="container">
      <div class="calculator__content">
        <div class="calculator__display">
          {{ current || "0" }}
        </div>
        <div class="calculator__btns">
          <button @click="btnClear" class="btn">AC</button>
          <button @click="btnSign" class="btn">+/-</button>
          <button @click="btnPercent" class="btn">%</button>
          <button @click="btnDivide" class="btn btn__operator">÷</button>
          <button @click="btnAppend('7')" class="btn">7</button>
          <button @click="btnAppend('8')" class="btn">8</button>
          <button @click="btnAppend('9')" class="btn">9</button>
          <button @click="btnTimes" class="btn btn__operator">×</button>
          <button @click="btnAppend('4')" class="btn">4</button>
          <button @click="btnAppend('5')" class="btn">5</button>
          <button @click="btnAppend('6')" class="btn">6</button>
          <button @click="btnMinus" class="btn btn__operator">-</button>
          <button @click="btnAppend('1')" class="btn">1</button>
          <button @click="btnAppend('2')" class="btn">2</button>
          <button @click="btnAppend('3')" class="btn">3</button>
          <button @click="btnAdd" class="btn btn__operator">+</button>
          <button @click="btnAppend('0')" class="btn btn__zero">0</button>
          <button @click="btnDot" class="btn">.</button>
          <button @click="btnEqual" class="btn btn__operator">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    btnClear() {
      this.current = '';
    },
    btnSign() {
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
    },
    btnPercent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    btnAppend(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    btnDot() {
      if (this.current.indexOf('.') === -1) {
        this.btnAppend('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    btnDivide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    btnTimes() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    btnMinus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    btnAdd() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    btnEqual() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous),
      )}`;
      this.previous = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 458px;
  margin: 0 auto;
  padding: 0px 15px;
}

.calculator{
  &__content {
    display: flex;
    flex-direction: column;
    width: 428px;
    height: 926px;
    background: #151515;
    border: 10px solid rgba(51, 51, 51, 0.6);
    box-shadow: 0px 4px 85px 42px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }
  &__display {
    height: 377px;
    font-weight: 400;
    font-size: 62px;
    line-height: 136px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    margin: 0 21px 33px 0;
  }
  &__btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 12px;
  }
}

.btn {
  width: 90px;
  height: 90px;
  background: #333333;
  border: 3px solid #333333;
  box-shadow: inset 4px 1px 17px 3px rgba(0, 0, 0, 0.22);
  border-radius: 150px;
  font-weight: 400;
  font-size: 42px;
  line-height: 51px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }
  &__operator {
    background: radial-gradient(213.48% 213.48% at 0% -32.02%, #FAFF00 0%, #FF00F5 100%)
  }
  &__zero {
    width: 192px;
    height: 90px;
  }
}
</style>
