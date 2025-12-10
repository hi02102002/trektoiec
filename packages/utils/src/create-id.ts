import { customAlphabet } from "nanoid";

const URL_ALPHABET =
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-";

export const SIZE_OF_ID = 21;

export const createId = () => {
	return customAlphabet(URL_ALPHABET, SIZE_OF_ID)();
};
