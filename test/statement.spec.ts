import { Invoice } from '../src/invoice';
import { Plays } from '../src/plays';
import { Statement } from '../src/statement';

describe('Theatrical Players - Statement print', () => {
	it('Should return console rendering', () => {
		const invoice: Invoice = {
			customer: 'BigCo',
			performances: [
				{
					playID: 'hamlet',
					audience: 55,
				},
				{
					playID: 'as-like',
					audience: 35,
				},
				{
					playID: 'othello',
					audience: 40,
				},
			],
		};
		const plays: Plays = {
			'hamlet': { name: 'Hamlet', type: 'tragedy' },
			'as-like': { name: 'As You Like It', type: 'comedy' },
			'othello': { name: 'Othello', type: 'tragedy' },
		};

		expect(Statement.print(invoice, plays)).toEqual(
			`Statement for BigCo\n` +
				` Hamlet: $650.00 (55 seats)\n` +
				` As You Like It: $580.00 (35 seats)\n` +
				` Othello: $500.00 (40 seats)\n` +
				`Amount owed is $1,730.00\n` +
				`You earned 47 credits\n`,
		);
	});

	it('Should throw error when have unknown play type', () => {
		const invoice: Invoice = {
			customer: 'BigCoII',
			performances: [
				{
					playID: 'henry-v',
					audience: 53,
				},
				{
					playID: 'as-like',
					audience: 55,
				},
			],
		};
		const plays: Plays = {
			'henry-v': { name: 'Henry V', type: 'history' },
			'as-like': { name: 'As You Like It', type: 'pastoral' },
		};

		expect(() => {
			Statement.print(invoice, plays);
		}).toThrow(/unknown type/);
	});

	/**
	 * This test fails, you must implement the code for this feature!
	 * Expected result to print the statement as HTML
	 */
	it.skip('Should return HTML rendering', () => {
		const invoice: Invoice = {
			customer: 'BigCo',
			performances: [
				{
					playID: 'hamlet',
					audience: 55,
				},
				{
					playID: 'as-like',
					audience: 35,
				},
				{
					playID: 'othello',
					audience: 40,
				},
			],
		};
		const plays: Plays = {
			'hamlet': { name: 'Hamlet', type: 'tragedy' },
			'as-like': { name: 'As You Like It', type: 'comedy' },
			'othello': { name: 'Othello', type: 'tragedy' },
		};

		expect(Statement.print(invoice, plays)).toEqual(
			`<h1>Statement for BigCo</h1>` +
				`<table>` +
				`<tr><td>Hamlet</td><td>$650.00 (55 seats)</td></tr>` +
				`<tr><td>As You Like It</td><td>$580.00 (35 seats)</td></tr>` +
				`<tr><td>Othello</td><td>$500.00 (40 seats)</td></tr>` +
				`</table>` +
				`<p>Amount owed is $1,730.00</p>` +
				`<p>You earned 47 credits</p>`,
		);
	});
});
