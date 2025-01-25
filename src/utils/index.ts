export function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-ES', {
		style: 'currency',
		currency: 'USD'
	}).format(amount);
}
