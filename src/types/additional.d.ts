declare type Maybe<T> = T | null;

declare type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The `Long` scalar type represents non-fractional signed whole numeric values.
	 * Long can represent values between -(2^63) and 2^63 - 1.
	 */
	Long: any;
	/** DateTime is a scalar value that represents an ISO8601 formatted date and time. */
	DateTime: any;
	/** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
	Country: any;
	/** Locale is a scalar value represented as a string language tag. */
	Locale: 'en' | 'de';
	/** DateTime is a scalar value that represents an ISO8601 formatted date. */
	Date: any;
	/** Raw JSON value */
	Json: any;
	/** Represents a currency. Currencies are identified by their [ISO
	 * 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes.
	 */
	Currency: any;
	/** A key that references a resource. */
	KeyReferenceInput: any;
	/** Search filter. It is represented as a string and has th same format as in REST API: "field:filter_criteria" */
	SearchFilter: any;
	/** Search sort */
	SearchSort: any;
	/** YearMonth is a scalar value that represents an ISO8601 formatted year and month. */
	YearMonth: any;
	/** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
	BigDecimal: any;
	/** Time is a scalar value that represents an ISO8601 formatted time. */
	Time: any;
};
