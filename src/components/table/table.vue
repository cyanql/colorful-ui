<template>
	<table class="c-table">
		<slot></slot>
	</table>
</template>

<script>
export default {
	name: 'c-table',
	props: {
		selectable: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			availableTrVMsState: [],
			availableTrVMs: [],
			allSelected: false
		}
	},
	computed: {
	},
	methods: {
		onSelectAll() {
			this.availableTrVMsState = Array.from(this.availableTrVMs)
			this.allSelected = true
		},
		onUnselectAll() {
			this.availableTrVMsState = []
			this.allSelected = false
		},
		onSelect(vm) {
			const index = this.availableTrVMsState.indexOf(vm)
			if (index > -1) {
				this.availableTrVMsState.splice(index, 1)
			} else {
				this.availableTrVMsState.push(vm)
			}
			this.allSelected = this.availableTrVMs.length === this.availableTrVMsState.length
			this.$emit('select', vm)
		},
		getAvailableTrVMs() {
			const tbody = this.$children.find(vm => vm.$options.name === 'c-tbody')
			return tbody && tbody.$children.filter(vm => !vm.disabled)
		}
	},
	mounted() {
		this.availableTrVMs = this.getAvailableTrVMs()
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

$table-bg-color: $component-bg-color;

.c-table {
    position: relative;
    border-collapse: collapse;
    white-space: nowrap;
    background-color: $table-bg-color;
	cursor: pointer;

	thead {

	}

	tbody {

	}

	tr {
		&.disabled {
			cursor: not-allowed;
			opacity: .6;
		}

		&:not(.disabled):hover {
			background-color: rgba(0,0,0,.05);
		}
	}

	th {
	    text-overflow: ellipsis;
	    font-weight: 700;
	    letter-spacing: 0;
	    padding: 15px;
	}

	td {
		padding: 15px;
	    border-top: 1px solid rgba(0,0,0,.1);
	    border-bottom: 1px solid rgba(0,0,0,.1);
	}
}
</style>
