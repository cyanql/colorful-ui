<template>
	<div>
		<button @click="changeToPrevYear(year)"><<</button>
		<button @click="changeToPrevMonth(month)"><</button>
		<span>
			<span>{{year}}</span>
			<span>年</span>
			<span>{{month + 1}}</span>
			<span>月</span>
		</span>
		<button @click="changeToNextMonth(month)">></button>
		<button @click="changeToNextYear(year)">>></button>
	</div>
	<table>
		<thead>
			<tr>
				<td>一</td>
				<td>二</td>
				<td>三</td>
				<td>四</td>
				<td>五</td>
				<td>六</td>
				<td>日</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="cells in rows">
				<td v-for="cell in cells" :style="{backgroundColor: day === cell ? 'red' : ''}">{{cell}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: 'colorful-datepicker',
	props: {
		value: [Object, String],
		format: String,
		onChange: Function
	},
	data() {
		return {
			date: new Date(this.value),
			year: 0,
			month: 0,
			day: 0
		}
	},
	computed: {
		rows() {
			// 克隆日期对象，并初始化部分数据
			var date = new Date(this.date),
				day = date.getDate(),
				month = date.getMonth(),
				year = date.getFullYear(),
				currDayWeek = date.getDay(),
				firstDayWeek,
				lastDayWeek,
				lastDay,
				prevMonthMaxDay

			this.year = year
			this.month = month
			this.day = day

			// 计算当月最后一天日期和星期
			date.setDate(0)
			lastDay = date.getDate()
			lastDayWeek = date.getDay()
			// 计算当月第一天星期
			date.setDate(1)
			firstDayWeek = date.getDay()
			// 计算上月最后一天日期
			date.setMonth(month)
			date.setDate(0)
			prevMonthMaxDay = date.getDate()


			var i, len, cells = [], rows = []
			// 添加上个月的日期单元格
			for (i = 0; i < firstDayWeek; i++)
				cells.unshift(prevMonthMaxDay--)
			// 添加这个月的日期单元格
			for (i = 1; i <= lastDay; i++)
				cells.push(i)
			// 添加下个月的日期单元格
			for (i = 1; i < 7 - lastDayWeek; i++)
				cells.push(i)
			// 将cells转为rows
			for (i = 0, len = Math.floor(cells.length / 7); i < len; i++) {
				rows[i] = cells.slice(i * 7, i * 7 + 7)
			}
			return rows
		}
	},
	methods: {
		changeToPrevMonth(month) {
			this.date.setMonth(--month)
			this.date = new Date(this.date)
		},
		changeToNextMonth(month) {
			this.date.setMonth(++month)
			this.date = new Date(this.date)
		},
		changeToPrevYear(year) {
			this.date.setYear(--year)
			this.date = new Date(this.date)
		},
		changeToNextYear(year) {
			this.date.setYear(++year)
			this.date = new Date(this.date)
		},
		changeToSelectedDay(day) {

		}
	}
}
</script>

<style lang="less">

</style>
