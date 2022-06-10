(() => {
	interface Client {
		name: string;
		age?: number;
		address: Address;
		// getFullName: (id: string) => void;
		getFullAddress(id: string): string;
	}

	interface Address {
		id: number;
		zip: string;
		city: string;
	}

	const client: Client = {
		name: "Ruben",
		age: 25,
		address: {
			id: 1,
			zip: "12345",
			city: "Madrid",
		},
		getFullAddress(id: string): string {
			return this, this.address.city;
		},
	};

	const client2: Client = {
		name: "Ruben1",
		age: 25,
		address: {
			id: 1,
			zip: "12345",
			city: "Madrid",
		},
		getFullAddress(id: string): string {
			return this, this.address.city;
		},
	};
})();
