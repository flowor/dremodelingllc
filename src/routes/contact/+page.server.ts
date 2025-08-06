import { redirect } from "@sveltejs/kit";
import { EMAIL } from "$lib/consts.js";
import { MAIL_CHANNELS_API_KEY } from '$env/static/private';

export const actions = {
	default: async ({request}) => {
	
		let formData = await request.formData();
		const name = formData.get("name") as string;
		const phone = formData.get("phone") as string;
		const email = formData.get("email") as string;
		const message = formData.get("message") as string;
		
		let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
			"method": "POST",
			"headers": {
				"content-type": "application/json",
				"X-Api-Key": MAIL_CHANNELS_API_KEY
			},
			"body": JSON.stringify({
				"personalizations": [
					{ "to": [ {"email": EMAIL,
							"name": "Diaz Remodelling LLC Message"}]}
				],
				"reply_to": {
					"email": email,
					"name": name,
				},
				"from": {
					"email": "no-reply@stellarsteeldesigns.com",
					"name": "Diaz Remodelling LLC Form",
				},
				"subject": "New Form Message from "+ name,
				"content": [{
					"type": "text/plain",
					"value": `From: ${email}${phone != '' ? "\nPhone: "+phone : ''}\n\nMessage: ${message}`,
				}],
			}),
		});

		const resp = await fetch(send_request);
		redirect(302, '/contact/received');
		// return { result: await resp.text() };
	}
};