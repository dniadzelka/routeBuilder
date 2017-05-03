import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";

@Injectable()
export class RestService extends ApiService {
	
	// private static mapSmth(res: Response) {
	// 	return res.json().docs.map((data) => {
	// 		return RestService.toSmth(data);
	// 	});
	// }
	//
	// private static toSmth(data: any) {
	// 	return {
	// 		key: data.KEY,
	// 		value: data.VALUE
	// 	}
	// }

	getATMs() {
		return super.get('getATM', true);
	}

	addATM(dataParams: any) {
		return super.post('addATM', dataParams, true);
	}
}