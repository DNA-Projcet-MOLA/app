export type SignUpResponse = {
	id: number;
	username: string;
	email: string;
	real_name: string;
	birthdate: string;
	school: string;
	student_number: number;
};

export type SignInResponse = {
	access: string;
	refresh: string;
	user: {
		username: string;
		email: string;
		real_name: string;
		birthdate: string;
		school: string;
		student_number: number;
	};
};
