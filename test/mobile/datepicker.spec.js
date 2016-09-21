import { registerComponent } from 'test/utils'
import DatePicker from 'test/components/DatePickerTest'


describe('Button', () => {
	const vm = registerComponent(DatePicker)

	it.only('value', () => {
		const datepicker = vm.$('.value')

	})
})
