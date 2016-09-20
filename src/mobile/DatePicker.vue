<template>
	<div>
		<span @click="changeToPrevYear"><<</span>
		<span @click="changeToPrevMonth"><</span>
		<span>
			<span>{{year}}</span>
			<span>年</span>
			<span>{{month}}</span>
			<span>{{月}}</span>
		</span>
		<span @click="changeToNextMonth">></span>
		<span @click="changeToNextYear">>></span>
	</div>
	<table>
		<thead>
			<tr>一</tr>
			<tr>二</tr>
			<tr>三</tr>
			<tr>四</tr>
			<tr>五</tr>
			<tr>六</tr>
			<tr>日</tr>
		</thead>
		<tbody>
			<tr :for="cells in rows">
				<td :for="cell in cells" style="{backgroundColor: day === cell ? 'red' : ''}">{{cell}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props: {
		value: Object,
		format: String
		onChange: Function
	},
	data() {
		return {
			year: 2015,
			month: 0,
			day: 0
		}
	},
	computed: {
		rows() {
			var date = new Date,
				day = date.getDate()
				month = date.getMonth(),
				currDayWeek = date.getDay(),
				firstDayWeek,
				lastDayWeek,
				lastDay,
				prevMonthMaxDay

			this.year = year
			this.month = month + 1
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


			var i, cells = [], rows = []
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
		changeToPrevMonth() {
			this.month--
		},
		changeToNextMonth() {
			this.month++
		},
		changeToPrevYear() {
			this.year--
		},
		changeToNextYear() {
			this.year++
		}
	}
}
</script>

<style lang="less">

</style>
