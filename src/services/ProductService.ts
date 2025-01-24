interface ProductData {
	[k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
	console.log('Desde product service');
}
