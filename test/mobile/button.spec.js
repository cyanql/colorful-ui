import { registerComponent, hexToRgb } from 'test/utils'
import Button from 'mobile/Button'


describe('Button', () => {
	const vm = registerComponent(Button)
	const btn = vm.$('.colorful-button')

	it('type', async () => {
		vm.type = 'button'
		await vm.nextTick()
		expect(btn.getAttribute('type')).to.be.equal('button')
	})

	it('color type', async () => {
		for (const key of ['primary', 'info', 'success', 'warning', 'error']) {
			vm.color = key
			await vm.nextTick()
			expect(btn.getAttribute('class')).to.contain('colorful-button-' + key)
		}
	})

	it('color hex', async () => {
		const color = '#22bb66'
		vm.color = color
		await vm.nextTick()
		expect(btn.style.color).to.equal(hexToRgb(color))
	})

	it('icon exist && type', async () => {
		const iconType = 'what'
		vm.icon = iconType
		await vm.nextTick()
		const icon = vm.$('.colorful-icon')
		expect(icon).to.be.exist
		icon && expect(icon.getAttribute('class')).to.contain('icon-' + iconType)
	})

	it('style', async () => {
		const style = {
			opacity: '1'
		}
		vm.style = style
		await vm.nextTick()
		expect(btn.style.opacity).to.equal(style.opacity)
	})

	it('class', async () => {
		const className = 'what'
		vm.class = className
		await vm.nextTick()
		expect(btn.getAttribute('class')).to.contain(className)
	})
})
