
export type MonthYear = {
  month: number
  year: number
}

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonthShortString = currentDate.toLocaleString('en-US', { month: 'short' })
const currentMonthLongString = currentDate.toLocaleString('en-US', { month: 'long' })

const currentMonthYear = (date?: number | Date) => {
  const Month = new Date(date || new Date())
  return { year: Month.getFullYear(), month: Month.getMonth() }
};

const nextMonth = (monthYear: MonthYear) => {
  const nextMonth = new Date(monthYear.year, monthYear.month, 1)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  return { year: nextMonth.getFullYear(), month: nextMonth.getMonth() }
}

const prevMonth = (monthYear: MonthYear) => {
  const prevMonth = new Date(monthYear.year, monthYear.month, 1)
  prevMonth.setMonth(prevMonth.getMonth() - 1)
  return { year: prevMonth.getFullYear(), month: prevMonth.getMonth() }
}


const yearStartFrom = (year = currentYear) => {
  if (year % 20 === 0) {
    return year - 20 + 1
  }
  const startYear = year - (year % 20)
  return startYear + 1
};

export {
  currentYear,
  currentMonthShortString,
  currentMonthLongString,
  currentMonthYear,
  nextMonth,
  prevMonth,
  yearStartFrom,
  }

