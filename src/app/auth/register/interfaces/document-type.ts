export interface DocumentType {
	id: number;
	description: string;
	notation: DocumentTypeNotation;
}

export enum DocumentTypeNotation {
	CC = 'CC',
	TI = 'TI'
}