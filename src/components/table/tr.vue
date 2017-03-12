<template>
	<tr :class="oClass" @click="onClick">
		<th v-if="isInThead">
			<c-checkbox v-if="hasCheckbox" :value="oChecked" :disabled="disabled"></c-checkbox>
		</th>
		<td v-else>
			<c-checkbox v-if="hasCheckbox" :value="oChecked" :disabled="disabled"></c-checkbox>
		</td>
		<slot></slot>
	</tr>
</template>

<script>
import getAncester from 'src/utils/getAncester'

let id = 0

export default {
	name: 'c-tr',
	props: {
		checked: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		oClass() {
			return {
				disabled: this.disabled
			}
		},
		tableParent() {
			const parent = getAncester(this, 'c-table')
			if (!parent)
				throw new Error('[tr]必须处于[table]之内')
			return parent
		},
		isInThead() {
			return this.$parent.$options.name === 'c-thead'
		},
		hasCheckbox() {
			return this.tableParent.selectable
		},
		oChecked() {
			if (this.isInThead) {
				return this.tableParent.allSelected
			}
			return this.tableParent.availableTrVMsState.indexOf(this) > -1 && !this.disabled
		}
	},
	methods: {
		onClick(e) {
			if (!this.disabled) {
				if (this.isInThead) {
					this.oChecked ? this.tableParent.onUnselectAll() : this.tableParent.onSelectAll()
				} else {
					this.tableParent.onSelect(this)
				}
				this.$emit('click', e)
			}
		}
	},
	mounted() {
		if (this.checked) {
			this.tableParent.onSelect(this)
		}
	}
}
</script>
