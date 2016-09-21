import { registerComponent, hexToRgb } from 'test/utils'
import ButtonTest from 'test/components/ButtonTest'



describe('Button', () => {
	const vm = registerComponent(ButtonTest)

	it('type', async () => {
		const btn = vm.$('.type')
		expect(btn.getAttribute('type')).to.be.equal('button')
	})

	it('color type', async () => {
		let btn
		for (const key of ['primary', 'info', 'success', 'warning', 'error']) {
			vm.color = key
			await vm.nextTick()
			btn = vm.$('.color-type')
			expect(btn.getAttribute('class')).to.contain('colorful-button-' + key)
		}
	})

	it('color hex', async () => {
		const btn = vm.$('.color-hex')
		expect(btn.style.color).to.equal(hexToRgb('#336699'))
	})

	it('icon exist && type', async () => {
		const btn = vm.$('.icon-button')
		const icon = btn.querySelector('.colorful-icon')
		expect(icon).to.be.exist
		icon && expect(icon.getAttribute('class')).to.contain('colorful-icon-circle')
	})

	it('style', async () => {
		const btn = vm.$('.style')
		expect(btn.style.backgroundColor).to.equal(hexToRgb('#336699'))
	})

	it('class', async () => {
		const btn = vm.$('.class')
		expect(btn).to.be.exist
	})

	it('slot', async () => {
		const btn = vm.$('.class')
		expect(btn.textContent.trim()).to.equal('测试')
	})
})
