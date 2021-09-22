function largeNumMulti(num1, num2) {
    // 从末尾开始计算乘积
    const num1Arr = num1.split('').reverse()
    const num2Arr = num2.split('').reverse()
    const result = []
    // 填充0，为后面的累加作准备
    result.length = num1Arr.length + num2Arr.length - 1
    result.fill(0)
  
    // result[i + j] 上不断累加对应位的乘积
    num1Arr.forEach((a, i) => {
      num2Arr.forEach((b, j) => {
        result[i + j] += parseInt(a) * parseInt(b)
      })
    })
  
    // 处理 result 进位
    const lastCarry = result.reduce((carry, v, k) => {
      result[k] += carry
      if (result[k] >= 10) {
        const _carry = Math.floor(result[k] / 10)
        result[k] %= 10
        return _carry
      }
      return 0
    }, 0)
    lastCarry && result.push(lastCarry)
  
    return result.reverse().join('')
  }
  
  // 处理异常数值和符号
  function largeNumCalculation(num1, num2, ...others) {
    if (others.length > 0) {
      return largeNumCalculation(largeNumCalculation(num1, num2), others[0], ...others.slice(1))
    }
  
    if (
      Number.isNaN(parseFloat(num1)) ||
      Number.isNaN(parseFloat(num2)) ||
      !/^[0-9-]*$/.test(num1) ||
      !/^[0-9-]*$/.test(num2)
    ) {
      throw new Error('Not a valid number')
    }
  
    const num1Trimmed = num1.trim().replace(/^0+/g, '')
    const num2Trimmed = num2.trim().replace(/^0+/g, '')
  
    const isNum1Positive = !num1[0].startsWith('-')
    const isNum2Positive = !num2[0].startsWith('-')
  
    // 处理符号
    if (num1Trimmed && num2Trimmed) {
      if (isNum1Positive && isNum2Positive) {
        return largeNumMulti(num1Trimmed, num2Trimmed)
      } else if (!isNum1Positive && !isNum2Positive) {
        return largeNumMulti(num1Trimmed.slice(1), num2Trimmed.slice(1))
      } else {
        return (
          '-' +
          largeNumMulti(
            isNum1Positive ? num1Trimmed : num1Trimmed.slice(1),
            isNum2Positive ? num2Trimmed : num2Trimmed.slice(1),
          )
        )
      }
    }
    return num1Trimmed + num2Trimmed
  }
  
  const a = '-3455'
  const b = '-2200'
  console.log(+a * +b)
  console.log(largeNumCalculation(a, b))