export { default as cn } from "classnames";

export async function blobToBase64(blob: Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			if (reader.result && typeof reader.result === "string") {
				resolve(reader.result);
			} else {
				reject(new Error("Failed to read blob as base64"));
			}
		};

		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}

export function base64ToBlob(dataUrl: string): Blob {
	const matches = dataUrl.match(/^data:(.*?);base64,(.*)$/);
	if (!matches) {
		throw new Error("Invalid base64 data URL");
	}

	const mimeType = matches[1];
	const base64 = matches[2];
	const byteCharacters = atob(base64);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += 512) {
		const slice = byteCharacters.slice(offset, offset + 512);
		const byteNumbers = Array.from(slice).map((char) => char.charCodeAt(0));
		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	return new Blob(byteArrays, { type: mimeType });
}
