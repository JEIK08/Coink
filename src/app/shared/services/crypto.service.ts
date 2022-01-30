import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import CryptoJs from 'crypto-js';
import TripleDes from 'crypto-js/tripledes';
import EncHex from 'crypto-js/enc-hex';
import Md5 from 'crypto-js/md5';

@Injectable({
	providedIn: 'root'
})
export class CryptoService {

	private keyHash: any;

	constructor() {
		let securityKeyArray = Md5(environment.CRYPTO_KEY).toString();
		securityKeyArray += securityKeyArray.substring(0, 16);
		this.keyHash = EncHex.parse(securityKeyArray);
	}

	encrypt(body: any) {
		const encryptedArray = CryptoJs.enc.Utf8.parse(JSON.stringify(body));
		const payload = TripleDes.encrypt(encryptedArray, this.keyHash, {
			mode: CryptoJs.mode.ECB,
			padding: CryptoJs.pad.Pkcs7
		});
		return payload.ciphertext.toString(CryptoJs.enc.Base64);
	}

	decrypt(payload: string) {
		const encryptedArray = CryptoJs.enc.Base64.parse(payload);
		const serialized_json = TripleDes.decrypt(
			{ ciphertext: encryptedArray },
			this.keyHash,
			{ mode: CryptoJs.mode.ECB, padding: CryptoJs.pad.Pkcs7 }
		);
		return JSON.parse(serialized_json.toString(CryptoJs.enc.Utf8));
	}

}