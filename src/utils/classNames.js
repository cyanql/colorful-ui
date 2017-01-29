export default function classNames(obj) {
	return Object.keys(obj).filter(key => obj[key]).join(' ')
}
