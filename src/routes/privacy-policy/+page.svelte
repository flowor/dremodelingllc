<script>

	import { EMAIL } from "$lib/consts";
	let description = "Find out how we keep your information safe and secure in our Privacy Policy.";
	import banner from '$lib/assets/banner.jpg';

</script>
<svelte:head>
	<title>Diaz Remodelling LLC - Privacy Policy</title>
	<meta name="description" content="{description}">
	<meta property="og:description" content="{description}"/>
	<meta property="og:image" content="{banner}"/>
</svelte:head>

<div class="text-center slide-fade-in-animation p-4">
	<h1 class="block mt-6 text-4xl leading-tight font-medium">Privacy Policy</h1>
</div>

<div class="container mx-auto p-8 mb-16">
	<section class="py-4">
		<h2><strong>COLLECTION AND USAGE OF PERSONAL INFORMATION</strong></h2>
		<p>
			Welcome to Diaz Remodelling LLC. We value your interest in our services. While you explore
			this site and communicate with us through it, we may request certain personal details to
			provide you with the best information and services. To empower you to make an informed
			decision about sharing your personal information with us on this site, we&#39;re providing you
			with insights into how we collect and utilize such data. By &quot;personal information,&quot;
			we refer to data unique to individuals, such as names, addresses, email addresses, or
			telephone numbers.
		</p>
		<p>We may utilize personal information for the following purposes:</p>
		<ul class="list-disc list-inside ms-8 py-4">
			<li>Verifying your identity to ensure secure and confidential communication.</li>
			<li>Responding to inquiries or requests from you.</li>
			<li>Delivering web-based products and services.</li>
		</ul>
		<p>
			We will not collect personal information about you unless you provide it voluntarily. In some
			instances, and in all cases where required by law or regulation, you can update the
			information you provide to us by emailing us or, if you have established personal profiles, by
			updating them online. Please refer to the specific pages where data is collected for further
			details.
		</p>
		<p>
			We will not sell, license, or otherwise transfer any rights to your personal information to
			third parties unless explicitly authorized by you.
		</p>
		<p>
			We may transmit or disclose your personal information to third parties for the following
			purposes:
		</p>
		<ul class="list-disc list-inside ms-8 py-4">
			<li>
				If required by law, such as pursuant to a subpoena, regulatory oversight, or other legal
				process.
			</li>
		</ul>
		<p>
			This website is not directed at minors under the age of thirteen (13), and we will not
			knowingly collect personally identifiable information from them without parental consent.
		</p>
		<p>
			In all cases, we will disclose your personally identifiable information consistent with
			applicable laws and regulations, and we will require the recipient to protect the information
			and use it only for the purpose it was provided.
		</p>
	</section>

	<section class="py-4">
		<h2><strong>COLLECTION AND USAGE OF NON-PERSONALLY IDENTIFIABLE INFORMATION</strong></h2>
		<p>
			When you visit our website, we may collect certain non-personally identifiable and aggregate
			information about you. This data helps us analyze and improve the usefulness of the
			information we provide. By &quot;non-personally identifiable information,&quot; we mean
			information that does not identify you personally but provides us with anonymous &quot;usage
			data,&quot; such as the number of unique visitors, frequently visited pages, and visitor
			navigation preferences.
		</p>
		<p>
			<strong>Web Browser Information:</strong> Web browsers collect and store information about the
			type of device and operating system you use to access our website, as well as your device&#39;s
			MAC address for facilitating network communications. Accessing this information helps us establish
			a secure and consistent connection with you during your visits.
		</p>
		<p>
			<strong>Cookie Technology:</strong> A &quot;cookie&quot; is a data element that a website can send
			to your browser when you visit. It assigns a unique data element to each visitor, enabling the
			website to recognize repeat users, track usage patterns, and better serve you upon your return.
			The cookie does not extract personal information such as your name or address.
		</p>
		<section class="py-4">
			<p><strong>YOUR EMAIL</strong></p>
			<p>
				We appreciate your comments or questions about our website and have provided email boxes for
				that purpose. We will share your comments and questions with our staff to address your
				concerns. Please note that your email, like most non-encrypted Internet communications, may
				be accessed and viewed by other Internet users without your knowledge and permission while
				in transit to us. For privacy protection, please avoid using email to communicate
				confidential information. Instead, you may contact us via telephone using the number
				provided on our site.
			</p>
		</section>
		<section class="py-4">
			<p><strong>LINKS TO OTHER SITES</strong></p>
			<p>
				Occasionally, our website may provide links to other websites not owned or controlled by
				SSD, which we believe might be useful or interesting to you. However, we cannot be
				responsible for the privacy practices or content accuracy of those websites. Links to
				non-SSD websites do not imply endorsement by SSD of those websites, any products or services
				described on them, or any other materials within them.
			</p>
		</section>
		<section class="py-4">
			<p><strong>SECURITY</strong></p>
			<p>
				While we have implemented reasonable security measures, no data transmission over the
				Internet, wireless transmission, or electronic storage of information can be guaranteed to
				be 100% secure. We cannot ensure or warrant the security of any information we collect, and
				you do so at your own risk. In the event of a security breach compromising your personally
				identifiable information, we may notify you via email to the last email address provided to
				us, subject to our discretion and necessary investigative measures.
			</p>
		</section>
		<section class="py-4">
			<p><strong>CHANGES TO THIS STATEMENT</strong></p>
			<p>
				SSD may update this statement periodically, with the privacy policy version date reflecting
				any revisions. We encourage you to periodically review this policy for any changes that may
				affect you. This statement does not create any contractual or legal rights on behalf of any
				party.
			</p>
			<p>
				If you have questions or need to correct your personal data, please contact us using our
				contact form or by sending an email to <a href="mailto:{EMAIL}" class="underline hover:text-ssdblue-950 text-ssdblue-700"
                >{EMAIL}</a>.
			</p>
		</section>
	</section>
</div>
